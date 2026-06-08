'use client'

import { useEffect, useState } from 'react'
import {
  FloatingPanel,
  PanelSection,
  WhiteboardShell,
  belowPanel,
  usePanelRect,
  Button,
} from '@objectifthunes/whiteboard'

export default function Page() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])
  if (!mounted) return null

  const settingsRect = usePanelRect({ x: 60, y: 60 })

  return (
    <WhiteboardShell>
      <FloatingPanel title="Settings" defaultPosition={{ x: 60, y: 60 }} trackRect={settingsRect} focusable>
        <PanelSection heading="Header"><p style={{ color: 'var(--wb-text-muted)', fontSize: 12 }}>Drag the title bar.</p></PanelSection>
        <PanelSection heading="Tracked"><p style={{ color: 'var(--wb-text-muted)', fontSize: 12 }}>The next panel is anchored below me via belowPanel(ref.current).</p></PanelSection>
        <Button variant="secondary" onClick={() => {}}>An action</Button>
      </FloatingPanel>
      <FloatingPanel title="Layers" defaultPosition={belowPanel(settingsRect.current)} focusable>
        <PanelSection heading="Anchored below">
          <p style={{ color: 'var(--wb-text-muted)', fontSize: 12 }}>
            Drag the Settings panel and re-mount — my default position follows.
          </p>
        </PanelSection>
      </FloatingPanel>
    </WhiteboardShell>
  )
}
