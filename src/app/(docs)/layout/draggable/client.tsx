'use client'

import { Button, DraggableSurface, MutedText, SectionTitle, resetDraggables } from '@objectifthunes/whiteboard'

export function Demo() {
  return (
    <div style={{ position: 'relative', height: 260, borderRadius: 10, background: 'var(--wb-bg)', border: '1px solid var(--wb-border)', overflow: 'hidden' }}>
      <DraggableSurface id="demo-a" persist={false} padding="sm" style={{ position: 'absolute', left: 18, top: 18, width: 190 }}>
        <SectionTitle>Drag me</SectionTitle>
        <MutedText size="xs">Snaps to the grid on release. Double-click to reset.</MutedText>
      </DraggableSurface>
      <DraggableSurface id="demo-b" persist={false} padding="sm" style={{ position: 'absolute', right: 18, bottom: 52, width: 170 }}>
        <MutedText size="xs">Me too — buttons inside still click:</MutedText>
        <Button variant="secondary" style={{ marginTop: 6 }} onClick={() => resetDraggables()}>
          Reset layout
        </Button>
      </DraggableSurface>
    </div>
  )
}
