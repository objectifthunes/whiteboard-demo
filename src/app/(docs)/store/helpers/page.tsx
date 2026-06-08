import { ExportPage } from '@/components/ExportPage'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'

const e = findExport('/store/helpers/')!

const CODE = `import {
  usePanelRect,
  belowPanel,
  snapToWhiteboardGrid,
  WHITEBOARD_GRID,
  cn,
} from '@objectifthunes/whiteboard'

// 1. Track a panel's live rect.
const settingsRect = usePanelRect({ x: 40, y: 40 })

<FloatingPanel title="Settings" defaultPosition={{ x: 40, y: 40 }} trackRect={settingsRect} />

// 2. Stack another panel underneath it.
<FloatingPanel title="Layers" defaultPosition={belowPanel(settingsRect.current)} />

// 3. Snap any number to the grid.
const x = snapToWhiteboardGrid(rawX)  // → multiple of WHITEBOARD_GRID (20)

// 4. Tiny classnames helper.
className={cn('base', isActive && 'is-active', extra)}`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Source code={CODE} />
      <Notes>
        <p>
          <code>usePanelRect</code> returns a stable ref. Pass it as <code>trackRect</code> on a
          FloatingPanel and it stays in sync with the panel&apos;s rendered <code>{`{ x, y, width, height }`}</code>.
        </p>
        <p>
          <code>belowPanel(rect, gap?)</code> defaults to one grid-cell gap.{' '}
          <code>WHITEBOARD_GRID</code> is <code>20</code>.
        </p>
        <p>
          <code>cn</code> is a one-liner: <code>{`(string | false | null | undefined)[] → string`}</code>.
          Filters out falsies and joins with a space.
        </p>
      </Notes>
    </ExportPage>
  )
}
