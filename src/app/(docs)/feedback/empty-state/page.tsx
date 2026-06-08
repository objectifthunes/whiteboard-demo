import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/feedback/empty-state/')!

const CODE = `import { EmptyState, Button } from '@objectifthunes/whiteboard'

<EmptyState
  title="No items yet"
  description="Create your first item to see it here."
  action={<Button>Create</Button>}
/>`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          A composed CardTitle + MutedText + optional action, wrapped in a <code>Stack size=&quot;sm&quot;</code>.
          Drop it inside any panel body or page card where you&apos;d otherwise hand-roll a &quot;nothing here yet&quot; layout.
        </p>
      </Notes>
    </ExportPage>
  )
}
