import { CodeBlock } from '@/components/CodeBlock'
import { DocPage } from '@/components/DocPage'
import { DocSection } from '@/components/DocSection'
import { Preview } from '@/components/Preview'
import { AlertDemo, ChipDemo, EmptyStateDemo, GeneratingOverlayDemo, LoadingStateDemo, PillDemo } from './client'

const ALERT = `import { Alert } from '@objectifthunes/whiteboard'

<Alert tone="info">Heads up — info tone.</Alert>
<Alert tone="success">Saved successfully.</Alert>
<Alert tone="error">Something went wrong.</Alert>
<Alert tone="muted">A quiet hint.</Alert>`

const PILL = `import { Pill, TagRow } from '@objectifthunes/whiteboard'

<TagRow>
  <Pill>default</Pill>
  <Pill tone="success">success</Pill>
  <Pill tone="warning">warning</Pill>
  <Pill tone="danger">danger</Pill>
</TagRow>`

const CHIP = `import { Chip, TagRow } from '@objectifthunes/whiteboard'

<TagRow>
  <Chip>react</Chip>
  <Chip>zustand</Chip>
  <Chip>typescript</Chip>
</TagRow>`

const LOADING = `import { LoadingState } from '@objectifthunes/whiteboard'

<LoadingState label="Fetching profile…" />`

const OVERLAY = `import { GeneratingOverlay } from '@objectifthunes/whiteboard'

<div style={{ position: 'relative' }}>
  <GeneratingOverlay isGenerating={busy} message="Generating output…">
    {result}
  </GeneratingOverlay>
</div>`

const EMPTY = `import { EmptyState, Button } from '@objectifthunes/whiteboard'

<EmptyState
  title="No items yet"
  description="Create your first item to see it here."
  action={<Button>Create</Button>}
/>`

export default async function FeedbackPage() {
  return (
    <DocPage
      title="Feedback"
      lead="Alerts, pills, chips, loading + empty states — all the small surfaces for telling the user what's going on."
    >
      <DocSection title="Alert" description="Four tones — info, success, error, muted. The muted tone reads as a quiet inline note.">
        <Preview><AlertDemo /></Preview>
        <CodeBlock code={ALERT} />
      </DocSection>

      <DocSection title="Pill" description="Status-style indicator with a soft background. Pair with TagRow for a wrapping row.">
        <Preview><PillDemo /></Preview>
        <CodeBlock code={PILL} />
      </DocSection>

      <DocSection title="Chip" description="Bordered tag, rendered as a span (or a button if you pass onClick).">
        <Preview><ChipDemo /></Preview>
        <CodeBlock code={CHIP} />
      </DocSection>

      <DocSection title="LoadingState" description="Inline spinner + label, sized to flow inside a sentence or panel header.">
        <Preview><LoadingStateDemo /></Preview>
        <CodeBlock code={LOADING} />
      </DocSection>

      <DocSection
        title="GeneratingOverlay"
        description="Backdrop-blur overlay over its children when isGenerating is true. Position the parent yourself."
      >
        <Preview><GeneratingOverlayDemo /></Preview>
        <CodeBlock code={OVERLAY} />
      </DocSection>

      <DocSection title="EmptyState" description="Title + description + optional action — a single component for the 'nothing here yet' card.">
        <Preview><EmptyStateDemo /></Preview>
        <CodeBlock code={EMPTY} />
      </DocSection>
    </DocPage>
  )
}
