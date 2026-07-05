import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/dashboard/note-bar/')!

const CODE = `import { NoteBar } from '@objectifthunes/whiteboard'

// note: { tone, text } | null, from your store
<NoteBar tone={note?.tone} onDismiss={clearNote}>
  {note?.text}
</NoteBar>`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          Mount it <em>once</em> in the shell and feed it from your store — it renders nothing when{' '}
          <code>children</code> is empty, so there is no conditional at the call site. Clear the note
          on navigation: a stale &quot;Created X&quot; line following the user to the next page reads
          as a bug.
        </p>
        <p>
          Tones are Alert&apos;s: <code>info</code>, <code>success</code>, <code>error</code>,{' '}
          <code>muted</code>.
        </p>
      </Notes>
    </ExportPage>
  )
}
