'use client'

import { useState } from 'react'
import { NumberField, Stack } from '@objectifthunes/whiteboard'

export function Demo() {
  const [height, setHeight] = useState(2.7)
  const [scale, setScale] = useState(100)
  return (
    <Stack style={{ maxWidth: 260 }}>
      <NumberField label="Wall height (m)" min={0.1} max={10} step={0.1} value={height} onChange={setHeight} />
      <NumberField label="Scale (px per metre)" min={1} step={1} value={scale} onChange={setScale} />
    </Stack>
  )
}
