'use client'

import { Button, Inline, Tooltip } from '@objectifthunes/whiteboard'

export function Demo() {
  return (
    <Inline style={{ padding: '2.2rem 0 0.6rem', justifyContent: 'center' }}>
      <Tooltip label="Re-frame camera">
        <Button variant="secondary" iconOnly title="">⤢</Button>
      </Tooltip>
      <Tooltip label="Appears below" placement="bottom">
        <Button variant="secondary">Hover me</Button>
      </Tooltip>
    </Inline>
  )
}
