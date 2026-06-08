import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/forms/select/')!

const CODE = `import { Select } from '@objectifthunes/whiteboard'

<Select defaultValue="europe">
  <option value="europe">Europe</option>
  <option value="americas">Americas</option>
  <option value="apac">APAC</option>
</Select>`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          Forwards refs. Accepts every native <code>&lt;select&gt;</code> prop. For a typed controlled-radio
          pattern with cards instead of a native dropdown, see <code>ChoiceGroup</code>.
        </p>
      </Notes>
    </ExportPage>
  )
}
