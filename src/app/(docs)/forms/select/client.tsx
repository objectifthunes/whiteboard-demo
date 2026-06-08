'use client'

import { Select } from '@objectifthunes/whiteboard'

export function Demo() {
  return (
    <Select defaultValue="europe" style={{ maxWidth: 240 }}>
      <option value="europe">Europe</option>
      <option value="americas">Americas</option>
      <option value="apac">APAC</option>
    </Select>
  )
}
