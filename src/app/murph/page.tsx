import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import React from 'react'

import Page from '@/src/components/layout/Page'
import Leaderboard from '@/src/components/murph/Leaderboard'
import Tracker from '@/src/components/murph/Tracker'
import PageHeading from '@/src/components/PageHeading'
import type { Database } from '@/src/types/database'

export default async function Murph() {
  const supabase = createServerComponentClient<Database>({ cookies })
  let { data: murph, error } = await supabase.from('murph').select('*')

  return (
    <Page>
      <div className="px-2">
        <PageHeading heading="Murph" />
        <Tracker />
        <Leaderboard scores={murph} />
      </div>
    </Page>
  )
}
