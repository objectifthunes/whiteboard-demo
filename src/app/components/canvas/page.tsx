import { CodeBlock } from '@/components/CodeBlock'
import { DocPage } from '@/components/DocPage'
import { DocSection } from '@/components/DocSection'
import { Preview } from '@/components/Preview'
import { CanvasDemo, ConfirmDialogDemo, ErrorBoundaryDemo } from './client'

const SHELL = `'use client'

import { WhiteboardShell, FloatingPanel } from '@objectifthunes/whiteboard'

export default function App() {
  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <WhiteboardShell>
        <FloatingPanel title="Settings" defaultPosition={{ x: 40, y: 40 }} focusable>
          Drag · scroll to zoom · double-click to focus
        </FloatingPanel>
      </WhiteboardShell>
    </div>
  )
}`

const SHELL_PROPS = `interface Props {
  children: ReactNode
  showMinimap?: boolean      // default true
  minimapLoading?: boolean   // default false
  extraActions?: ReactNode   // rendered inside the ZoomBar (e.g. a ThemeToggle)
}`

const PANEL_PROPS = `interface Props {
  title: ReactNode
  defaultPosition: { x: number; y: number }
  width?: number                                   // default 300
  trackRect?: MutableRefObject<PanelRect>          // sync the panel's live rect
  focusable?: boolean
  focusPadding?: number                            // default 40
  focusMaxScale?: number                           // default 1.5
  headerActions?: ReactNode
}`

const CONFIRM = `import { ConfirmDialog, Button } from '@objectifthunes/whiteboard'

const [open, setOpen] = useState(false)
const [loading, setLoading] = useState(false)

<Button variant="danger" onClick={() => setOpen(true)}>Delete</Button>
<ConfirmDialog
  open={open}
  title="Delete this thing?"
  message="This cannot be undone."
  confirmLabel="Delete"
  loading={loading}
  onConfirm={async () => {
    setLoading(true)
    await deleteIt()
    setLoading(false)
    setOpen(false)
  }}
  onCancel={() => setOpen(false)}
/>`

const ERR = `import { PanelErrorBoundary } from '@objectifthunes/whiteboard'

<PanelErrorBoundary fallbackMessage="This panel crashed.">
  <SomePotentiallyBrokenWidget />
</PanelErrorBoundary>`

export default async function CanvasPage() {
  return (
    <DocPage
      title="Canvas & panels"
      lead="The pan/zoom canvas, the floating panels you drop into it, and the dialog/boundary helpers around them."
    >
      <DocSection
        title="WhiteboardShell + FloatingPanel"
        description="Drag empty space to pan, wheel to zoom. Each FloatingPanel is absolutely positioned in world space and double-clickable to focus. The shell auto-fits the camera on first paint."
      >
        <Preview><CanvasDemo /></Preview>
        <CodeBlock code={SHELL} />
      </DocSection>

      <DocSection title="WhiteboardShell props">
        <CodeBlock code={SHELL_PROPS} lang="ts" />
      </DocSection>

      <DocSection title="FloatingPanel props">
        <CodeBlock code={PANEL_PROPS} lang="ts" />
      </DocSection>

      <DocSection
        title="ConfirmDialog"
        description="Portaled, accessible confirmation modal. Closes on Escape, backdrop click, or Cancel. loadingLabel defaults to `${confirmLabel}…`."
      >
        <Preview><ConfirmDialogDemo /></Preview>
        <CodeBlock code={CONFIRM} />
      </DocSection>

      <DocSection
        title="PanelErrorBoundary"
        description="Class-based error boundary with a Retry button. Drop it around panel bodies that load unstable widgets."
      >
        <Preview><ErrorBoundaryDemo /></Preview>
        <CodeBlock code={ERR} />
      </DocSection>
    </DocPage>
  )
}
