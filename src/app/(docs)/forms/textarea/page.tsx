import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/forms/textarea/')!

const CODE = `import { Textarea } from '@objectifthunes/whiteboard'

<Textarea placeholder="Tell us about yourself…" rows={4} />`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          Forwards refs. Defaults to <code>min-height: 86px</code> and <code>resize: vertical</code>. Use{' '}
          <code>rows</code> to set a starting height in lines.
        </p>
      </Notes>
    </ExportPage>
  )
}
