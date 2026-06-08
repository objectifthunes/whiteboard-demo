import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/layout/inline/')!

const CODE = `import { Inline } from '@objectifthunes/whiteboard'

<Inline>{children}</Inline>
<Inline justify="between">{a}{b}</Inline>
<Inline justify="end">{trailing}</Inline>`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          A horizontal row. <code>justify=&quot;between&quot;</code> for split-alignment headers;{' '}
          <code>&quot;end&quot;</code> to push trailing items right.
        </p>
      </Notes>
    </ExportPage>
  )
}
