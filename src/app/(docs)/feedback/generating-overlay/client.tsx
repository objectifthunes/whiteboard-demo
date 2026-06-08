'use client'

import { useState } from 'react'
import { Button, GeneratingOverlay, Stack } from '@objectifthunes/whiteboard'

export function Demo() {
  const [busy, setBusy] = useState(false)
  return (
    <Stack>
      <div className="demo-row">
        <Button variant="secondary" onClick={() => { setBusy(true); setTimeout(() => setBusy(false), 2000) }}>
          Generate
        </Button>
      </div>
      <div style={{ position: 'relative', minHeight: 120, border: '1px dashed var(--wb-border)', borderRadius: 'var(--wb-radius-sm)' }}>
        <GeneratingOverlay isGenerating={busy} message="Generating output…">
          <div style={{ padding: '0.75rem', color: 'var(--wb-text-muted)', fontSize: 13 }}>Result will appear here.</div>
        </GeneratingOverlay>
      </div>
    </Stack>
  )
}
