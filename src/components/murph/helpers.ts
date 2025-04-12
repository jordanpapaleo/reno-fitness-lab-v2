import { format } from 'date-fns'

export enum Todo {
  firstMile = 'mile_one',
  lastMile = 'mile_two',
  pushups = 'pushups',
  pullups = 'pullups',
  squats = 'squats',
}

export type TodoKey = keyof typeof Todo
export type TodoValue = (typeof Todo)[TodoKey]

export const TOTAL_PROGRESS = 1000

const pad = (num: number) => String(num).padStart(2, '0')

/**
 * Formats milliseconds as "hh:mm:ss".
 * @param {number} ms - The time duration in milliseconds.
 * @returns {string} The formatted time string.
 */
export function formatMilliseconds(ms: number): string {
  // Convert to seconds
  let seconds = ms / 1000
  // Extract hours
  // @ts-expect-error
  const hours = parseInt(seconds / 3600) // 3,600 seconds in 1 hour
  seconds = seconds % 3600 // seconds remaining after extracting hours
  // Extract minutes:
  // @ts-expect-error
  const minutes = parseInt(seconds / 60) // 60 seconds in 1 minute
  // Keep only seconds not extracted to minutes:
  seconds = seconds % 60

  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
}
