import type { ReactNode } from 'react'
import { Eyebrow } from './Eyebrow'

/** A subdued block of notes / tradeoffs under a "NOTES" eyebrow. */
export function Notes({ children }: { children: ReactNode }) {
  return (
    <div className="export-block">
      <Eyebrow icon="✎">NOTES</Eyebrow>
      <div className="notes">{children}</div>
    </div>
  )
}
