import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/typography/card-title/')!

const CODE = `import { CardTitle } from '@objectifthunes/whiteboard'

<CardTitle>Short title</CardTitle>
<CardTitle clamp>Long title — clamped to two lines.</CardTitle>`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          Defaults to <code>&lt;p&gt;</code>. <code>clamp</code> caps at two lines with{' '}
          <code>-webkit-line-clamp</code>; useful inside ItemCards where titles vary in length.
        </p>
      </Notes>
    </ExportPage>
  )
}
