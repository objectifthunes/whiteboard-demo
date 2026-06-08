'use client'

import { useEffect, useState } from 'react'
import { FloatingPanel, PanelSection, ThemeToggle, WhiteboardShell } from '@objectifthunes/whiteboard'
import { useThemeMode } from '@/components/ThemeProvider'

export default function Page() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])
  const { theme, toggle } = useThemeMode()
  if (!mounted) return null
  return (
    <WhiteboardShell extraActions={<ThemeToggle theme={theme} onToggle={toggle} />}>
      <FloatingPanel title="Try the ZoomBar" defaultPosition={{ x: 60, y: 60 }} width={280} focusable>
        <PanelSection heading="Right edge">
          <p style={{ color: 'var(--wb-text-muted)', fontSize: 12 }}>
            +/− zoom · Fit-to-content · Reset positions · Snap-to-grid · ThemeToggle (passed via{' '}
            <code>extraActions</code>).
          </p>
        </PanelSection>
      </FloatingPanel>
    </WhiteboardShell>
  )
}
