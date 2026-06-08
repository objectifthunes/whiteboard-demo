import { ExportPage } from '@/components/ExportPage'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'

const e = findExport('/store/geometry/')!

const CODE = `import {
  computeWhiteboardFit,
  computeWhiteboardRectFocus,
} from '@objectifthunes/whiteboard'

// Frame every panel in the viewport, with 60px padding.
const fit = computeWhiteboardFit(panels, viewportSize, 60)
// → { scale, offset } | null

// Frame a single rect, with 40px padding and a max zoom of 1.5×.
const focus = computeWhiteboardRectFocus(rect, viewportSize, 40, 1.5)
// → { scale, offset }`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Source code={CODE} />
      <Notes>
        <p>
          Pure functions — no React, no Zustand. The store calls them internally for{' '}
          <code>fitToContent</code> and <code>focusPanel</code>, but you can call them yourself for custom
          framing logic (a &quot;focus selection&quot; button, a snap-to-rect animation, etc.).
        </p>
        <p>
          Both clamp scale to <code>[0.2, 3]</code>. <code>computeWhiteboardFit</code> clamps the fit-scale
          to <code>1.5</code> by default so a single panel doesn&apos;t zoom obnoxiously close.
        </p>
      </Notes>
    </ExportPage>
  )
}
