'use client'

import { useState } from 'react'
import {
  WhiteboardShell,
  FloatingPanel,
  ConfirmDialog,
  PanelErrorBoundary,
  PanelSection,
  Button,
  ButtonRow,
} from '@objectifthunes/whiteboard'

function BrokenWidget(): null {
  throw new Error('boom')
}

export function CanvasDemo() {
  return (
    <div className="demo-canvas-frame">
      <WhiteboardShell>
        <FloatingPanel title="Settings" defaultPosition={{ x: 40, y: 40 }} width={220} focusable>
          <PanelSection heading="Inputs">
            <div style={{ color: 'var(--wb-text-muted)' }}>Drag · scroll to zoom · double-click to focus</div>
          </PanelSection>
        </FloatingPanel>
        <FloatingPanel title="Layers" defaultPosition={{ x: 300, y: 60 }} width={200} focusable>
          <PanelSection heading="Stack">
            <div style={{ color: 'var(--wb-text-muted)' }}>Hello from another panel</div>
          </PanelSection>
        </FloatingPanel>
      </WhiteboardShell>
    </div>
  )
}

export function ConfirmDialogDemo() {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  return (
    <>
      <Button variant="danger" onClick={() => setOpen(true)}>Delete this thing</Button>
      <ConfirmDialog
        open={open}
        title="Delete this thing?"
        message="This cannot be undone."
        confirmLabel="Delete"
        loading={loading}
        onConfirm={() => {
          setLoading(true)
          setTimeout(() => { setLoading(false); setOpen(false) }, 1200)
        }}
        onCancel={() => setOpen(false)}
      />
    </>
  )
}

export function ErrorBoundaryDemo() {
  const [crash, setCrash] = useState(false)
  return (
    <div>
      <ButtonRow>
        <Button variant="secondary" onClick={() => setCrash(c => !c)}>
          {crash ? 'Reset' : 'Crash the widget'}
        </Button>
      </ButtonRow>
      <div style={{ marginTop: '0.75rem' }}>
        <PanelErrorBoundary fallbackMessage="This panel crashed.">
          {crash ? <BrokenWidget /> : <div style={{ color: 'var(--wb-text-muted)' }}>Healthy widget</div>}
        </PanelErrorBoundary>
      </div>
    </div>
  )
}
