import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/cards/picker-card/')!

const CODE = `import { PickerCard } from '@objectifthunes/whiteboard'

<PickerCard onClick={() => choose(item)}>
  <Thumb />
  <MutedText size="xs">{item.label}</MutedText>
</PickerCard>`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          Defaults to <code>&lt;button&gt;</code> (so it gets keyboard focus + click behaviour for free).
          Pass <code>as=&quot;div&quot;</code> for non-interactive skeleton states.
        </p>
      </Notes>
    </ExportPage>
  )
}
