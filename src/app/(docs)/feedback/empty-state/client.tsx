'use client'

import { Button, EmptyState } from '@objectifthunes/whiteboard'

export function Demo() {
  return (
    <EmptyState
      title="No items yet"
      description="Create your first item to see it here."
      action={<div className="demo-row"><Button>Create</Button></div>}
    />
  )
}
