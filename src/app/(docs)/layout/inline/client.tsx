'use client'

import { Inline, Stack } from '@objectifthunes/whiteboard'

const Box = ({ children }: { children: React.ReactNode }) => (
  <div style={{ padding: '0.4rem 0.7rem', border: '1px dashed var(--wb-border)', borderRadius: 6, color: 'var(--wb-text-muted)', fontSize: 12 }}>{children}</div>
)

export function Demo() {
  return (
    <Stack>
      <Inline><Box>A</Box><Box>B</Box><Box>C</Box></Inline>
      <Inline justify="between"><Box>Left</Box><Box>Right</Box></Inline>
      <Inline justify="end"><Box>Trailing</Box></Inline>
    </Stack>
  )
}
