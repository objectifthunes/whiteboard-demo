import Link from 'next/link'
import { TOTAL_EXPORTS } from './exports'

/** Sidebar brand block — small logo, "LIBRARY" eyebrow, name, version + export count. */
export function Brand() {
  return (
    <Link href="/" className="brand" aria-label="@objectifthunes/whiteboard home">
      <span className="brand__mark" aria-hidden>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect x="2" y="2" width="28" height="28" rx="6" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="11" cy="11" r="1.5" fill="currentColor" />
          <circle cx="21" cy="11" r="1.5" fill="currentColor" />
          <circle cx="11" cy="21" r="1.5" fill="currentColor" />
          <circle cx="21" cy="21" r="1.5" fill="currentColor" />
        </svg>
      </span>
      <span className="brand__text">
        <span className="brand__eyebrow">LIBRARY</span>
        <span className="brand__name">@objectifthunes/whiteboard</span>
        <span className="brand__meta">v0.4.0 · {TOTAL_EXPORTS} exports</span>
      </span>
    </Link>
  )
}
