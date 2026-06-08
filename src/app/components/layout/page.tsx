import { CodeBlock } from '@/components/CodeBlock'
import { DocPage } from '@/components/DocPage'
import { DocSection } from '@/components/DocSection'
import { Preview } from '@/components/Preview'
import {
  IconTextDemo,
  InlineDemo,
  PageShellDemo,
  SplitLayoutDemo,
  StackDemo,
  TitleRowDemo,
} from './client'

const STACK = `import { Stack } from '@objectifthunes/whiteboard'

<Stack>          {/* default 'md' gap */}
  <First />
  <Second />
</Stack>

<Stack size="sm"> {/* tighter rhythm */}
  …
</Stack>`

const INLINE = `import { Inline } from '@objectifthunes/whiteboard'

<Inline>{children}</Inline>
<Inline justify="between">{a}{b}</Inline>
<Inline justify="end">{trailing}</Inline>`

const TITLE_ROW = `import { TitleRow, Button } from '@objectifthunes/whiteboard'

<TitleRow>
  <strong>Section header</strong>
  <Button variant="secondary">Action</Button>
</TitleRow>`

const SPLIT = `import { SplitLayout } from '@objectifthunes/whiteboard'

{/* 'media-content' — fixed media column + flexible content */}
<SplitLayout variant="media-content">
  <Thumb />
  <Stack size="sm">
    <CardTitle>{title}</CardTitle>
    <MutedText>{subtitle}</MutedText>
  </Stack>
</SplitLayout>

{/* 'media-content-actions' — auto media + flexible content + auto actions */}
<SplitLayout variant="media-content-actions">
  <AvatarBadge>JD</AvatarBadge>
  <Stack size="sm">
    <CardTitle>{name}</CardTitle>
    <MutedText>{email}</MutedText>
  </Stack>
  <Button variant="secondary">Edit</Button>
</SplitLayout>

{/* 'single' — one column. Use as the small-screen fallback. */}
<SplitLayout variant="single">{children}</SplitLayout>`

const ICON_TEXT = `import { IconText } from '@objectifthunes/whiteboard'

<IconText icon={<StarIcon />}>Starred item</IconText>`

const PAGE = `import { PageShell, PageCard, Stack, CardTitle, Button } from '@objectifthunes/whiteboard'

<PageShell>
  <PageCard>
    <Stack>
      <CardTitle>Sign in</CardTitle>
      <Input placeholder="email" />
      <Button>Continue</Button>
    </Stack>
  </PageCard>
</PageShell>`

export default async function LayoutPage() {
  return (
    <DocPage
      title="Layout"
      lead="Vertical rhythm, horizontal rows, two- or three-column splits, and a centred page shell for non-canvas surfaces."
    >
      <DocSection title="Stack" description="Vertical grid with consistent gap. Use Stack everywhere you'd otherwise reach for margin-bottom.">
        <Preview><StackDemo /></Preview>
        <CodeBlock code={STACK} />
      </DocSection>

      <DocSection title="Inline" description="Horizontal row. justify='between' for split alignment; 'end' to push trailing items.">
        <Preview><InlineDemo /></Preview>
        <CodeBlock code={INLINE} />
      </DocSection>

      <DocSection title="TitleRow" description="A title-on-the-left, actions-on-the-right header row.">
        <Preview><TitleRowDemo /></Preview>
        <CodeBlock code={TITLE_ROW} />
      </DocSection>

      <DocSection
        title="SplitLayout"
        description="Three named shapes — `media-content`, `single`, `media-content-actions`. No domain-specific variant names."
      >
        <Preview><SplitLayoutDemo /></Preview>
        <CodeBlock code={SPLIT} />
      </DocSection>

      <DocSection title="IconText" description="Icon + text inline row with a consistent gap.">
        <Preview><IconTextDemo /></Preview>
        <CodeBlock code={ICON_TEXT} />
      </DocSection>

      <DocSection
        title="PageShell + PageCard"
        description="For non-canvas surfaces (auth, settings). PageShell centres its child; PageCard is the bordered surface."
      >
        <Preview><PageShellDemo /></Preview>
        <CodeBlock code={PAGE} />
      </DocSection>
    </DocPage>
  )
}
