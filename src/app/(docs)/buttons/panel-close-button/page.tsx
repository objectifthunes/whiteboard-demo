import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/buttons/panel-close-button/')!

const CODE = `import { PanelCloseButton } from '@objectifthunes/whiteboard'

<PanelCloseButton onClick={onClose} />
<PanelCloseButton onClick={onClose} label="Dismiss" />`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          Pre-built secondary button with an X icon. Use inside a panel&apos;s <code>headerActions</code> when
          a sane dismiss is needed; for danger / destructive close, use <code>&lt;Button variant=&quot;danger&quot;&gt;</code>.
        </p>
      </Notes>
    </ExportPage>
  )
}
