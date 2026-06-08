'use client'

import { useState } from 'react'
import { CoordGrid, CoordInput } from '@objectifthunes/whiteboard'

export function Demo() {
  const [pos, setPos] = useState({ x: 0.5, y: -0.25 })
  return (
    <CoordGrid>
      <CoordInput axis="x" value={pos.x} onChange={e => setPos(p => ({ ...p, x: Number(e.target.value) }))} />
      <CoordInput axis="y" value={pos.y} onChange={e => setPos(p => ({ ...p, y: Number(e.target.value) }))} />
    </CoordGrid>
  )
}
