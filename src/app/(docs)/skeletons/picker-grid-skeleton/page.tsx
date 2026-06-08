import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/skeletons/picker-grid-skeleton/')!

const CODE = `import { PickerGridSkeleton } from '@objectifthunes/whiteboard'

<PickerGridSkeleton count={8} minItemWidth={120} />`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          A PickerGrid pre-filled with N placeholder cells. Match <code>minItemWidth</code> to the real grid
          so the layout doesn&apos;t jump when items swap in.
        </p>
      </Notes>
    </ExportPage>
  )
}
