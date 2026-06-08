import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/sections/panel-title/')!

const CODE = `import { PanelTitle, FloatingPanel } from '@objectifthunes/whiteboard'
import { Settings } from 'lucide-react'

<FloatingPanel
  title={<PanelTitle icon={Settings} label="Project settings" />}
  defaultPosition={{ x: 40, y: 40 }}
>
  …
</FloatingPanel>`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          Compact icon + label, sized for a <code>FloatingPanel</code>&apos;s <code>title</code> prop. Pass
          any Lucide-style icon component — it accepts <code>size</code> and <code>className</code>.
        </p>
      </Notes>
    </ExportPage>
  )
}
