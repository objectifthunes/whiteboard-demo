import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/cards/item-list/')!

const CODE = `import { ItemList, ItemCard } from '@objectifthunes/whiteboard'

<ItemList as="ul">
  <ItemCard as="li">…</ItemCard>
  <ItemCard as="li">…</ItemCard>
</ItemList>`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          A vertical grid container with the right gap for stacked ItemCards. Polymorphic via{' '}
          <code>as</code> — pass <code>&quot;ul&quot;</code> when children are <code>&lt;li&gt;</code>{' '}
          ItemCards.
        </p>
      </Notes>
    </ExportPage>
  )
}
