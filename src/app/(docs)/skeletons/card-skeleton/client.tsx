'use client'

import { CardSkeleton, ItemList } from '@objectifthunes/whiteboard'

export function Demo() {
  return (
    <ItemList as="ul">
      <CardSkeleton withThumb chipCount={2} actionCount={2} />
      <CardSkeleton withThumb={false} chipCount={1} />
    </ItemList>
  )
}
