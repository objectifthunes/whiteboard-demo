'use client'

import { MutedText, PickerCard, PickerGrid, Stack } from '@objectifthunes/whiteboard'

export function Demo() {
  return (
    <PickerGrid minItemWidth={120}>
      {Array.from({ length: 6 }).map((_, i) => (
        <li key={i}>
          <PickerCard>
            <Stack size="sm">
              <div style={{ aspectRatio: '1', background: 'var(--wb-surface-muted)', borderRadius: 6 }} />
              <MutedText size="xs">Item {i + 1}</MutedText>
            </Stack>
          </PickerCard>
        </li>
      ))}
    </PickerGrid>
  )
}
