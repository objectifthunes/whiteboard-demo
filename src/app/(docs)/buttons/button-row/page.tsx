import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/buttons/button-row/')!

const CODE = `import { Button, ButtonRow } from '@objectifthunes/whiteboard'

<ButtonRow>
  <Button variant="secondary">Cancel</Button>
  <Button>Confirm</Button>
</ButtonRow>`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          Children get <code>flex: 1 1 0</code> — equal share of the available width, regardless of label
          length. Perfect for action footers and dialog buttons.
        </p>
        <p>Polymorphic via <code>as</code> (defaults to <code>&quot;div&quot;</code>).</p>
      </Notes>
    </ExportPage>
  )
}
