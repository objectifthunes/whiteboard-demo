'use client'

import { useState } from 'react'
import { CoordGrid, CoordInput, Field, Input, Label, Select, Stack, Textarea } from '@objectifthunes/whiteboard'

export function FieldDemo() {
  return (
    <Stack>
      <Field label="Name" htmlFor="name" hint="Display name only.">
        <Input id="name" placeholder="John Doe" />
      </Field>
      <Field label="Email" htmlFor="email" error="Email is required.">
        <Input id="email" type="email" />
      </Field>
    </Stack>
  )
}

export function PrimitivesDemo() {
  return (
    <Stack>
      <Label htmlFor="bio">Bio</Label>
      <Textarea id="bio" placeholder="Tell us about yourself…" />
      <Label htmlFor="region">Region</Label>
      <Select id="region">
        <option>Europe</option>
        <option>Americas</option>
        <option>APAC</option>
      </Select>
    </Stack>
  )
}

export function CoordsDemo() {
  const [pos, setPos] = useState({ x: 0.5, y: -0.25, z: 1.2 })
  return (
    <CoordGrid>
      <CoordInput axis="x" value={pos.x} onChange={e => setPos(p => ({ ...p, x: Number(e.target.value) }))} />
      <CoordInput axis="y" value={pos.y} onChange={e => setPos(p => ({ ...p, y: Number(e.target.value) }))} />
      <CoordInput axis="z" value={pos.z} onChange={e => setPos(p => ({ ...p, z: Number(e.target.value) }))} />
    </CoordGrid>
  )
}
