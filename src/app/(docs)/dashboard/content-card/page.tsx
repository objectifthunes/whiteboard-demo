import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/dashboard/content-card/')!

const CODE = `import { ContentCard } from '@objectifthunes/whiteboard'

<ContentCard title="Usage">
  <MutedText size="sm">1,204 renders this month.</MutedText>
</ContentCard>

<ContentCard>{untitledContent}</ContentCard>`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          <code>title</code> renders as an <code>Eyebrow</code>, so it takes any node — string, or
          icon + text. Omit it entirely for an untitled surface; passing <code>undefined</code> and
          omitting are equivalent.
        </p>
        <p>
          This is the surface <code>StatCard</code> and recap tiles are built on — reach for it when
          a stat tile is too opinionated.
        </p>
      </Notes>
    </ExportPage>
  )
}
