import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/store/use-whiteboard-layout/')!

const CODE = `import { useWhiteboardLayout, WHITEBOARD_GRID } from '@objectifthunes/whiteboard'

const WIDTHS = { settings: 220, layers: 220, inspector: 220 }

export function App() {
  const opts = useMemo(
    () => ({ widths: WIDTHS, startX: 20, y: 20, gap: WHITEBOARD_GRID }),
    [],
  )
  const { positions } = useWhiteboardLayout(opts)

  return (
    <WhiteboardShell>
      <FloatingPanel title="Settings"  defaultPosition={positions.settings}  />
      <FloatingPanel title="Layers"    defaultPosition={positions.layers}    />
      <FloatingPanel title="Inspector" defaultPosition={positions.inspector} />
    </WhiteboardShell>
  )
}`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          The hook re-derives positions whenever the <code>widths</code> object identity changes. Inline
          literals (<code>widths={'{{ a: 100 }}'}</code>) recompute on every render — wrap in{' '}
          <code>useMemo</code> or hoist to module scope.
        </p>
        <p>
          Returns <code>{`{ layout, panelWidth, positions }`}</code>. Positions are snapped to the canvas
          grid (multiples of <code>WHITEBOARD_GRID</code>) so panels line up out of the gate.
        </p>
      </Notes>
    </ExportPage>
  )
}
