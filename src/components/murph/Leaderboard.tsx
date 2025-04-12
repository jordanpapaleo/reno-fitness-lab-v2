'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import React from 'react'

import { sortByProperty } from '@/src/utils/sorting'

import { TOTAL_PROGRESS } from './helpers'
import Table from '../Table'

// @ts-expect-error
export default function Leaderboard({ scores }) {
  const supabase = createClientComponentClient()
  const router = useRouter()
  const [completeScores, setCompleteScores] = React.useState([])
  const [competingProgress, setCompetingProgress] = React.useState([])

  React.useEffect(() => {
    const channel = supabase
      .channel('realtime murph')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'murph',
        },
        () => {
          router.refresh()
        },
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [supabase, router])

  React.useEffect(() => {
    // @ts-expect-error
    const complete = []
    // @ts-expect-error
    const compete = []

    // @ts-expect-error
    scores.forEach((score) => {
      if (score.complete) {
        complete.push(score)
      } else {
        compete.push({
          ...score,
          progress: [
            score.mile_one,
            score.pullups,
            score.pushups,
            score.squats,
            score.mile_two,
          ]
            .filter(Boolean)
            .reduce((curr, next) => {
              return curr + next
            }, 0),
        })
      }
    })

    // @ts-expect-error
    setCompetingProgress(sortByProperty(compete, 'progress', 'des'))
    // @ts-expect-error
    setCompleteScores(complete)
  }, [scores])

  return (
    <div>
      {competingProgress.length > 0 && (
        <div>
          <h2>Competing</h2>
          <div className="m-0 p-0">
            <Table
              className="w-full"
              headings={[
                { key: 'name', label: 'Name' },
                { key: 'progress', label: '%' },
                { key: 'total_time', label: 'Time' },
                { key: 'mile_one', label: 'M1' },
                { key: 'pullups', label: 'Pullups' },
                { key: 'pushups', label: 'Pushups' },
                { key: 'squats', label: 'Squat' },
                { key: 'mile_two', label: 'M2' },
              ]}
              renderOverride={{
                // @ts-expect-error
                mile_one: (row) => (row.mile_one ? 'x' : ''),
                // @ts-expect-error
                mile_two: (row) => (row.mile_two ? 'x' : ''),
                // @ts-expect-error
                progress: (row) =>
                  Math.round((row.progress / TOTAL_PROGRESS) * 100),
              }}
              rows={competingProgress}
            />
          </div>
        </div>
      )}

      <div>
        <h2>Leaderboard</h2>
        <Table
          className="w-full"
          headings={[
            { key: 'name', label: 'Name' },
            { key: 'total_time', label: 'Total Time' },
          ]}
          rows={completeScores}
        />
      </div>
    </div>
  )
}
