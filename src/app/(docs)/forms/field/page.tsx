import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/forms/field/')!

const CODE = `import { Field, Input } from '@objectifthunes/whiteboard'

<Field label="Name" htmlFor="name" hint="Display name only.">
  <Input id="name" />
</Field>

<Field label="Email" htmlFor="email" error="Email is required.">
  <Input id="email" type="email" />
</Field>`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          Wraps a control with a <code>Label</code>, the children, an optional hint, and an inline error. The
          hint disappears when there is an error.
        </p>
        <p>
          <code>layout=&quot;control&quot;</code> swaps the inner grid for a control-style row — pair with{' '}
          <code>as=&quot;fieldset&quot;</code> for inline checkbox groups.
        </p>
      </Notes>
    </ExportPage>
  )
}
