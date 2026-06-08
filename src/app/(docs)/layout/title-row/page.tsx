import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/layout/title-row/')!

const CODE = `import { TitleRow, Button } from '@objectifthunes/whiteboard'

<TitleRow>
  <strong>Section header</strong>
  <Button variant="secondary">Action</Button>
</TitleRow>`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          A horizontal row with <code>justify-content: space-between</code>. The canonical title-on-the-left,
          action-on-the-right header row.
        </p>
      </Notes>
    </ExportPage>
  )
}
