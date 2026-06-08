import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/skeletons/media-primitives/')!

const CODE = `import {
  ChipSkeleton, AvatarSkeleton, ThumbSkeleton, CanvasSkeleton,
} from '@objectifthunes/whiteboard'

<ChipSkeleton />
<AvatarSkeleton />
<ThumbSkeleton />
<CanvasSkeleton />`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          Avatars and chips render at their real sizes. <code>ThumbSkeleton</code> is aspect-ratio locked
          (1:1) — set the width on the parent. <code>CanvasSkeleton</code> fills its parent (use a fixed-height
          container).
        </p>
      </Notes>
    </ExportPage>
  )
}
