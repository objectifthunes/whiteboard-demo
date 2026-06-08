import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/forms/coord-grid/')!

const CODE = `import { CoordGrid, CoordInput } from '@objectifthunes/whiteboard'

<CoordGrid>
  <CoordInput axis="x" value={pos.x} onChange={…} />
  <CoordInput axis="y" value={pos.y} onChange={…} />
</CoordGrid>`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          A 2-column grid sized for tiny numeric inputs. Drop 2 (x/y) or 4 (x/y/z/scale){' '}
          <code>CoordInput</code>s as children — they wrap automatically.
        </p>
      </Notes>
    </ExportPage>
  )
}
