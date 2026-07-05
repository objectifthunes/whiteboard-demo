import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/dashboard/filter-tabs/')!

const CODE = `import { FilterTabs } from '@objectifthunes/whiteboard'

const [status, setStatus] = useState<'all' | 'draft' | 'published'>('all')

<FilterTabs
  options={[
    { value: 'all', label: 'All' },
    { value: 'draft', label: 'Drafts' },
    { value: 'published', label: 'Published' },
  ]}
  value={status}
  onChange={setStatus}
/>`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          Generic over the value type: <code>FilterTabs&lt;T extends string&gt;</code>, so{' '}
          <code>onChange</code> hands back your union, not a bare string.
        </p>
        <p>
          There is no custom tab CSS — the active option is a primary <code>Button</code>, the rest
          secondary. One obvious selected state, and any Button styling you theme applies here too.
        </p>
      </Notes>
    </ExportPage>
  )
}
