import { type NextRequest } from 'next/server'
import { updateSession } from '@/utils/supabase/middleware'

/*
Be careful when protecting pages. The server gets the user session from the cookies, which can be spoofed by anyone.
Always use supabase.auth.getUser() to protect pages and user data.
Never trust supabase.auth.getSession() inside server code such as middleware. It isn't guaranteed to revalidate the Auth token.
It's safe to trust getUser() because it sends a request to the Supabase Auth server every time to revalidate the Auth token.
*/

export async function middleware(request: NextRequest) {
  // update user's auth session
  return await updateSession(request)
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
