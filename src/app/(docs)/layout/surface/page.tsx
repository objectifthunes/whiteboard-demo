import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/layout/surface/')!

const CODE = `import { Surface, SectionTitle, MutedText } from '@objectifthunes/whiteboard'

<Surface style={{ position: 'absolute', right: 16, top: 16, width: 256 }}>
  <SectionTitle>Selection</SectionTitle>
  <MutedText size="xs">3 lines selected — esc clears</MutedText>
</Surface>

// padding="md" (default) · "sm" · "none" `

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          The container for overlays that float over your own stage (a 3D canvas, a map, a video) —
          places where <code>FloatingPanel</code> would be wrong because there is no whiteboard. One
          export instead of re-typing the surface/border/shadow trio in every app.
        </p>
      </Notes>
    </ExportPage>
  )
}
