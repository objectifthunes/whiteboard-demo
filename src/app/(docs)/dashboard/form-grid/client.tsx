'use client'

import { FormGrid, FormActions, Field, Input, Select, Button, Stack } from '@objectifthunes/whiteboard'

export function Demo() {
  return (
    <Stack>
      <FormGrid cols={2}>
        <Field label="Title"><Input placeholder="Midnight Tide" /></Field>
        <Field label="Artist"><Input placeholder="Nocturne" /></Field>
        <Field label="Pack">
          <Select defaultValue="berceuse">
            <option value="berceuse">Berceuse</option>
            <option value="rain">Rain</option>
          </Select>
        </Field>
        <Field label="BPM"><Input type="number" placeholder="72" /></Field>
      </FormGrid>
      <FormActions>
        <Button variant="secondary">Cancel</Button>
        <Button>Save</Button>
      </FormActions>
    </Stack>
  )
}
