import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/media/canvas-stage/')!

const CODE = `import { CanvasStage } from '@objectifthunes/whiteboard'

<CanvasStage hint="16:9 surface · 1px border">
  <YourScene />
</CanvasStage>`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          A 16:9 bordered stage with <code>position: relative</code> — drop scenes (Three.js canvases,
          video, images) inside. <code>hint</code> shows a tiny caption in the bottom-left corner.
        </p>
        <p>
          Pair with <code>OverlayIconButton</code> for corner controls.
        </p>
      </Notes>
    </ExportPage>
  )
}
