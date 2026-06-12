import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/forms/number-field/')!

const CODE = `import { NumberField } from '@objectifthunes/whiteboard'

<NumberField
  label="Wall height (m)"
  min={0.1}
  max={10}
  step={0.1}
  value={height}
  onChange={setHeight}
/>`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          A <code>Field</code> + <code>Input type=&quot;number&quot;</code> with the parsing already
          done: values arrive as numbers, clamped to <code>[min, max]</code>; intermediate non-numeric
          states are swallowed instead of emitted as <code>NaN</code>.
        </p>
      </Notes>
    </ExportPage>
  )
}
