import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/navigation/vertical-toolbar/')!

const CODE = `import { VerticalToolbar, AvatarBadge } from '@objectifthunes/whiteboard'

<VerticalToolbar bottom={<AvatarBadge>JD</AvatarBadge>}>
  <button className="wb-btn wb-btn--secondary wb-btn--icon-only" aria-label="Dashboard">
    <LayoutDashboard size={14} />
  </button>
  …
</VerticalToolbar>

// position="left" (default), "right", or "static" (inline placement)`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          Fixed-position icon sidebar with an optional <code>bottom</code> slot. Use{' '}
          <code>position=&quot;static&quot;</code> when you want to inline the toolbar inside a normal layout
          flow (for example, this preview).
        </p>
      </Notes>
    </ExportPage>
  )
}
