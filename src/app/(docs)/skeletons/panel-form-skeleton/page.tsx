import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/skeletons/panel-form-skeleton/')!

const CODE = `import { PanelFormSkeleton } from '@objectifthunes/whiteboard'

{loading ? <PanelFormSkeleton inputs={3} showButton /> : <RealForm />}`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          N <code>InputSkeleton</code>s plus an optional <code>ButtonSkeleton</code> — for panel-body forms
          while data streams. Drop into any <code>FloatingPanel</code> body.
        </p>
      </Notes>
    </ExportPage>
  )
}
