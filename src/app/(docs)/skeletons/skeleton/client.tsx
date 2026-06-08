'use client'

import { Skeleton, Stack } from '@objectifthunes/whiteboard'

export function Demo() {
  return (
    <Stack size="sm">
      <Skeleton style={{ height: 14, width: '60%' }} />
      <Skeleton style={{ height: 24, width: 120 }} radius="md" />
      <Skeleton style={{ height: 24, width: 24 }} radius="pill" />
    </Stack>
  )
}
