import { CodeBlock } from '@/components/CodeBlock'
import { DocPage } from '@/components/DocPage'
import { DocSection } from '@/components/DocSection'
import { Preview } from '@/components/Preview'
import { CanvasStageDemo, ImageThumbDemo } from './client'

const CANVAS_STAGE = `import { CanvasStage, OverlayIconButton } from '@objectifthunes/whiteboard'

<CanvasStage hint="16:9 surface · 1px border">
  <YourScene />
  <OverlayIconButton placement="top-right" aria-label="Fullscreen">
    <Maximize2 size={14} />
  </OverlayIconButton>
</CanvasStage>`

const THUMB = `import { ImageThumb } from '@objectifthunes/whiteboard'

<ImageThumb src={null} alt="No image" size="md" placeholder="No image yet" />
<ImageThumb src={url} alt="…" size="md" fit="cover" />`

export default async function MediaPage() {
  return (
    <DocPage
      title="Media"
      lead="A 16:9 stage for embedded scenes and a self-contained image thumbnail."
    >
      <DocSection
        title="CanvasStage + OverlayIconButton"
        description="A 16:9 framed surface for embedded scenes (Three.js, video, image). OverlayIconButton positions itself absolutely via placement."
      >
        <Preview><CanvasStageDemo /></Preview>
        <CodeBlock code={CANVAS_STAGE} />
      </DocSection>

      <DocSection
        title="ImageThumb"
        description="Aspect-ratio-locked thumbnail with a placeholder fallback when src is null. fit controls object-fit."
      >
        <Preview><ImageThumbDemo /></Preview>
        <CodeBlock code={THUMB} />
      </DocSection>
    </DocPage>
  )
}
