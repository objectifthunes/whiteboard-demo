import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/skeletons/choice-group-skeleton/')!

const CODE = `import { ChoiceGroupSkeleton } from '@objectifthunes/whiteboard'

<ChoiceGroupSkeleton count={3} withDescription />`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          A ChoiceGroup placeholder. Pass <code>withDescription</code> when the real options have a
          description line — keeps the layout in place during the swap.
        </p>
      </Notes>
    </ExportPage>
  )
}
