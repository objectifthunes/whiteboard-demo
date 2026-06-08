'use client'

import { useState } from 'react'
import { Button, ConfirmDialog } from '@objectifthunes/whiteboard'

export function Demo() {
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
