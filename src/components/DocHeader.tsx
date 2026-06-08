'use client'

import { ThemeToggle } from '@objectifthunes/whiteboard'
import { useThemeMode } from './ThemeProvider'

export function DocHeader() {
  const { theme, toggle } = useThemeMode()
  return (
    <header className="docs-header">
      <div className="docs-header__title">Component reference</div>
      <ThemeToggle theme={theme} onToggle={toggle} />
    </header>
  )
}
