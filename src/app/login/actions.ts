'use server'

import { revalidatePath } from 'next/cache'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

import { routes } from '@/config/appRoutes'
import { createClient } from '@/utils/supabase/server'

export async function signIn(formData: FormData) {
  const supabase = createClient()
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    const message = error.message || 'Could not authenticate user'
    redirect(`${routes.login}?error=${message}`)
  }

  revalidatePath('/', 'layout')
  redirect(routes.members)
}

export async function signUp(formData: FormData) {
  const supabase = createClient()
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const { data: signupData, error: signupError } = await supabase.auth.signUp({
    email,
    password,
  })

  if (signupError) {
    const message = signupError.message || 'Could not create user'
    redirect(`${routes.login}?error=${message}`)
  }

  revalidatePath('/', 'layout')
  redirect(`${routes.login}?success=Check email to continue sign in process`)
}
/*
http://localhost:3003/api/auth/confirm?token_hash=pkce_ba4e719edee891c16138854c4f55f8ebac51a7956ce68983df2139aa&type=recovery
*/
export async function forgotPassword(formData: FormData) {
  const supabase = createClient()
  const email = formData.get('email') as string
  const redirectTo = headers().get('origin') + routes.updatePassword

  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo,
  })

  if (error) {
    return redirect(`${routes.login}?error=Could not reset password`)
  }

  revalidatePath('/', 'layout')
  return redirect(routes.login + '?success=Check email to reset password')
}
