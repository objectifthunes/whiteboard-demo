import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/cards/item-card/')!

const CODE = `import { ItemCard, Stack } from '@objectifthunes/whiteboard'

<ItemCard>
  <Stack size="sm">
    <CardTitle>One item</CardTitle>
    <MutedText>Description.</MutedText>
  </Stack>
</ItemCard>`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          A bordered surface with soft padding. Polymorphic via <code>as</code> —{' '}
          <code>as=&quot;li&quot;</code> for use inside <code>ItemList</code>.
        </p>
      </Notes>
    </ExportPage>
  )
}
