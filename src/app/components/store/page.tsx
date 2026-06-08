import { CodeBlock } from '@/components/CodeBlock'
import { DocPage } from '@/components/DocPage'
import { DocSection } from '@/components/DocSection'
import { Preview } from '@/components/Preview'
import { LayoutHookDemo, StoreControlsDemo } from './client'

const STORE_TYPE = `interface WhiteboardStore {
  offset: { x: number; y: number }
  scale: number
  viewportSize: { width: number; height: number }
  snapToGrid: boolean
  snapGridSize: number
  panels: Map<string, PanelRect>
  registryVersion: number

  setOffset(v): void
  setScale(v): void
  setSnapToGrid(v): void

  register(id, rect): void
  unregister(id): void

  fitToContent(): void
  focusPanel(rect, options?): void
  resetWidgets(): void
  resetSession(): void
}`

const STORE_USE = `import { useWhiteboardStore } from '@objectifthunes/whiteboard'

const fit = useWhiteboardStore(s => s.fitToContent)
const focus = useWhiteboardStore(s => s.focusPanel)

<Button onClick={fit}>Fit all</Button>
<Button onClick={() => focus({ x: 0, y: 0, width: 600, height: 400 }, { maxScale: 2 })}>
  Zoom hero
</Button>`

const LAYOUT = `import { useWhiteboardLayout, WHITEBOARD_GRID } from '@objectifthunes/whiteboard'

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

const HELPERS = `import {
  computeWhiteboardFit,
  computeWhiteboardRectFocus,
  snapToWhiteboardGrid,
  usePanelRect,
  belowPanel,
  cn,
} from '@objectifthunes/whiteboard'

// Track a panel's current rect, then place another below it
const settingsRect = usePanelRect({ x: 40, y: 40 })

<FloatingPanel title="Settings" defaultPosition={{ x: 40, y: 40 }} trackRect={settingsRect} />
<FloatingPanel title="Layers"   defaultPosition={belowPanel(settingsRect.current)} />`

export default async function StorePage() {
  return (
    <DocPage
      title="Store & hooks"
      lead="Direct camera control, panel registry access, and grid-snapped initial layouts."
    >
      <DocSection
        title="useWhiteboardStore"
        description="A plain Zustand store. Select what you need. Subscribe to registryVersion (not panels) to re-render when panels change."
      >
        <CodeBlock code={STORE_TYPE} lang="ts" />
        <CodeBlock code={STORE_USE} />
      </DocSection>

      <DocSection
        title="Programmatic camera control"
        description="Call fitToContent, resetWidgets, or toggle snapToGrid from anywhere — these buttons drive the live shell on this page if one is rendered above."
      >
        <Preview><StoreControlsDemo /></Preview>
      </DocSection>

      <DocSection
        title="useWhiteboardLayout"
        description="Given a `widths` map, returns grid-snapped { x, y } positions for each key. Useful for laying out an initial row of panels."
      >
        <Preview><LayoutHookDemo /></Preview>
        <CodeBlock code={LAYOUT} />
      </DocSection>

      <DocSection
        title="Helpers"
        description="Geometry computations, panel-rect tracking, grid-snap, and a tiny classnames helper."
      >
        <CodeBlock code={HELPERS} />
      </DocSection>
    </DocPage>
  )
}
