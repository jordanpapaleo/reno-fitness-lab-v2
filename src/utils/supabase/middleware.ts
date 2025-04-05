import { getRoutes, Routes } from '@/config/routes'
import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'
import { getProtectedRoutes } from './getProtectedRoutes'
import { DbTables } from '../db/tables'

export async function updateSession(req: NextRequest) {
  const nextPath = req.nextUrl.pathname

  let supabaseResponse = NextResponse.next({
    request: req,
  })

  supabaseResponse.headers.set('x-pathname', nextPath)

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return req.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            req.cookies.set(name, value),
          )
          supabaseResponse = NextResponse.next({
            request: req,
          })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options),
          )
        },
      },
    },
  )

  // IMPORTANT: Avoid writing any logic between createServerClient and
  // supabase.auth.getUser(). A simple mistake could make it very hard to debug
  // issues with users being randomly logged out.

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const pageRoutes = getRoutes()
  const { protectedRoutes, routeMap } = getProtectedRoutes(pageRoutes)

  // console.log('user')
  // console.log(JSON.stringify(user, null, 2))
  // console.log('=====')
  // console.log(nextPath)
  // console.log(JSON.stringify(protectedRoutes, null, 2))

  // Authentication check
  if (protectedRoutes.includes(nextPath)) {
    if (!user) {
      const url = req.nextUrl.clone()
      url.pathname = Routes.LOGIN
      return NextResponse.redirect(url)
    }

    // Authorization check
    const authorizationRequired = routeMap.get(nextPath)

    if (authorizationRequired.length) {
      const { data: profile, error: profileError } = await supabase
        .from(DbTables.PROFILES)
        .select('*')
        .single()

      console.log(JSON.stringify(profile, null, 2))

      const userAuthorization = profile?.role

      if (profileError || !authorizationRequired.includes(userAuthorization)) {
        const url = req.nextUrl.clone()
        url.pathname = Routes.NOT_FOUND
        return NextResponse.redirect(url)
      }
    }
  }

  // IMPORTANT: You *must* return the supabaseResponse object as it is. If you're
  // creating a new response object with NextResponse.next() make sure to:
  // 1. Pass the request in it, like so:
  //    const myNewResponse = NextResponse.next({ request })
  // 2. Copy over the cookies, like so:
  //    myNewResponse.cookies.setAll(supabaseResponse.cookies.getAll())
  // 3. Change the myNewResponse object to fit your needs, but avoid changing
  //    the cookies!
  // 4. Finally:
  //    return myNewResponse
  // If this is not done, you may be causing the browser and server to go out
  // of sync and terminate the user's session prematurely!

  return supabaseResponse
}
