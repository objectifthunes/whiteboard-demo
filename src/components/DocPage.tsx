import type { ReactNode } from 'react'

interface DocPageProps {
  title: string
  lead?: ReactNode
  children: ReactNode
}

export function DocPage({ title, lead, children }: DocPageProps) {
  return (
    <article className="docs-page">
      <header className="docs-page__header">
        <h1 className="docs-page__title">{title}</h1>
        {lead ? <p className="docs-page__lead">{lead}</p> : null}
      </header>
      <div className="docs-page__body">{children}</div>
    </article>
  )
}
