'use client'

import { useState } from 'react'
import { Button } from '@objectifthunes/whiteboard'

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
      <Button
        loading={loading}
        loadingText="Saving…"
        onClick={() => {
          setLoading(true)
          setTimeout(() => setLoading(false), 1500)
        }}
      >
        Save
      </Button>
    </div>
  )
}

export function ModifiersDemo() {
  return (
    <div className="demo-col" style={{ maxWidth: 360 }}>
      <Button fullWidth>Full width</Button>
      <div className="demo-row">
        <Button iconOnly aria-label="Icon only">★</Button>
        <Button variant="secondary" iconOnly aria-label="Icon only">★</Button>
      </div>
    </div>
  )
}
