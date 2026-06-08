import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/forms/input/')!

const CODE = `import { Input } from '@objectifthunes/whiteboard'

<Input placeholder="Hello world" />
<Input type="email" placeholder="you@example.com" />
<Input type="number" defaultValue={42} />
<Input disabled defaultValue="Disabled" />`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          Forwards refs. Accepts every native <code>&lt;input&gt;</code> prop. Styling lives entirely on the
          base <code>input</code> selector in <code>whiteboard.css</code> — drop in any <code>type</code>{' '}
          (text, email, number, password, date, etc.) and it inherits.
        </p>
      </Notes>
    </ExportPage>
  )
}
