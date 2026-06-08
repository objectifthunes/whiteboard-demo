'use client'

import { ThemeToggle } from '@objectifthunes/whiteboard'
import { useThemeMode } from '@/components/ThemeProvider'

export function Demo() {
  const { theme, toggle } = useThemeMode()
  return (
    <div className="demo-row">
      <ThemeToggle theme={theme} onToggle={toggle} />
      <span style={{ color: 'var(--wb-text-muted)', fontSize: 13 }}>Currently: {theme}</span>
    </div>
  )
}
