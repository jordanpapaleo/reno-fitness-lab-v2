'use server'

import { createClient } from '@/utils/supabase/server'

import { ProfileT } from '@/types/dbTypes'
import { DbTables } from '../tables'

export async function getAuthProfile() {
  const supabase = await createClient()
  const { data: authUser, error: authError } = await supabase.auth.getUser()

  if (authError) {
    return { authUser: null, profile: null, error: authError }
  }

  const { data: profile, error: profileError } = await supabase
    .from(DbTables.PROFILES)
    .select('*')
    .single()

  if (profileError) {
    return { authUser, profile: null, error: profileError }
  }

  return {
    authUser,
    profile: profile as ProfileT,
    error: null,
  }
}
