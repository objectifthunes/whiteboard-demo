'use client'

import { useState } from 'react'
import { NoteBar, Button, Stack } from '@objectifthunes/whiteboard'

export function Demo() {
  const [note, setNote] = useState<string | null>('Created "Midnight Tide".')
  return (
    <Stack>
      <NoteBar tone="success" onDismiss={() => setNote(null)}>
        {note}
      </NoteBar>
      {note === null && (
        <div className="demo-row">
          <Button variant="secondary" onClick={() => setNote('Created "Midnight Tide".')}>
            Restore note
          </Button>
        </div>
      )}
    </Stack>
  )
}
