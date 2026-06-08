'use client'

import { useState } from 'react'
import { Button, GeneratingOverlay, Stack } from '@objectifthunes/whiteboard'

export function Demo() {
  const [busy, setBusy] = useState(false)
  return (
    <Stack>
      <Button variant="secondary" onClick={() => { setBusy(true); setTimeout(() => setBusy(false), 2000) }}>
        Generate
      </Button>
      <div style={{ position: 'relative', minHeight: 120 }}>
        <GeneratingOverlay isGenerating={busy} message="Generating output…">
          <div style={{ padding: '0.75rem', color: 'var(--wb-text-muted)' }}>Result will appear here.</div>
        </GeneratingOverlay>
      </div>
    </Stack>
  )
}
