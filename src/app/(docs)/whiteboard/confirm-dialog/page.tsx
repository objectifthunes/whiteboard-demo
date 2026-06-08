import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/whiteboard/confirm-dialog/')!

const CODE = `import { ConfirmDialog, Button } from '@objectifthunes/whiteboard'

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

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          Portaled into <code>document.body</code>. Closes on Escape, backdrop click, or the Cancel button.
        </p>
        <p>
          The loading state defaults to <code>{'`${confirmLabel}…`'}</code>. Override with{' '}
          <code>loadingLabel=&quot;…&quot;</code> when you need a different verb.
        </p>
      </Notes>
    </ExportPage>
  )
}
