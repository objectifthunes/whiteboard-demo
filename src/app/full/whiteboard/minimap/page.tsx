'use client'

import { useEffect, useState } from 'react'
import { FloatingPanel, PanelSection, WhiteboardShell } from '@objectifthunes/whiteboard'

export default function Page() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])
  if (!mounted) return null
  return (
    <WhiteboardShell>
      {Array.from({ length: 6 }).map((_, i) => (
        <FloatingPanel
          key={i}
          title={`Panel ${i + 1}`}
          defaultPosition={{ x: 60 + (i % 3) * 280, y: 60 + Math.floor(i / 3) * 220 }}
          width={240}
          focusable
        >
          <PanelSection heading={`Section ${i + 1}`}>
            <p style={{ color: 'var(--wb-text-muted)', fontSize: 12 }}>
              Watch the minimap in the bottom-right · drag it to pan the camera.
            </p>
          </PanelSection>
        </FloatingPanel>
      ))}
    </WhiteboardShell>
  )
}
