import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/typography/section-title/')!

const CODE = `import { SectionTitle } from '@objectifthunes/whiteboard'

<SectionTitle>Inputs</SectionTitle>`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          Used internally by <code>PanelSection</code> for its heading. Renders as <code>&lt;span&gt;</code>{' '}
          so it can sit inside a TitleRow next to an action button.
        </p>
      </Notes>
    </ExportPage>
  )
}
