import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/layout/draggable/')!

const CODE = `import { DraggableSurface, resetDraggables } from '@objectifthunes/whiteboard'

// keep your CSS anchoring — the drag is a translate() on top of it
<DraggableSurface id="legend" padding="sm" className="absolute bottom-4 left-1/2 -translate-x-1/2">
  …
</DraggableSurface>

<Button onClick={resetDraggables}>Reset layout</Button>
// double-click an empty area of a panel to reset just that one`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          For chrome floating over your own stage. Dragging starts from any non-interactive area —
          inputs, buttons and canvases inside keep their own pointer behaviour. The offset snaps to
          the whiteboard grid on release, honours the global <code>whiteboard-snap-now</code> event,
          and persists per <code>id</code> in localStorage. <code>Draggable</code> is the same
          behaviour without the Surface chrome (wrap a <code>Toolbar</code> with it).
        </p>
      </Notes>
    </ExportPage>
  )
}
