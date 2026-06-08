'use client'

import { Pill, TagRow } from '@objectifthunes/whiteboard'

export function Demo() {
  return (
    <TagRow>
      <Pill>default</Pill>
      <Pill tone="success">success</Pill>
      <Pill tone="warning">warning</Pill>
      <Pill tone="danger">danger</Pill>
    </TagRow>
  )
}
