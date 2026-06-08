'use client'

import { AvatarBadge, Button, CardTitle, MutedText, SplitLayout, Stack } from '@objectifthunes/whiteboard'

const Thumb = () => (
  <div style={{ aspectRatio: '1', width: 84, background: 'var(--wb-surface-muted)', border: '1px dashed var(--wb-border)', borderRadius: 6 }} />
)

export function Demo() {
  return (
    <Stack>
      <SplitLayout variant="media-content">
        <Thumb />
        <Stack size="sm">
          <CardTitle>media-content</CardTitle>
          <MutedText>Fixed media column + flexible content column.</MutedText>
        </Stack>
      </SplitLayout>

      <SplitLayout variant="single">
        <Stack size="sm">
          <CardTitle>single</CardTitle>
          <MutedText>One column. Useful as the small-screen fallback.</MutedText>
        </Stack>
      </SplitLayout>

      <SplitLayout variant="media-content-actions">
        <AvatarBadge>JD</AvatarBadge>
        <Stack size="sm">
          <CardTitle>media-content-actions</CardTitle>
          <MutedText>Auto media + flexible content + auto actions.</MutedText>
        </Stack>
        <Button variant="secondary">Edit</Button>
      </SplitLayout>
    </Stack>
  )
}
