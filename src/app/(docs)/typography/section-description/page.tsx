import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/typography/section-description/')!

const CODE = `import { SectionTitle, SectionDescription } from '@objectifthunes/whiteboard'

<SectionTitle>Inputs</SectionTitle>
<SectionDescription>One-line description under the title.</SectionDescription>`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          Used internally by <code>PanelSection</code> for its <code>description</code> prop. Standalone, it
          is just a tiny muted <code>&lt;p&gt;</code>.
        </p>
      </Notes>
    </ExportPage>
  )
}
