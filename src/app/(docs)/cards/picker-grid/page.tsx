import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/cards/picker-grid/')!

const CODE = `import { PickerGrid, PickerCard } from '@objectifthunes/whiteboard'

<PickerGrid minItemWidth={120}>
  {items.map(item => (
    <li key={item.id}>
      <PickerCard onClick={() => choose(item)}>
        <Thumb src={item.thumb} />
        <MutedText size="xs">{item.label}</MutedText>
      </PickerCard>
    </li>
  ))}
</PickerGrid>`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          A responsive auto-fill grid — <code>minItemWidth</code> controls how many columns fit at any
          viewport width (smaller value = more columns). Defaults to <code>120</code>.
        </p>
      </Notes>
    </ExportPage>
  )
}
