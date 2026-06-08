import Link from 'next/link'
import { CodeBlock } from '@/components/CodeBlock'

const INSTALL = `pnpm add @objectifthunes/whiteboard zustand`

const QUICK_START = `'use client'

import '@objectifthunes/whiteboard/style.css'
import { WhiteboardShell, FloatingPanel } from '@objectifthunes/whiteboard'

export default function App() {
  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <WhiteboardShell>
        <FloatingPanel title="Hello" defaultPosition={{ x: 100, y: 100 }} focusable>
          Drag me · scroll to zoom · double-click to focus
        </FloatingPanel>
      </WhiteboardShell>
    </div>
  )
}`

export default async function HomePage() {
  return (
    <div className="landing">
      <div className="landing__inner">
        <span className="landing__eyebrow">@objectifthunes/whiteboard</span>
        <h1 className="landing__title">A pan/zoom canvas + 40+ themed primitives, in one package.</h1>
        <p className="landing__lead">
          Floating panels, minimap, snap-to-grid, zoom controls — and the buttons, forms, alerts and skeletons
          you need to fill them. Tiny, themable, and built for studio-style UIs.
        </p>

        <div className="landing__actions">
          <Link href="/components/canvas" className="wb-btn">Browse components</Link>
          <a href="https://www.npmjs.com/package/@objectifthunes/whiteboard" target="_blank" rel="noopener noreferrer" className="wb-btn wb-btn--secondary">View on npm</a>
        </div>

        <CodeBlock code={INSTALL} lang="bash" />
        <CodeBlock code={QUICK_START} lang="tsx" />
      </div>
    </div>
  )
}
