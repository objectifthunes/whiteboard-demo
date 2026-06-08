import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/whiteboard/panel-error-boundary/')!

const CODE = `import { PanelErrorBoundary } from '@objectifthunes/whiteboard'

<PanelErrorBoundary fallbackMessage="This panel crashed.">
  <SomePotentiallyBrokenWidget />
</PanelErrorBoundary>`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          A class-based error boundary that catches anything thrown inside its subtree on render. Renders a
          friendly fallback + a Retry button (which resets the boundary; the underlying error must also be
          fixed for the retry to succeed).
        </p>
        <p>
          One per panel body — not one per whole canvas — so a single bad widget can&apos;t blank the whole
          studio.
        </p>
      </Notes>
    </ExportPage>
  )
}
