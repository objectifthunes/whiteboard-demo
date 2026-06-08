'use client'

import { CanvasStage, ImageThumb, OverlayIconButton, Stack } from '@objectifthunes/whiteboard'
import { Maximize2, X } from 'lucide-react'

export function CanvasStageDemo() {
  return (
    <CanvasStage hint="16:9 surface · 1px border · pixel-perfect">
      <div style={{
        position: 'absolute',
        inset: 0,
        display: 'grid',
        placeItems: 'center',
        color: 'var(--wb-text-muted)',
      }}>Your scene goes here</div>
      <OverlayIconButton placement="top-right" aria-label="Fullscreen"><Maximize2 size={14} /></OverlayIconButton>
      <OverlayIconButton placement="bottom-right" aria-label="Close"><X size={14} /></OverlayIconButton>
    </CanvasStage>
  )
}

export function ImageThumbDemo() {
  return (
    <Stack>
      <ImageThumb src={null} alt="No image" size="md" placeholder="No image yet" />
      <ImageThumb
        src="https://images.unsplash.com/photo-1503416997304-7f8bf166c121?w=400&q=70"
        alt="Cabin in the woods"
        size="md"
        fit="cover"
      />
    </Stack>
  )
}
