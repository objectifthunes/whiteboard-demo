import type { ReactNode } from 'react'

/** Bordered surface that frames live component examples. */
export function Preview({ children }: { children: ReactNode }) {
  return <div className="docs-preview">{children}</div>
}
