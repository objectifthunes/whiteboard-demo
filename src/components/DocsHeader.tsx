'use client'

import { ThemeToggle } from '@objectifthunes/whiteboard'
import Link from 'next/link'
import { useThemeMode } from './ThemeProvider'

export function DocsHeader() {
  const { theme, toggle } = useThemeMode()
  return (
    <header className="docs-header">
      <Link href="/" className="docs-header__crumb">@objectifthunes/whiteboard</Link>
      <div className="docs-header__actions">
        <a href="https://www.npmjs.com/package/@objectifthunes/whiteboard" target="_blank" rel="noopener noreferrer" className="docs-header__link">npm</a>
        <a href="https://github.com/objectifthunes/whiteboard" target="_blank" rel="noopener noreferrer" className="docs-header__link">repo</a>
        <ThemeToggle theme={theme} onToggle={toggle} />
      </div>
    </header>
  )
}
