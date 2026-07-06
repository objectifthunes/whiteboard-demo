'use client'

import { useEffect, useState } from 'react'
import { FloatingPanel, PanelSection, WhiteboardShell } from '@objectifthunes/whiteboard'

export function Demo() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])
  return (
    <div style={{ height: 460 }}>
      {mounted ? (
        <WhiteboardShell contained>
          {Array.from({ length: 6 }).map((_, i) => (
            <FloatingPanel
              key={i}
              title={`Panel ${i + 1}`}
              defaultPosition={{ x: 40 + (i % 3) * 280, y: 40 + Math.floor(i / 3) * 200 }}
              width={240}
              focusable
            >
              <PanelSection heading={`Section ${i + 1}`}>
                <p style={{ color: 'var(--wb-text-muted)', fontSize: 12 }}>
                  Drag inside the minimap (bottom-right) to pan the camera.
                </p>
              </PanelSection>
            </FloatingPanel>
          ))}
        </WhiteboardShell>
      ) : null}
    </div>
  )
}
