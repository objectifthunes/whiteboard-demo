'use client'

import { useState } from 'react'
import { ChoiceGroup } from '@objectifthunes/whiteboard'

export function Demo() {
  const [value, setValue] = useState<'a' | 'b' | 'c'>('a')
  return (
    <ChoiceGroup
      value={value}
      onChange={setValue}
      options={[
        { value: 'a', label: 'First', description: 'Recommended for most teams.' },
        { value: 'b', label: 'Second', description: 'For workspaces with custom roles.' },
        { value: 'c', label: 'Third', description: 'For enterprise plans.' },
      ]}
    />
  )
}
