'use client'

import { ButtonLink } from '@objectifthunes/whiteboard'

export function Demo() {
  return (
    <div className="demo-row">
      <ButtonLink href="#">+ New track</ButtonLink>
      <ButtonLink href="#" variant="secondary">Browse</ButtonLink>
      <ButtonLink href="#" variant="danger">Delete all</ButtonLink>
    </div>
  )
}
