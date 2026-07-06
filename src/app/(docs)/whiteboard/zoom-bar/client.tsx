'use client'

import { useEffect, useState } from 'react'
import { FloatingPanel, PanelSection, ThemeToggle, WhiteboardShell } from '@objectifthunes/whiteboard'
import { useThemeMode } from '@/components/ThemeProvider'

export function Demo() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])
  const { theme, toggle } = useThemeMode()
  return (
    <div style={{ height: 460 }}>
      {mounted ? (
        <WhiteboardShell contained extraActions={<ThemeToggle theme={theme} onToggle={toggle} />}>
          <FloatingPanel title="Try the ZoomBar" defaultPosition={{ x: 60, y: 80 }} width={280} focusable>
            <PanelSection heading="Right edge">
              <p style={{ color: 'var(--wb-text-muted)', fontSize: 12 }}>
                +/− zoom · fit-to-content · reset positions · snap-to-grid · ThemeToggle (via{' '}
                <code>extraActions</code>).
              </p>
            </PanelSection>
          </FloatingPanel>
        </WhiteboardShell>
      ) : null}
    </div>
  )
}
