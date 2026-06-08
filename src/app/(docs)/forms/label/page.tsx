import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/forms/label/')!

const CODE = `import { Label, Input } from '@objectifthunes/whiteboard'

<Label htmlFor="email">Email</Label>
<Input id="email" type="email" />`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          A styled <code>&lt;label&gt;</code>: tiny, uppercase, muted, with letter-spacing. Most of the time
          you get one for free from <code>Field</code>. Use the bare <code>Label</code> for inline rows or
          custom layouts.
        </p>
      </Notes>
    </ExportPage>
  )
}
