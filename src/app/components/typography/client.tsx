'use client'

import { CardTitle, MutedText, PageTitle, SectionDescription, SectionTitle, Stack } from '@objectifthunes/whiteboard'

export function TypographyDemo() {
  return (
    <Stack>
      <PageTitle>Page title</PageTitle>
      <SectionTitle>Section title</SectionTitle>
      <SectionDescription>One-line description that sits under a section title.</SectionDescription>
      <CardTitle>Card title</CardTitle>
      <CardTitle clamp>A card title that is much longer than usual and would otherwise wrap onto a third line, but is clamped to two.</CardTitle>
      <MutedText>Default muted text (sm).</MutedText>
      <MutedText size="xs">Extra-small muted text.</MutedText>
    </Stack>
  )
}
