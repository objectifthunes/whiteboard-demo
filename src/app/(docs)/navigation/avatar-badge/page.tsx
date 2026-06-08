import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/navigation/avatar-badge/')!

const CODE = `import { AvatarBadge } from '@objectifthunes/whiteboard'

<AvatarBadge>JD</AvatarBadge>`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          A circular initials badge — small (1.9rem square), with a muted background and bold initials.
          For multi-character labels, the layout stays tight; truncate before rendering if needed.
        </p>
      </Notes>
    </ExportPage>
  )
}
