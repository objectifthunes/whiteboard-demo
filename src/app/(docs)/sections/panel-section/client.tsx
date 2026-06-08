'use client'

import { Button, ButtonRow, Field, Input, PanelSection, Stack } from '@objectifthunes/whiteboard'

export function Demo() {
  return (
    <Stack>
      <PanelSection heading="Settings" description="A bordered section with a heading and description.">
        <Field label="Name" htmlFor="ps-name">
          <Input id="ps-name" placeholder="John" />
        </Field>
      </PanelSection>
      <PanelSection
        heading="With actions"
        actions={
          <ButtonRow>
            <Button variant="secondary">Reset</Button>
            <Button>Save</Button>
          </ButtonRow>
        }
      >
        <Field label="Email" htmlFor="ps-email">
          <Input id="ps-email" type="email" />
        </Field>
      </PanelSection>
    </Stack>
  )
}
