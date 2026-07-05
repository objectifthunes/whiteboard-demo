import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/dashboard/row-card/')!

const CODE = `import { RowCard, ListSkeleton, ItemList, Pill } from '@objectifthunes/whiteboard'

if (isLoading) return <ListSkeleton rows={6} actionCount={2} />

<ItemList>
  {tracks.map(t => (
    <RowCard
      key={t.id}
      title={t.title}
      detail={t.artist}
      actions={<><Pill tone="success">live</Pill><IconButton icon={<Pencil size={14} />} label="Edit" /></>}
    />
  ))}
</ItemList>`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          <code>RowCard</code> and <code>RowSkeleton</code> share hard-coded geometry constants (row
          min-height, title and detail line heights), so swapping <code>ListSkeleton</code> for the
          loaded list causes zero layout shift. Match <code>withDetail</code> and{' '}
          <code>actionCount</code> to what the real rows render — the demo ends with a skeleton row so
          you can see the alignment.
        </p>
        <p>
          <code>actions</code> are pinned right and never wrap under the text; long titles truncate
          via <code>min-width: 0</code> instead of pushing them out.
        </p>
      </Notes>
    </ExportPage>
  )
}
