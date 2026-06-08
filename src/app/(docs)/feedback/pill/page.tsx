import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/feedback/pill/')!

const CODE = `import { Pill, TagRow } from '@objectifthunes/whiteboard'

<TagRow>
  <Pill>default</Pill>
  <Pill tone="success">success</Pill>
  <Pill tone="warning">warning</Pill>
  <Pill tone="danger">danger</Pill>
</TagRow>`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          No border, soft background — for status indicators where a Chip would feel heavy.
        </p>
        <p>Pair with <code>TagRow</code> for wrapping rows.</p>
      </Notes>
    </ExportPage>
  )
}
