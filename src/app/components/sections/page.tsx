import { CodeBlock } from '@/components/CodeBlock'
import { DocPage } from '@/components/DocPage'
import { DocSection } from '@/components/DocSection'
import { Preview } from '@/components/Preview'
import { PanelSectionDemo, PanelTitleDemo } from './client'

const PS = `import { PanelSection, Button, ButtonRow, Field, Input } from '@objectifthunes/whiteboard'

<PanelSection heading="Settings" description="A bordered section.">
  <Field label="Name" htmlFor="name">
    <Input id="name" />
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
  <Field label="Email" htmlFor="email">
    <Input id="email" type="email" />
  </Field>
</PanelSection>`

const PT = `import { PanelTitle } from '@objectifthunes/whiteboard'
import { Settings } from 'lucide-react'

<PanelTitle icon={Settings} label="Project settings" />`

export default async function SectionsPage() {
  return (
    <DocPage
      title="Sections"
      lead="Bordered, headed sections you compose inside FloatingPanel bodies — plus a compact title-with-icon for panel headers."
    >
      <DocSection
        title="PanelSection"
        description="Bordered section with optional heading, description, and actions slot. Use Stack inside to lay out fields."
      >
        <Preview><PanelSectionDemo /></Preview>
        <CodeBlock code={PS} />
      </DocSection>

      <DocSection
        title="PanelTitle"
        description="Compact icon + label for a FloatingPanel's title prop. Pass a Lucide-style icon component."
      >
        <Preview><PanelTitleDemo /></Preview>
        <CodeBlock code={PT} />
      </DocSection>
    </DocPage>
  )
}
