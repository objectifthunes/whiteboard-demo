import Link from 'next/link'
import { DocPage } from '@/components/DocPage'
import { SECTIONS } from '@/components/nav'

export default function ComponentsIndex() {
  return (
    <DocPage
      title="Components"
      lead="Live, copy-pasteable reference for every export in @objectifthunes/whiteboard."
    >
      {SECTIONS.map(section => (
        <section key={section.title}>
          <h2 className="docs-example__title">{section.title}</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0.5rem 0 0', display: 'grid', gap: '0.4rem' }}>
            {section.items.map(item => (
              <li key={item.href}>
                <Link href={item.href} style={{ color: 'var(--wb-text-secondary)', textDecoration: 'underline' }}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </DocPage>
  )
}
