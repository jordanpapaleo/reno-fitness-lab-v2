import { DbTables } from '@/utils/db/tables'
import { Database } from './dbSchema'

export type ProfileT = Database['public']['Tables'][DbTables.PROFILES]['Row']

export type ProfileInputT = Omit<
  ProfileT,
  'active' | 'created_at' | 'email' | 'id' | 'role' | 'updated_at'
>
