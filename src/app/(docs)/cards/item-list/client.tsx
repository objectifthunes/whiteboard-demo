'use client'

import { CardTitle, ItemCard, ItemList, MutedText, Stack } from '@objectifthunes/whiteboard'

export function Demo() {
  return (
    <ItemList as="ul">
      {['Settings', 'Layers', 'Inspector'].map(label => (
        <ItemCard key={label} as="li">
          <Stack size="sm">
            <CardTitle>{label}</CardTitle>
            <MutedText>One row in a vertical list.</MutedText>
          </Stack>
        </ItemCard>
      ))}
    </ItemList>
  )
}
