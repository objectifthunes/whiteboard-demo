'use client'

import { Button, TitleRow } from '@objectifthunes/whiteboard'

export function Demo() {
  return (
    <TitleRow>
      <strong style={{ color: 'var(--wb-text-primary)' }}>Section header</strong>
      <Button variant="secondary">Action</Button>
    </TitleRow>
  )
}
