import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/feedback/generating-overlay/')!

const CODE = `import { GeneratingOverlay } from '@objectifthunes/whiteboard'

<div style={{ position: 'relative' }}>
  <GeneratingOverlay isGenerating={busy} message="Generating output…">
    {result}
  </GeneratingOverlay>
</div>`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          Wraps your children and lays a backdrop-blur overlay over them while <code>isGenerating</code> is
          true. Parent needs <code>position: relative</code>.
        </p>
        <p>
          <code>message</code> defaults to <q>Generating, please wait…</q>.
        </p>
      </Notes>
    </ExportPage>
  )
}
