import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/layout/page-shell/')!

const CODE = `import { PageShell, PageCard, Stack } from '@objectifthunes/whiteboard'

<PageShell>
  <PageCard>
    <Stack>
      <CardTitle>Sign in</CardTitle>
      <Field label="Email" htmlFor="email"><Input id="email" type="email" /></Field>
      <Button fullWidth>Continue</Button>
    </Stack>
  </PageCard>
</PageShell>`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          A full-viewport centred <code>&lt;main&gt;</code>. Use for non-canvas surfaces — auth pages, single
          settings cards, anything where a WhiteboardShell would be overkill.
        </p>
      </Notes>
    </ExportPage>
  )
}
