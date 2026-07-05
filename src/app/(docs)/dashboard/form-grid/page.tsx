import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/dashboard/form-grid/')!

const CODE = `import { FormGrid, FormActions, Field, Input, Button } from '@objectifthunes/whiteboard'

<FormGrid cols={2}>
  <Field label="Title"><Input /></Field>
  <Field label="Artist"><Input /></Field>
</FormGrid>
<FormActions>
  <Button variant="secondary">Cancel</Button>
  <Button>Save</Button>
</FormActions>`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          <code>cols</code> is <code>2 | 3</code> (default 2); both variants collapse to a single
          column under 880px, together with the rest of the dashboard chrome.
        </p>
        <p>
          <code>FormActions</code> is deliberately a compact right-aligned row — dashboard forms never
          use full-width buttons. It sits after the grid, not inside it.
        </p>
      </Notes>
    </ExportPage>
  )
}
