'use client'

import { useState } from 'react'
import { Button, PanelErrorBoundary } from '@objectifthunes/whiteboard'

function BrokenWidget(): null {
  throw new Error('boom')
}

export function Demo() {
  const [crash, setCrash] = useState(false)
  return (
    <div>
      <Button variant="secondary" onClick={() => setCrash(c => !c)}>
        {crash ? 'Reset' : 'Crash the widget'}
      </Button>
      <div style={{ marginTop: '0.75rem' }}>
        <PanelErrorBoundary fallbackMessage="This panel crashed.">
          {crash ? <BrokenWidget /> : <div style={{ color: 'var(--wb-text-muted)' }}>Healthy widget</div>}
        </PanelErrorBoundary>
      </div>
    </div>
  )
}
