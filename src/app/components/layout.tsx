import type { ReactNode } from 'react'
import { Sidebar } from '@/components/Sidebar'
import { DocHeader } from '@/components/DocHeader'

export default function ComponentsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="docs-shell">
      <Sidebar />
      <main className="docs-main">
        <DocHeader />
        <div className="docs-main__scroll">{children}</div>
      </main>
    </div>
  )
}
