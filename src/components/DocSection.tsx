import type { ReactNode } from 'react'

interface DocSectionProps {
  id?: string
  title: string
  description?: ReactNode
  children: ReactNode
}

/** A documented example: heading, optional description, live demo, code block. */
export function DocSection({ id, title, description, children }: DocSectionProps) {
  return (
    <section id={id} className="docs-example">
      <h2 className="docs-example__title">{title}</h2>
      {description ? <p className="docs-example__description">{description}</p> : null}
      <div className="docs-example__body">{children}</div>
    </section>
  )
}
