import type { ReactNode } from 'react'
import { Eye } from 'lucide-react'
import { Eyebrow } from './Eyebrow'

/** A bordered surface that frames a live component example, with a "PREVIEW" eyebrow. */
export function Preview({ children, padded = true }: { children: ReactNode; padded?: boolean }) {
  return (
    <div className="export-block">
      <Eyebrow icon={<Eye size={12} strokeWidth={1.75} />}>PREVIEW</Eyebrow>
      <div className={`preview${padded ? '' : ' preview--bare'}`}>{children}</div>
    </div>
  )
}
