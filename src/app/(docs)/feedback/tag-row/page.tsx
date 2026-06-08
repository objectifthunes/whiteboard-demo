import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/feedback/tag-row/')!

const CODE = `import { TagRow, Chip, Pill } from '@objectifthunes/whiteboard'

<TagRow>
  <Chip>react</Chip>
  <Chip>zustand</Chip>
  <Pill tone="success">live</Pill>
</TagRow>`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          A flex-wrap row with a tiny gap. Drop chips, pills, mini metadata, or any tiny tag-shaped element
          in; it wraps cleanly.
        </p>
      </Notes>
    </ExportPage>
  )
}
