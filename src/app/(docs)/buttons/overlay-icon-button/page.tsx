import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/buttons/overlay-icon-button/')!

const CODE = `import { CanvasStage, OverlayIconButton } from '@objectifthunes/whiteboard'
import { Maximize2 } from 'lucide-react'

<CanvasStage>
  <YourScene />
  <OverlayIconButton placement="top-right" aria-label="Fullscreen">
    <Maximize2 size={14} />
  </OverlayIconButton>
</CanvasStage>`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          Absolutely positioned. <code>placement</code> picks the corner —{' '}
          <code>top-right</code>, <code>bottom-left</code>, or <code>bottom-right</code>. Parent needs{' '}
          <code>position: relative</code> (CanvasStage handles that for you).
        </p>
        <p>
          Stops pointer / wheel / context-menu propagation by default so it doesn&apos;t fight the canvas it
          sits over.
        </p>
      </Notes>
    </ExportPage>
  )
}
