'use client'

import { useState } from 'react'
import { ToggleChip, TagRow } from '@objectifthunes/whiteboard'

const TAGS = ['ambient', 'piano', 'rain', 'lofi']

export function Demo() {
  const [selected, setSelected] = useState<string[]>(['piano'])
  const toggle = (tag: string) =>
    setSelected(s => (s.includes(tag) ? s.filter(t => t !== tag) : [...s, tag]))
  return (
    <TagRow>
      {TAGS.map(tag => (
        <ToggleChip key={tag} active={selected.includes(tag)} onClick={() => toggle(tag)}>
          {tag}
        </ToggleChip>
      ))}
    </TagRow>
  )
}
