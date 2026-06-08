import type { ReactNode } from 'react'

/** A small uppercase mono label with an optional leading glyph. */
export function Eyebrow({ icon, children }: { icon?: ReactNode; children: ReactNode }) {
  return (
    <div className="eyebrow">
      {icon ? <span className="eyebrow__icon" aria-hidden>{icon}</span> : null}
      <span>{children}</span>
    </div>
  )
}
