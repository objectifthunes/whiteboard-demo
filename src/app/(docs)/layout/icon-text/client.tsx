'use client'

import { IconText, Stack } from '@objectifthunes/whiteboard'
import { Star, Globe } from 'lucide-react'

export function Demo() {
  return (
    <Stack size="sm">
      <IconText icon={<Star size={14} />}>Starred item</IconText>
      <IconText icon={<Globe size={14} />}>Open to the public</IconText>
    </Stack>
  )
}
