'use server'

import { PostgrestError } from '@supabase/supabase-js'

import { ProfileInputT, ProfileT } from '@/types/dbTypes'
import { createClient } from '@/utils/supabase/server'

import { DbTables } from '../tables'

export async function dbUpdateProfile(
  profileId: string,
  profileUpdate: ProfileInputT,
) {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from(DbTables.PROFILES)
    .update(profileUpdate)
    .eq('id', profileId)
    .select()
    .single()

  return {
    data: data as ProfileT,
    error: error as PostgrestError,
  }
}
