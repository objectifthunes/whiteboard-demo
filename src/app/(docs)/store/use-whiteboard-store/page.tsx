import { ExportPage } from '@/components/ExportPage'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'

const e = findExport('/store/use-whiteboard-store/')!

const TYPE = `interface WhiteboardStore {
  offset: { x: number; y: number }
  scale: number
  viewportSize: { width: number; height: number }
  snapToGrid: boolean
  snapGridSize: number
  panels: Map<string, PanelRect>
  resetFns: Map<string, () => void>
  registryVersion: number

  setOffset(v): void
  setScale(v): void
  setViewportSize(v): void
  setSnapToGrid(v): void

  register(id, rect): void
  unregister(id): void
  registerReset(id, fn): void
  unregisterReset(id): void

  fitToContent(): void
  focusPanel(rect, options?): void
  resetWidgets(): void
  resetSession(): void
}`

const USE = `import { useWhiteboardStore } from '@objectifthunes/whiteboard'

const fit   = useWhiteboardStore(s => s.fitToContent)
const focus = useWhiteboardStore(s => s.focusPanel)

<Button onClick={fit}>Fit all</Button>
<Button onClick={() => focus({ x: 0, y: 0, width: 600, height: 400 }, { maxScale: 2 })}>
  Zoom hero
</Button>`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Source code={TYPE} lang="ts" />
      <Source code={USE} />
      <Notes>
        <p>
          A plain Zustand store. Select with a selector function and you get the usual Zustand re-render rules.
        </p>
        <p>
          The <code>panels</code> Map is <strong>mutated in place</strong>. Selecting <code>panels</code> alone
          will not trigger re-renders — subscribe to <code>registryVersion</code> instead. The store bumps it
          on every register / unregister.
        </p>
      </Notes>
    </ExportPage>
  )
}
