'use client'

import { CanvasStage, OverlayIconButton } from '@objectifthunes/whiteboard'
import { Maximize2, X } from 'lucide-react'

export function Demo() {
  return (
    <CanvasStage>
      <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', color: 'var(--wb-text-muted)', fontSize: 12 }}>
        Three overlay buttons — corners.
      </div>
      <OverlayIconButton placement="top-right" aria-label="Fullscreen"><Maximize2 size={14} /></OverlayIconButton>
      <OverlayIconButton placement="bottom-left" aria-label="Close"><X size={14} /></OverlayIconButton>
      <OverlayIconButton placement="bottom-right" aria-label="Close"><X size={14} /></OverlayIconButton>
    </CanvasStage>
  )
}
