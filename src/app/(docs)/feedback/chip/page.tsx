import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/feedback/chip/')!

const CODE = `import { Chip, TagRow } from '@objectifthunes/whiteboard'

<TagRow>
  <Chip>react</Chip>
  <Chip>zustand</Chip>
</TagRow>`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          Outlined, pill-shaped, default <code>&lt;span&gt;</code>. Render as <code>&lt;button class=&quot;chip&quot;&gt;</code>{' '}
          for an interactive variant (gets a hover state for free).
        </p>
      </Notes>
    </ExportPage>
  )
}
