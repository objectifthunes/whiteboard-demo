import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/skeletons/line-title/')!

const CODE = `import { TitleSkeleton, LineSkeleton } from '@objectifthunes/whiteboard'

<TitleSkeleton />
<LineSkeleton />
<LineSkeleton short />`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          The two atoms of every text placeholder. <code>LineSkeleton short</code> renders at 62% width — for
          the &quot;last line is shorter&quot; paragraph illusion.
        </p>
      </Notes>
    </ExportPage>
  )
}
