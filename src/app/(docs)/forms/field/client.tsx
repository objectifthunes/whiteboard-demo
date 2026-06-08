'use client'

import { Field, Input, Stack } from '@objectifthunes/whiteboard'

export function Demo() {
  return (
    <Stack>
      <Field label="Name" htmlFor="name" hint="Display name only.">
        <Input id="name" placeholder="John Doe" />
      </Field>
      <Field label="Email" htmlFor="email" error="Email is required.">
        <Input id="email" type="email" />
      </Field>
    </Stack>
  )
}
