'use client'

import { LineSkeleton, Stack, TitleSkeleton } from '@objectifthunes/whiteboard'

export function Demo() {
  return (
    <Stack size="sm">
      <TitleSkeleton />
      <LineSkeleton />
      <LineSkeleton short />
    </Stack>
  )
}
