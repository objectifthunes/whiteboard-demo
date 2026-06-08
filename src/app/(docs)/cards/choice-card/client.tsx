'use client'

import { useState } from 'react'
import { ChoiceCard, Stack } from '@objectifthunes/whiteboard'

export function Demo() {
  const [active, setActive] = useState('a')
  return (
    <Stack size="sm">
      {[
        { id: 'a', label: 'Option A' },
        { id: 'b', label: 'Option B' },
      ].map(o => (
        <ChoiceCard key={o.id} active={active === o.id} onClick={() => setActive(o.id)}>
          <span className="choice-card__label">{o.label}</span>
        </ChoiceCard>
      ))}
    </Stack>
  )
}
