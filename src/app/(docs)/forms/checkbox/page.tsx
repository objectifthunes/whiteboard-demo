import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/forms/checkbox/')!

const CODE = `import { Checkbox, Switch } from '@objectifthunes/whiteboard'

<Checkbox label="Building rules" checked={rules} onChange={() => setRules(v => !v)} />
<Checkbox label="Adaptive threshold" hint="(dirty scans)" checked={adaptive} onChange={…} />
<Switch label="Dark mode" checked={dark} onChange={…} />`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          Both render a full-width labeled row. The input declares <code>flex: none</code> and its own
          size, so an aggressive host global like <code>input {'{'} flex: 1 {'}'}</code> cannot stretch
          the box into the middle of the row. <code>hint</code> renders muted, inline, after the label.
        </p>
      </Notes>
    </ExportPage>
  )
}
