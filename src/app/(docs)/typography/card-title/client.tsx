'use client'

import { CardTitle, Stack } from '@objectifthunes/whiteboard'

export function Demo() {
  return (
    <Stack size="sm">
      <CardTitle>Short title</CardTitle>
      <CardTitle clamp>A very long title that would otherwise wrap to three lines, but is clamped to two with an ellipsis.</CardTitle>
    </Stack>
  )
}
