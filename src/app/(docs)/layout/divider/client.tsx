'use client'

import { Button, Divider, Inline, MutedText, Stack } from '@objectifthunes/whiteboard'

export function Demo() {
  return (
    <Stack style={{ maxWidth: 320 }}>
      <MutedText size="sm">Above the line</MutedText>
      <Divider />
      <MutedText size="sm">Below the line</MutedText>
      <Inline>
        <Button variant="secondary">A</Button>
        <Divider orientation="vertical" />
        <Button variant="secondary">B</Button>
      </Inline>
    </Stack>
  )
}
