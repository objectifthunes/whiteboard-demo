'use client'

import { useState } from 'react'
import { Button, ButtonRow, PanelCloseButton, ThemeToggle } from '@objectifthunes/whiteboard'
import { useThemeMode } from '@/components/ThemeProvider'

export function VariantsDemo() {
  return (
    <div className="demo-row">
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="danger">Delete</Button>
      <Button disabled>Disabled</Button>
    </div>
  )
}

export function LoadingDemo() {
  const [loading, setLoading] = useState(false)
  return (
    <div className="demo-row">
      <Button loading={loading} loadingText="Saving…" onClick={() => { setLoading(true); setTimeout(() => setLoading(false), 1500) }}>
        Save
      </Button>
    </div>
  )
}

export function RowDemo() {
  return (
    <ButtonRow>
      <Button variant="secondary">Cancel</Button>
      <Button>Confirm</Button>
    </ButtonRow>
  )
}

export function CloseDemo() {
  return (
    <div className="demo-row">
      <PanelCloseButton onClick={() => {}} />
    </div>
  )
}

export function ThemeDemo() {
  const { theme, toggle } = useThemeMode()
  return (
    <div className="demo-row">
      <ThemeToggle theme={theme} onToggle={toggle} />
      <span style={{ color: 'var(--wb-text-muted)' }}>Currently: {theme}</span>
    </div>
  )
}
