import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Demo } from './client'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'

const e = findExport('/whiteboard/create-panel/')!

const CODE = `import { CreatePanel } from '@objectifthunes/whiteboard'

<CreatePanel
  title="New channel"
  label="Create channel"
  defaultPosition={{ x: 720, y: 0 }}
  width={280}
  onClick={() => router.push('/channels/new')}
/>`

const PROPS = `interface CreatePanelProps {
  title: ReactNode
  label: ReactNode                       // full-width button label
  defaultPosition: { x: number; y: number }
  width?: number                         // default 300
  onClick: () => void
  className?: string
}`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview padded={false}>
        <Demo />
      </Preview>
      <Source code={CODE} />
      <Source code={PROPS} lang="ts" />
      <Notes>
        <p>
          Creation should never read as content: a resource-shaped card with a fake thumbnail invites
          confusion. <code>CreatePanel</code> keeps the panel surface and radius of every other card but
          swaps the border for a dashed one and holds exactly one regular full-width primary{' '}
          <code>Button</code>.
        </p>
        <p>
          Place it <em>next to</em> a board of resource cards (typically to the right), not inside the
          grid — it stays individually draggable while grid items move with their section.
        </p>
      </Notes>
    </ExportPage>
  )
}
