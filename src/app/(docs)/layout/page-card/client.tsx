'use client'

import { Button, CardTitle, MutedText, PageCard, Stack } from '@objectifthunes/whiteboard'

export function Demo() {
  return (
    <PageCard>
      <Stack>
        <CardTitle>Create a workspace</CardTitle>
        <MutedText>Workspaces let teams collaborate on shared boards.</MutedText>
        <Button fullWidth>Create</Button>
      </Stack>
    </PageCard>
  )
}
