import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/layout/divider/')!

const CODE = `import { Divider } from '@objectifthunes/whiteboard'

<Stack>
  <p>Above</p>
  <Divider />
  <p>Below</p>
</Stack>

<Toolbar>
  <Button>A</Button>
  <Divider orientation="vertical" />
  <Button>B</Button>
</Toolbar>`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          A 1px hairline in <code>--wb-border</code>. The vertical variant stretches to its flex row
          and is the intended separator inside <code>Toolbar</code> / <code>Inline</code>.
        </p>
      </Notes>
    </ExportPage>
  )
}
