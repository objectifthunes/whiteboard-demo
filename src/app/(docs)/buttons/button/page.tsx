import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { LoadingDemo, ModifiersDemo, VariantsDemo } from './client'

const e = findExport('/buttons/button/')!

const VARIANTS = `<Button>Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="danger">Delete</Button>
<Button disabled>Disabled</Button>`

const LOADING = `<Button loading loadingText="Saving…">Save</Button>`

const MODIFIERS = `<Button fullWidth>Full width</Button>
<Button iconOnly aria-label="Star">★</Button>`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><VariantsDemo /></Preview>
      <Source code={VARIANTS} />

      <Preview><LoadingDemo /></Preview>
      <Source code={LOADING} />

      <Preview><ModifiersDemo /></Preview>
      <Source code={MODIFIERS} />

      <Notes>
        <p>
          Emits the <code>wb-btn</code> class family. Defaults to <code>type=&quot;button&quot;</code> so it
          never accidentally submits a form.
        </p>
        <p>
          <code>loading</code> auto-disables the button, prefixes a spinner, and swaps the label for{' '}
          <code>loadingText</code> when provided.
        </p>
      </Notes>
    </ExportPage>
  )
}
