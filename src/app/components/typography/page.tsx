import { CodeBlock } from '@/components/CodeBlock'
import { DocPage } from '@/components/DocPage'
import { DocSection } from '@/components/DocSection'
import { Preview } from '@/components/Preview'
import { TypographyDemo } from './client'

const ALL = `import {
  PageTitle,
  SectionTitle,
  SectionDescription,
  CardTitle,
  MutedText,
} from '@objectifthunes/whiteboard'

<PageTitle>Page title</PageTitle>

<SectionTitle>Section title</SectionTitle>
<SectionDescription>One-line description that sits under a section title.</SectionDescription>

<CardTitle>Card title</CardTitle>
<CardTitle clamp>Long card title — clamped to two lines.</CardTitle>

<MutedText>Default muted text (sm).</MutedText>
<MutedText size="xs">Extra-small muted text.</MutedText>`

export default async function TypographyPage() {
  return (
    <DocPage
      title="Typography"
      lead="Five tiny components for the only text styles you actually need: page title, section title + description, card title, and muted body text."
    >
      <DocSection title="All five">
        <Preview><TypographyDemo /></Preview>
        <CodeBlock code={ALL} />
      </DocSection>
    </DocPage>
  )
}
