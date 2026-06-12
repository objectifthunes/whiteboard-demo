import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/feedback/tooltip/')!

const CODE = `import { Tooltip, Button } from '@objectifthunes/whiteboard'

<Tooltip label="Re-frame camera">
  <Button variant="secondary" iconOnly>⤢</Button>
</Tooltip>

// placement="top" (default), "bottom", "left", or "right" (vertical toolbars)`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          Pure CSS: the bubble appears on <code>:hover</code> and <code>:focus-within</code>, so
          keyboard users get it for free. No portal — keep it for short labels over chrome, not for
          rich content near viewport edges.
        </p>
      </Notes>
    </ExportPage>
  )
}
