import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/feedback/loading-state/')!

const CODE = `import { LoadingState } from '@objectifthunes/whiteboard'

<LoadingState />                            // default "Loading..."
<LoadingState label="Fetching profile…" />`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          Inline spinner + label. Renders as a <code>&lt;span&gt;</code> so it flows in sentences,
          panel headers, or any tight space. For full-surface loading, prefer{' '}
          <code>GeneratingOverlay</code>.
        </p>
      </Notes>
    </ExportPage>
  )
}
