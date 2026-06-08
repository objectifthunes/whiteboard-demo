'use client'

import { useMemo } from 'react'
import { Button, ButtonRow, useWhiteboardLayout, useWhiteboardStore, WHITEBOARD_GRID } from '@objectifthunes/whiteboard'

const WIDTHS = { a: 220, b: 220, c: 220 }

export function LayoutHookDemo() {
  const opts = useMemo(() => ({ widths: WIDTHS, startX: 20, y: 20, gap: WHITEBOARD_GRID }), [])
  const { positions } = useWhiteboardLayout(opts)

  return (
    <pre style={{
      margin: 0,
      padding: '0.75rem 1rem',
      background: 'var(--wb-surface-muted)',
      borderRadius: 'var(--wb-radius-sm)',
      fontSize: 12,
      lineHeight: 1.5,
      overflowX: 'auto',
    }}>{JSON.stringify(positions, null, 2)}</pre>
  )
}

export function StoreControlsDemo() {
  const fit = useWhiteboardStore(s => s.fitToContent)
  const reset = useWhiteboardStore(s => s.resetWidgets)
  const setSnap = useWhiteboardStore(s => s.setSnapToGrid)
  const snap = useWhiteboardStore(s => s.snapToGrid)

  return (
    <ButtonRow>
      <Button variant="secondary" onClick={fit}>fitToContent()</Button>
      <Button variant="secondary" onClick={reset}>resetWidgets()</Button>
      <Button variant="secondary" onClick={() => setSnap(v => !v)}>
        snapToGrid: {snap ? 'on' : 'off'}
      </Button>
    </ButtonRow>
  )
}
