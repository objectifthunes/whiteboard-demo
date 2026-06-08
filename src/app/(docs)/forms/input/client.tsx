'use client'

import { Input, Stack } from '@objectifthunes/whiteboard'

export function Demo() {
  return (
    <Stack size="sm" style={{ maxWidth: 360 }}>
      <Input placeholder="Hello world" />
      <Input type="email" placeholder="you@example.com" />
      <Input type="number" defaultValue={42} />
      <Input disabled defaultValue="Disabled" />
    </Stack>
  )
}
