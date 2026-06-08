'use client'

import { useEffect, useState } from 'react'
import { FloatingPanel, PanelSection, WhiteboardShell } from '@objectifthunes/whiteboard'

export default function Page() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])
  if (!mounted) return null
  return (
    <WhiteboardShell>
      <FloatingPanel title="Settings" defaultPosition={{ x: 60, y: 60 }} width={260} focusable>
        <PanelSection heading="Drag the canvas">
          <p style={{ color: 'var(--wb-text-muted)', fontSize: 12 }}>
            Drag the empty space to pan · scroll to zoom · double-click a panel header to focus it.
          </p>
        </PanelSection>
      </FloatingPanel>
      <FloatingPanel title="Layers" defaultPosition={{ x: 360, y: 120 }} width={240} focusable>
        <PanelSection heading="Try the minimap">
          <p style={{ color: 'var(--wb-text-muted)', fontSize: 12 }}>
            The minimap (bottom-right) follows every panel — click and drag inside it to pan the camera.
          </p>
        </PanelSection>
      </FloatingPanel>
    </WhiteboardShell>
  )
}
