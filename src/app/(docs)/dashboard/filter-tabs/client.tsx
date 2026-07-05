'use client'

import { useState } from 'react'
import { FilterTabs, MutedText, Stack } from '@objectifthunes/whiteboard'

type Status = 'all' | 'draft' | 'published'

export function Demo() {
  const [status, setStatus] = useState<Status>('all')
  return (
    <Stack>
      <FilterTabs
        options={[
          { value: 'all', label: 'All' },
          { value: 'draft', label: 'Drafts' },
          { value: 'published', label: 'Published' },
        ]}
        value={status}
        onChange={setStatus}
      />
      <MutedText size="xs">Showing: {status}</MutedText>
    </Stack>
  )
}
