'use client'

import {
  AvatarSkeleton,
  CanvasSkeleton,
  ChipSkeleton,
  Stack,
  ThumbSkeleton,
} from '@objectifthunes/whiteboard'

export function Demo() {
  return (
    <Stack>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <ChipSkeleton />
        <AvatarSkeleton />
        <ThumbSkeleton style={{ width: 80 }} />
      </div>
      <div style={{ height: 96 }}>
        <CanvasSkeleton />
      </div>
    </Stack>
  )
}
