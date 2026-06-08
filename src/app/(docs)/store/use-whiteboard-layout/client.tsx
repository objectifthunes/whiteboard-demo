'use client'

import { useMemo } from 'react'
import { WHITEBOARD_GRID, useWhiteboardLayout } from '@objectifthunes/whiteboard'

const WIDTHS = { settings: 220, layers: 220, inspector: 220 }

export function Demo() {
  const opts = useMemo(() => ({ widths: WIDTHS, startX: 20, y: 20, gap: WHITEBOARD_GRID }), [])
  const { positions, panelWidth, layout } = useWhiteboardLayout(opts)
  return (
    <pre style={{
      margin: 0,
      padding: '0.75rem 1rem',
      background: 'var(--docs-surface-2)',
      borderRadius: 8,
      fontSize: 12,
      lineHeight: 1.55,
      overflowX: 'auto',
      color: 'var(--docs-text)',
    }}>{JSON.stringify({ positions, panelWidth, layout }, null, 2)}</pre>
  )
}
