import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/dashboard/toggle-chip/')!

const CODE = `import { ToggleChip, TagRow } from '@objectifthunes/whiteboard'

<TagRow>
  {tags.map(tag => (
    <ToggleChip key={tag} active={selected.has(tag)} onClick={() => toggle(tag)}>
      {tag}
    </ToggleChip>
  ))}
</TagRow>`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          Built on <code>Chip</code>, so it renders as a real <code>&lt;button&gt;</code> with{' '}
          <code>role=&quot;button&quot;</code> and <code>aria-pressed</code> wired to{' '}
          <code>active</code>. The active state is filled rather than outlined on purpose — a
          border-only toggle is too easy to miss in a dense filter row.
        </p>
        <p>
          For a single exclusive choice reach for <code>FilterTabs</code> instead; ToggleChips are for
          multi-select filters.
        </p>
      </Notes>
    </ExportPage>
  )
}
