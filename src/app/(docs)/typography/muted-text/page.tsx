import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/typography/muted-text/')!

const CODE = `import { MutedText } from '@objectifthunes/whiteboard'

<MutedText size="md">Medium</MutedText>
<MutedText>Default (sm)</MutedText>
<MutedText size="xs">Extra small</MutedText>`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          Three sizes — <code>xs</code>, <code>sm</code> (default), <code>md</code>. Always picks{' '}
          <code>--wb-text-muted</code> for colour.
        </p>
      </Notes>
    </ExportPage>
  )
}
