'use client'

import { MutedText, PickerCard, Stack } from '@objectifthunes/whiteboard'

export function Demo() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 8, maxWidth: 420 }}>
      {['One', 'Two', 'Three'].map(label => (
        <PickerCard key={label}>
          <Stack size="sm">
            <div style={{ aspectRatio: '1', background: 'var(--wb-surface-muted)', borderRadius: 6 }} />
            <MutedText size="xs">{label}</MutedText>
          </Stack>
        </PickerCard>
      ))}
    </div>
  )
}
