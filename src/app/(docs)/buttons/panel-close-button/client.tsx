'use client'

import { PanelCloseButton } from '@objectifthunes/whiteboard'

export function Demo() {
  return (
    <div className="demo-row">
      <PanelCloseButton onClick={() => {}} />
      <PanelCloseButton onClick={() => {}} label="Dismiss" />
    </div>
  )
}
