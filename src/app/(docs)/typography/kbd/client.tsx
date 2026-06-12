'use client'

import { Kbd, MutedText } from '@objectifthunes/whiteboard'

export function Demo() {
  return (
    <MutedText size="sm">
      <Kbd>shift</Kbd>-drag box-selects · <Kbd>esc</Kbd> clears · <Kbd>⌫</Kbd> deletes
    </MutedText>
  )
}
