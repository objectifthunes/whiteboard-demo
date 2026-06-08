import { ExportPage } from '@/components/ExportPage'
import { FullScreenPreview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'

const e = findExport('/whiteboard/floating-panel/')!

const CODE = `import { FloatingPanel } from '@objectifthunes/whiteboard'

<FloatingPanel
  title="Settings"
  defaultPosition={{ x: 40, y: 40 }}
  width={300}
  focusable
  focusPadding={40}
  focusMaxScale={1.5}
>
  {/* body */}
</FloatingPanel>`

const PROPS = `interface Props {
  title: ReactNode
  defaultPosition: { x: number; y: number }
  width?: number                                   // default 300
  trackRect?: MutableRefObject<PanelRect>          // sync the panel's live rect
  focusable?: boolean
  focusPadding?: number                            // default 40
  focusMaxScale?: number                           // default 1.5
  headerActions?: ReactNode
}`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <FullScreenPreview
        href="/full/whiteboard/floating-panel/"
        illustration={
          <span style={{ fontFamily: 'var(--docs-mono)', fontSize: 12, letterSpacing: '0.08em' }}>
            DRAGGABLE · DOUBLE-CLICK TO FOCUS · TRACK RECT
          </span>
        }
      />
      <Source code={CODE} />
      <Source code={PROPS} lang="ts" />
      <Notes>
        <p>
          <code>defaultPosition</code> is captured <em>once</em>. Changing the prop later does not reposition
          the panel. The reset button (<code>resetWidgets</code>) snaps each panel back to its <em>original</em>{' '}
          default, not the current prop.
        </p>
        <p>
          Pass <code>trackRect={'{ref}'}</code> to keep an external ref in sync with the panel&apos;s live{' '}
          <code>{'{ x, y, width, height }'}</code>. Use <code>belowPanel(ref.current)</code> to stack a second
          panel underneath.
        </p>
      </Notes>
    </ExportPage>
  )
}
