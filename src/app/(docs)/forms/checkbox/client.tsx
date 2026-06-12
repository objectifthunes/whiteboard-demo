'use client'

import { useState } from 'react'
import { Checkbox, Stack, Switch } from '@objectifthunes/whiteboard'

export function Demo() {
  const [rules, setRules] = useState(true)
  const [adaptive, setAdaptive] = useState(false)
  const [dark, setDark] = useState(true)
  return (
    <Stack style={{ maxWidth: 320 }}>
      <Checkbox label="Building rules" checked={rules} onChange={() => setRules(v => !v)} />
      <Checkbox label="Adaptive threshold" hint="(dirty scans)" checked={adaptive} onChange={() => setAdaptive(v => !v)} />
      <Switch label="Dark mode" checked={dark} onChange={() => setDark(v => !v)} />
    </Stack>
  )
}
