'use client'

import { CanvasStage } from '@objectifthunes/whiteboard'

export function Demo() {
  return (
    <CanvasStage hint="16:9 surface · 1px border · drop a scene inside">
      <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', color: 'var(--wb-text-muted)', fontSize: 12 }}>
        Your scene goes here
      </div>
    </CanvasStage>
  )
}
