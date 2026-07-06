'use client'

import { useEffect, useState } from 'react'
import { FloatingPanel, PanelSection, WhiteboardShell, Button } from '@objectifthunes/whiteboard'

export function Demo() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])
  return (
    <div style={{ height: 460 }}>
      {mounted ? (
        <WhiteboardShell contained>
          <FloatingPanel title="Settings" defaultPosition={{ x: 60, y: 60 }} width={260} focusable>
            <PanelSection heading="Drag the title bar">
              <p style={{ color: 'var(--wb-text-muted)', fontSize: 12 }}>
                Panels are draggable, world-space rectangles. Double-click the header to focus.
              </p>
            </PanelSection>
            <Button variant="secondary" onClick={() => {}}>An action</Button>
          </FloatingPanel>
          <FloatingPanel title="Layers" defaultPosition={{ x: 360, y: 150 }} width={240} focusable>
            <PanelSection heading="Second panel">
              <p style={{ color: 'var(--wb-text-muted)', fontSize: 12 }}>
                Each panel registers its rect into the store for the minimap and fit-to-content.
              </p>
            </PanelSection>
          </FloatingPanel>
        </WhiteboardShell>
      ) : null}
    </div>
  )
}
