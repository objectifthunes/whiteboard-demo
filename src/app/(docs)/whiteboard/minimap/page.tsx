import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Demo } from './client'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'

const e = findExport('/whiteboard/minimap/')!

const CODE = `import { WhiteboardShell } from '@objectifthunes/whiteboard'

// The minimap is rendered automatically by WhiteboardShell.
// Hide it with showMinimap={false}, or pass minimapLoading={true} while data streams.

<WhiteboardShell showMinimap minimapLoading={isLoading}>
  {/* …panels… */}
</WhiteboardShell>`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview padded={false}>
        <Demo />
      </Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          The minimap subscribes to <code>registryVersion</code> in the store, <em>not</em> to{' '}
          <code>panels</code>. The store mutates the panels Map in place; selecting <code>panels</code> alone
          will not trigger re-renders.
        </p>
        <p>
          Click or drag inside the minimap to pan the main camera. Scroll to zoom. Double-click a rendered
          panel to focus it (subject to its <code>focusPadding</code> and <code>focusMaxScale</code>).
        </p>
      </Notes>
    </ExportPage>
  )
}
