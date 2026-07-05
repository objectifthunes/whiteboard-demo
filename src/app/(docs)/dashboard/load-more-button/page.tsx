import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/dashboard/load-more-button/')!

const CODE = `import { LoadMoreButton } from '@objectifthunes/whiteboard'

// nextCursor: string | null from your paginated API
<LoadMoreButton
  cursor={nextCursor}
  loading={isFetching}
  onClick={fetchNextPage}
/>`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          The whole point is the guard: when <code>cursor</code> is null/undefined or a load is in
          flight, it renders <em>nothing</em>. So the page drops it in unconditionally after the list
          and never writes <code>{'{nextCursor && !loading && ...}'}</code> — toggle the chip in the
          demo to see it vanish.
        </p>
        <p>
          Pair it with <code>ListSkeleton</code> for the first page and keep this button for pages two
          and up.
        </p>
      </Notes>
    </ExportPage>
  )
}
