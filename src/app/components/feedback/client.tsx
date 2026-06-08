'use client'

import { useState } from 'react'
import {
  Alert,
  Button,
  Chip,
  EmptyState,
  GeneratingOverlay,
  LoadingState,
  Pill,
  Stack,
  TagRow,
} from '@objectifthunes/whiteboard'

export function AlertDemo() {
  return (
    <Stack>
      <Alert tone="info">Heads up — info tone.</Alert>
      <Alert tone="success">Saved successfully.</Alert>
      <Alert tone="error">Something went wrong.</Alert>
      <Alert tone="muted">A quiet hint.</Alert>
    </Stack>
  )
}

export function PillDemo() {
  return (
    <TagRow>
      <Pill>default</Pill>
      <Pill tone="success">success</Pill>
      <Pill tone="warning">warning</Pill>
      <Pill tone="danger">danger</Pill>
    </TagRow>
  )
}

export function ChipDemo() {
  return (
    <TagRow>
      <Chip>react</Chip>
      <Chip>zustand</Chip>
      <Chip>typescript</Chip>
    </TagRow>
  )
}

export function LoadingStateDemo() {
  return <LoadingState label="Fetching profile…" />
}

export function GeneratingOverlayDemo() {
  const [busy, setBusy] = useState(false)
  return (
    <Stack>
      <Button variant="secondary" onClick={() => { setBusy(true); setTimeout(() => setBusy(false), 2000) }}>
        Generate
      </Button>
      <div style={{ position: 'relative', minHeight: 80 }}>
        <GeneratingOverlay isGenerating={busy} message="Generating output…">
          <div style={{ padding: '0.75rem', color: 'var(--wb-text-muted)' }}>
            Result will appear here.
          </div>
        </GeneratingOverlay>
      </div>
    </Stack>
  )
}

export function EmptyStateDemo() {
  return (
    <EmptyState
      title="No items yet"
      description="Create your first item to see it here."
      action={<Button>Create</Button>}
    />
  )
}
