'use client'

import { useState } from 'react'
import { Slider, Stack } from '@objectifthunes/whiteboard'

export function Demo() {
  const [threshold, setThreshold] = useState(137)
  const [opacity, setOpacity] = useState(0.9)
  return (
    <Stack style={{ maxWidth: 320 }}>
      <Slider label="Ink threshold" display={`${threshold} (auto)`} min={0} max={255} value={threshold} onChange={setThreshold} />
      <Slider label="Plan opacity" display={`${Math.round(opacity * 100)}%`} min={0.1} max={1} step={0.05} value={opacity} onChange={setOpacity} />
    </Stack>
  )
}
