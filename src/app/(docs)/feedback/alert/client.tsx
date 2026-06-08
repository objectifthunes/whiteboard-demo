'use client'

import { Alert, Stack } from '@objectifthunes/whiteboard'

export function Demo() {
  return (
    <Stack>
      <Alert tone="info">Heads up — info tone.</Alert>
      <Alert tone="success">Saved successfully.</Alert>
      <Alert tone="error">Something went wrong.</Alert>
      <Alert tone="muted">A quiet hint.</Alert>
    </Stack>
  )
}
