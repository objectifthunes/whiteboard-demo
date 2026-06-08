import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/forms/coord-input/')!

const CODE = `import { CoordInput } from '@objectifthunes/whiteboard'

<CoordInput axis="x" value={pos.x} onChange={…} />
<CoordInput axis="scale" value={pos.scale} onChange={…} />`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          A tiny <code>&lt;label&gt;</code> + numeric <code>&lt;input&gt;</code> wrapped together.{' '}
          <code>step=&quot;0.01&quot;</code> by default — perfect for normalized 3D coordinates.
        </p>
        <p>The <code>axis</code> prop is just the visible label; it isn&apos;t parsed.</p>
      </Notes>
    </ExportPage>
  )
}
