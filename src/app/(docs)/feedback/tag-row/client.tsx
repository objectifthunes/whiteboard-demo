'use client'

import { Chip, Pill, TagRow } from '@objectifthunes/whiteboard'

export function Demo() {
  return (
    <TagRow>
      <Chip>react</Chip>
      <Chip>zustand</Chip>
      <Pill tone="success">live</Pill>
      <Pill tone="warning">beta</Pill>
    </TagRow>
  )
}
