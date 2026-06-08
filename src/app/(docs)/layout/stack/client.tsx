'use client'

import { Stack } from '@objectifthunes/whiteboard'

const Box = ({ children }: { children: React.ReactNode }) => (
  <div style={{ padding: '0.6rem 0.8rem', border: '1px dashed var(--wb-border)', borderRadius: 6, color: 'var(--wb-text-muted)', fontSize: 12 }}>{children}</div>
)

export function Demo() {
  return (
    <div className="demo-grid-2">
      <Stack>
        <Box>md gap (default)</Box>
        <Box>md gap</Box>
        <Box>md gap</Box>
      </Stack>
      <Stack size="sm">
        <Box>sm gap</Box>
        <Box>sm gap</Box>
        <Box>sm gap</Box>
      </Stack>
    </div>
  )
}
