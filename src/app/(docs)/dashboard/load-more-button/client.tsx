'use client'

import { useState } from 'react'
import { LoadMoreButton, ToggleChip, MutedText, Stack } from '@objectifthunes/whiteboard'

export function Demo() {
  const [loading, setLoading] = useState(false)
  return (
    <Stack>
      <div className="demo-row">
        <ToggleChip active={loading} onClick={() => setLoading(v => !v)}>
          simulate loading
        </ToggleChip>
      </div>
      <LoadMoreButton cursor="cursor_abc123" loading={loading} onClick={() => {}} />
      {loading && <MutedText size="xs">Nothing rendered — a load is in flight.</MutedText>}
    </Stack>
  )
}
