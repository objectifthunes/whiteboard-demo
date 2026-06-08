'use client'

import { MutedText, Stack } from '@objectifthunes/whiteboard'

export function Demo() {
  return (
    <Stack size="sm">
      <MutedText size="md">Medium muted text (default body size).</MutedText>
      <MutedText>Default — small muted text.</MutedText>
      <MutedText size="xs">Extra-small muted text.</MutedText>
    </Stack>
  )
}
