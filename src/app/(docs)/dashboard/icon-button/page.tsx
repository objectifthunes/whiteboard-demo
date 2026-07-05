import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/dashboard/icon-button/')!

const CODE = `import { IconButton } from '@objectifthunes/whiteboard'
import { Pencil, Trash2 } from 'lucide-react'

<IconButton icon={<Pencil size={14} />} label="Edit" onClick={edit} />
<IconButton icon={<Trash2 size={14} />} label="Delete" variant="danger" onClick={remove} />`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          <code>label</code> does double duty: it becomes the hover/focus <code>Tooltip</code> and the
          button&apos;s <code>aria-label</code>, so the action stays named for assistive tech without
          any extra props. Icons read best at 14px.
        </p>
        <p>
          <code>variant</code>, <code>disabled</code>, and <code>loading</code> pass straight through
          to the underlying <code>Button</code> in icon-only mode.
        </p>
      </Notes>
    </ExportPage>
  )
}
