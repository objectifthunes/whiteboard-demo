import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/typography/page-title/')!

const CODE = `import { PageTitle } from '@objectifthunes/whiteboard'

<PageTitle>Project settings</PageTitle>`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>Renders as <code>&lt;h1&gt;</code> by default — pass <code>as</code> to swap.</p>
      </Notes>
    </ExportPage>
  )
}
