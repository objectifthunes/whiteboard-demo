import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/layout/page-card/')!

const CODE = `import { PageCard, Stack } from '@objectifthunes/whiteboard'

<PageCard>
  <Stack>
    <CardTitle>Title</CardTitle>
    <Button fullWidth>Action</Button>
  </Stack>
</PageCard>`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          A bordered surface with <code>max-width: 380px</code>. Drop inside <code>PageShell</code> for a
          centred card, or use stand-alone for any focused panel of content.
        </p>
      </Notes>
    </ExportPage>
  )
}
