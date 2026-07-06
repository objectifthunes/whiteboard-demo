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
          <FloatingPanel title="Settings" defaultPosition={{ x: 60, y: 60 }} width={260} focusable>
            <PanelSection heading="Drag the canvas">
              <p style={{ color: 'var(--wb-text-muted)', fontSize: 12 }}>
                Drag empty space to pan · scroll to zoom · double-click a panel header to focus it.
              </p>
            </PanelSection>
          </FloatingPanel>
          <FloatingPanel title="Layers" defaultPosition={{ x: 360, y: 160 }} width={240} focusable>
            <PanelSection heading="Try the minimap">
              <p style={{ color: 'var(--wb-text-muted)', fontSize: 12 }}>
                The minimap (bottom-right) follows every panel — drag inside it to pan.
              </p>
            </PanelSection>
          </FloatingPanel>
        </WhiteboardShell>
      ) : null}
    </div>
  )
}
