import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/dashboard/list-header-row/')!

const CODE = `import { ListHeaderRow, ButtonLink } from '@objectifthunes/whiteboard'

<ListHeaderRow
  title={\`Tracks · \${tracks.length}\`}
  actions={<ButtonLink href="/tracks/new">+ New</ButtonLink>}
/>
<ItemList>...</ItemList>`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          <code>title</code> renders as an <code>Eyebrow</code>, so a live count baked into the string
          (&quot;Tracks · 12&quot;) inherits the uppercase mono treatment. Multiple actions can share
          the right slot — they land in an <code>Inline</code> row.
        </p>
      </Notes>
    </ExportPage>
  )
}
