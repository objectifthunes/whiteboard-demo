import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/dashboard/page/')!

const CODE = `import { Page, PageHeader, PageBlock, Eyebrow } from '@objectifthunes/whiteboard'

<Page>
  <PageHeader eyebrow="Catalog" title="Tracks" lede="Every track in the library." />
  <PageBlock title="Recent uploads">
    <ItemList>...</ItemList>
  </PageBlock>
</Page>`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          <code>Page</code> is a vertical grid capped at <code>--wb-dash-content-max</code> with 120px
          of bottom padding — deliberate room so a <code>StickyBar</code> never hides the last rows.
          The preview clamps that padding away.
        </p>
        <p>
          <code>PageHeader</code> renders eyebrow, <code>&lt;h1&gt;</code>, optional lede, and a
          hairline rule. <code>PageBlock</code> is the section unit below it; <code>Eyebrow</code>{' '}
          (small uppercase mono, optional icon) is exported on its own for custom markers.
        </p>
      </Notes>
    </ExportPage>
  )
}
