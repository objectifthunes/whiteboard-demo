'use client'

import {
  AvatarBadge,
  Button,
  CardTitle,
  IconText,
  Inline,
  MutedText,
  PageCard,
  PageShell,
  SplitLayout,
  Stack,
  TitleRow,
} from '@objectifthunes/whiteboard'

const Frame = ({ children }: { children: React.ReactNode }) => (
  <div style={{
    padding: '0.75rem',
    border: '1px dashed var(--wb-border)',
    borderRadius: 'var(--wb-radius-sm)',
    color: 'var(--wb-text-muted)',
    fontSize: 12,
  }}>{children}</div>
)

export function StackDemo() {
  return (
    <Stack>
      <Frame>First child</Frame>
      <Frame>Second child</Frame>
      <Frame>Third child</Frame>
    </Stack>
  )
}

export function InlineDemo() {
  return (
    <Stack>
      <Inline><Frame>A</Frame><Frame>B</Frame><Frame>C</Frame></Inline>
      <Inline justify="between"><Frame>Left</Frame><Frame>Right</Frame></Inline>
      <Inline justify="end"><Frame>Trailing</Frame></Inline>
    </Stack>
  )
}

export function TitleRowDemo() {
  return (
    <TitleRow>
      <strong>Section header</strong>
      <Button variant="secondary">Action</Button>
    </TitleRow>
  )
}

export function SplitLayoutDemo() {
  return (
    <Stack>
      <SplitLayout variant="media-content">
        <Frame>Media (84px)</Frame>
        <Stack size="sm">
          <CardTitle>Title</CardTitle>
          <MutedText>Subtitle that flows next to the media column.</MutedText>
        </Stack>
      </SplitLayout>

      <SplitLayout variant="media-content-actions">
        <AvatarBadge>JD</AvatarBadge>
        <Stack size="sm">
          <CardTitle>John Doe</CardTitle>
          <MutedText>john@example.com</MutedText>
        </Stack>
        <Button variant="secondary">Edit</Button>
      </SplitLayout>
    </Stack>
  )
}

export function IconTextDemo() {
  return (
    <IconText icon={<span aria-hidden>★</span>}>Starred item</IconText>
  )
}

export function PageShellDemo() {
  return (
    <div style={{ position: 'relative', height: 280, border: '1px solid var(--wb-border)', borderRadius: 'var(--wb-radius-lg)', overflow: 'hidden' }}>
      <PageShell style={{ minHeight: 'auto', height: '100%' }}>
        <PageCard>
          <Stack>
            <CardTitle>Sign in</CardTitle>
            <MutedText>Centred card on a full-viewport surface.</MutedText>
            <Button>Continue</Button>
          </Stack>
        </PageCard>
      </PageShell>
    </div>
  )
}
