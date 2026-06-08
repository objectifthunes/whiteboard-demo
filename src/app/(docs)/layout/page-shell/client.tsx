'use client'

import { Button, CardTitle, Field, Input, MutedText, PageCard, PageShell, Stack } from '@objectifthunes/whiteboard'

export function Demo() {
  return (
    <div style={{ position: 'relative', height: 360, border: '1px solid var(--wb-border)', borderRadius: 10, overflow: 'hidden', background: 'var(--wb-bg)' }}>
      <PageShell style={{ minHeight: 'auto', height: '100%' }}>
        <PageCard>
          <Stack>
            <CardTitle>Sign in</CardTitle>
            <MutedText>Continue to your workspace.</MutedText>
            <Field label="Email" htmlFor="ps-email"><Input id="ps-email" type="email" /></Field>
            <Button fullWidth>Continue</Button>
          </Stack>
        </PageCard>
      </PageShell>
    </div>
  )
}
