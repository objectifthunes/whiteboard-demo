import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/feedback/alert/')!

const CODE = `import { Alert } from '@objectifthunes/whiteboard'

<Alert tone="info">Heads up — info tone.</Alert>
<Alert tone="success">Saved successfully.</Alert>
<Alert tone="error">Something went wrong.</Alert>
<Alert tone="muted">A quiet hint.</Alert>`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          Emits the <code>wb-alert</code> class family. Each tone has a light + dark colour variant.
        </p>
        <p>Defaults to <code>tone=&quot;info&quot;</code>. Use <code>&quot;muted&quot;</code> for soft inline hints.</p>
      </Notes>
    </ExportPage>
  )
}
