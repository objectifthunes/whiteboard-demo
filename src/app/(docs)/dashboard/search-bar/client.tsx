'use client'

import { useState } from 'react'
import { SearchBar, MutedText, Stack } from '@objectifthunes/whiteboard'

const TRACKS = ['Midnight Tide', 'Aurora', 'Dune', 'Rainfall', 'Tides']

export function Demo() {
  const [query, setQuery] = useState('')
  const matches = TRACKS.filter(t => t.toLowerCase().includes(query.toLowerCase()))
  return (
    <Stack>
      <SearchBar value={query} onChange={setQuery} />
      <MutedText size="xs">
        {matches.length} / {TRACKS.length} tracks match{matches.length > 0 ? `: ${matches.join(', ')}` : ''}
      </MutedText>
    </Stack>
  )
}
