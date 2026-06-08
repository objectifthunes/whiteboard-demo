'use client'

import { LoadingState } from '@objectifthunes/whiteboard'

export function Demo() {
  return (
    <div className="demo-col">
      <LoadingState />
      <LoadingState label="Fetching profile…" />
    </div>
  )
}
