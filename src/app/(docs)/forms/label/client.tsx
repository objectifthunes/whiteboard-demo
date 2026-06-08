'use client'

import { Label, Input, Stack } from '@objectifthunes/whiteboard'

export function Demo() {
  return (
    <Stack size="sm">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="you@example.com" />
    </Stack>
  )
}
