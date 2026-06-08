import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/skeletons/card-skeleton/')!

const CODE = `import { CardSkeleton, ItemList } from '@objectifthunes/whiteboard'

<ItemList as="ul">
  <CardSkeleton withThumb chipCount={2} actionCount={2} />
  <CardSkeleton withThumb={false} chipCount={1} />
</ItemList>`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          A composed card placeholder that adapts via three booleans / counts. Replaces every domain-specific
          card skeleton from earlier versions (StoryCardSkeleton, AssetCardSkeleton, UserCardSkeleton).
        </p>
      </Notes>
    </ExportPage>
  )
}
