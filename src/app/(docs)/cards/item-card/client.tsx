'use client'

import { CardTitle, ItemCard, MutedText, Stack } from '@objectifthunes/whiteboard'

export function Demo() {
  return (
    <ItemCard>
      <Stack size="sm">
        <CardTitle>One item</CardTitle>
        <MutedText>A bordered surface — drop anything inside.</MutedText>
      </Stack>
    </ItemCard>
  )
}
