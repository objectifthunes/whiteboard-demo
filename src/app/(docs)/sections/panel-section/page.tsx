import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/sections/panel-section/')!

const CODE = `import { PanelSection, ButtonRow, Button } from '@objectifthunes/whiteboard'

<PanelSection
  heading="Settings"
  description="A bordered section."
  actions={
    <ButtonRow>
      <Button variant="secondary">Reset</Button>
      <Button>Save</Button>
    </ButtonRow>
  }
>
  {/* body */}
</PanelSection>`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          The building block of a FloatingPanel body. Optional <code>heading</code>, <code>description</code>,
          and <code>actions</code> slots — pass any combination.
        </p>
        <p>
          When <code>actions</code> is set, the header uses a <code>TitleRow</code> layout (heading left,
          actions right).
        </p>
      </Notes>
    </ExportPage>
  )
}
