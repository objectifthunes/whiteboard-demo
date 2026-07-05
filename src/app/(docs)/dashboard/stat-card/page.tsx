import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/dashboard/stat-card/')!

const CODE = `import { StatCard, FormGrid, ButtonLink } from '@objectifthunes/whiteboard'

<FormGrid cols={2}>
  <StatCard
    title="Tracks"
    pill="complete"
    pillTone="success"
    value="40 / 40"
    sub="All catalog tracks published"
    actions={<ButtonLink href="/tracks" variant="secondary">Browse</ButtonLink>}
  />
  <StatCard title="Covers" pill="3 missing" pillTone="warning" value="37 / 40">
    <MutedText size="xs">Missing: Dune, Tides, Aurora</MutedText>
  </StatCard>
</FormGrid>`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          Omit <code>pill</code> to hide the status pill entirely; <code>pillTone</code> matches
          Pill&apos;s tones (<code>success</code>, <code>warning</code>, <code>danger</code>,{' '}
          <code>default</code>). <code>children</code> is for extra muted lines, like the
          missing-items list; <code>actions</code> right-aligns a footer row.
        </p>
        <p>
          The intended pattern: tile a grid of these on the overview page, then repeat the relevant
          one at the top of each section page so the number follows you in.
        </p>
      </Notes>
    </ExportPage>
  )
}
