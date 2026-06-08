'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SECTIONS } from './nav'

export function Sidebar() {
  const pathname = usePathname()
  return (
    <nav className="docs-sidebar" aria-label="Documentation sections">
      <Link href="/" className="docs-sidebar__brand">@objectifthunes/whiteboard</Link>
      {SECTIONS.map(section => (
        <div key={section.title} className="docs-sidebar__section">
          <div className="docs-sidebar__heading">{section.title}</div>
          <ul className="docs-sidebar__list">
            {section.items.map(item => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`docs-sidebar__link${pathname === item.href ? ' is-active' : ''}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  )
}
