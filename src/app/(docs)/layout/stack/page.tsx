import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/layout/stack/')!

const CODE = `import { Stack } from '@objectifthunes/whiteboard'

<Stack>           {/* default md gap */}
  <First />
  <Second />
</Stack>

<Stack size="sm">
  …
</Stack>`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          A vertical CSS grid with consistent gap. Use Stack everywhere you would otherwise reach for{' '}
          <code>margin-bottom</code> — Stack&apos;s rhythm doesn&apos;t leak outside its bounds.
        </p>
        <p>Polymorphic via <code>as</code>; defaults to <code>&quot;div&quot;</code>.</p>
      </Notes>
    </ExportPage>
  )
}
