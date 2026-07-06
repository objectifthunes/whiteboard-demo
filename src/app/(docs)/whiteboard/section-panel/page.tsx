import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Demo } from './client'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'

const e = findExport('/whiteboard/section-panel/')!

const CODE = `import { SectionPanel, sectionPanelWidth } from '@objectifthunes/whiteboard'

<SectionPanel title="Videos" defaultPosition={{ x: 0, y: 0 }} cols={4} cardW={260}>
  {videos.map(v => <VideoCard key={v.id} video={v} />)}
</SectionPanel>

// Place the next thing one grid-gap to the right of the section:
const nextX = sectionPanelWidth(4, 260) + 80`

const PROPS = `interface SectionPanelProps {
  title: ReactNode
  defaultPosition: { x: number; y: number }
  cols: number
  cardW: number            // keep it a multiple of WHITEBOARD_GRID (20)
  headerActions?: ReactNode
  className?: string
  loading?: boolean        // skeleton cards under a blurred overlay
  loadingCards?: number    // default: one row (cols)
  loadingMessage?: string  // default 'Loading…'
}

sectionPanelWidth(cols, cardW)
// = cols * cardW + (cols + 1) * WHITEBOARD_GRID`

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
          The section is the draggable unit — grab its header; the cards inside are static grid items,
          so buttons, videos and inputs in them behave normally.
        </p>
        <p>
          Body padding and card gaps both equal the canvas grid unit (20 world units), and with{' '}
          <code>cardW</code> a multiple of 20 the section&apos;s outer width is always a whole number of
          background plus signs — internal rhythm and canvas rhythm never drift.
        </p>
      </Notes>
    </ExportPage>
  )
}
