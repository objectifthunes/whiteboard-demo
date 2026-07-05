import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/dashboard/search-bar/')!

const CODE = `import { SearchBar } from '@objectifthunes/whiteboard'

const [query, setQuery] = useState('')

<SearchBar value={query} onChange={setQuery} placeholder="name contains..." />`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          <code>onChange</code> hands you the string, not the event. The bar always spans the full
          width of its container by design — put <code>FilterTabs</code> and <code>ToggleChip</code>{' '}
          rows on their own line below it, never inline beside it.
        </p>
      </Notes>
    </ExportPage>
  )
}
