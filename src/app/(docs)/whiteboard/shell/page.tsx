import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Demo } from './client'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'

const e = findExport('/whiteboard/shell/')!

const CODE = `'use client'

import '@objectifthunes/whiteboard/style.css'
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

const PROPS = `interface Props {
  children: ReactNode
  showMinimap?: boolean        // default true
  minimapLoading?: boolean     // default false
  extraActions?: ReactNode     // rendered inside the ZoomBar
}`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview padded={false}>
        <Demo />
      </Preview>
      <Source code={CODE} />
      <Source code={PROPS} lang="ts" />
      <Notes>
        <p>
          <code>WhiteboardShell</code> is <code>position: fixed; inset: 0</code> — it takes over the viewport.
          Mount it once per page. For Next.js, the page that hosts it must be a client component
          (<code>&apos;use client&apos;</code>) and, under static export, gated behind a mounted flag so SSR HTML stays empty.
        </p>
        <p>
          The shell auto-fits the camera on first paint, so panels appear pre-framed. After that, camera control
          is yours via <code>useWhiteboardStore</code> (<code>fitToContent</code>, <code>focusPanel</code>,
          <code>resetWidgets</code>).
        </p>
        <p>
          On unmount the shell calls <code>resetSession()</code>. Don&apos;t mount two shells in the same page —
          the unmount of either nukes shared state.
        </p>
      </Notes>
    </ExportPage>
  )
}
