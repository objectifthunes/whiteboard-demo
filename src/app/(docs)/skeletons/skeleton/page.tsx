import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/skeletons/skeleton/')!

const CODE = `import { Skeleton } from '@objectifthunes/whiteboard'

<Skeleton style={{ height: 14, width: '60%' }} />
<Skeleton style={{ height: 24, width: 120 }} radius="md" />
<Skeleton style={{ height: 24, width: 24 }} radius="pill" />`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          The base shimmering bar. Set <code>style</code> for arbitrary dimensions, <code>radius</code> for
          the corner style (<code>sm</code>, <code>md</code>, <code>pill</code>), and <code>as</code> for the
          element tag.
        </p>
        <p>Every other primitive skeleton (LineSkeleton, TitleSkeleton, …) wraps this.</p>
      </Notes>
    </ExportPage>
  )
}
