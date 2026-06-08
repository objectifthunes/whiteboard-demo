import { ExportPage } from '@/components/ExportPage'
import { FullScreenPreview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'

const e = findExport('/whiteboard/zoom-bar/')!

const CODE = `import { WhiteboardShell, ThemeToggle } from '@objectifthunes/whiteboard'

<WhiteboardShell extraActions={<ThemeToggle theme={theme} onToggle={toggle} />}>
  {/* …panels… */}
</WhiteboardShell>`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <FullScreenPreview
        href="/full/whiteboard/zoom-bar/"
        illustration={
          <span style={{ fontFamily: 'var(--docs-mono)', fontSize: 12, letterSpacing: '0.08em' }}>
            RIGHT EDGE · ZOOM · FIT · RESET · SNAP · EXTRA
          </span>
        }
      />
      <Source code={CODE} />
      <Notes>
        <p>
          The ZoomBar is rendered automatically by <code>WhiteboardShell</code>. Slot extra actions —
          most often a <code>ThemeToggle</code> — via the shell&apos;s <code>extraActions</code> prop.
        </p>
        <p>
          Snap-to-grid toggles via the grid icon. While on, dragging a panel snaps it to a 20px grid (the
          <code>WHITEBOARD_GRID</code> constant) and a global <code>whiteboard-snap-now</code> event aligns
          every existing panel.
        </p>
      </Notes>
    </ExportPage>
  )
}
