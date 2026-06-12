import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/typography/kbd/')!

const CODE = `import { Kbd } from '@objectifthunes/whiteboard'

<MutedText size="xs">
  <Kbd>shift</Kbd>-drag box-selects · <Kbd>esc</Kbd> clears · <Kbd>⌫</Kbd> deletes
</MutedText>`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          Monospace key chip with the classic raised bottom edge. For inline shortcut hints in help
          text and panel footers.
        </p>
      </Notes>
    </ExportPage>
  )
}
