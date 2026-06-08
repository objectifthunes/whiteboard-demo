import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/cards/choice-card/')!

const CODE = `import { ChoiceCard } from '@objectifthunes/whiteboard'

<ChoiceCard active={value === 'a'} onClick={() => setValue('a')}>
  <span className="choice-card__label">Option A</span>
</ChoiceCard>`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          A radio-style card with an <code>active</code> data attribute that drives the selected styling.
          Internal to <code>ChoiceGroup</code> — expose this directly when you need a custom layout the
          group doesn&apos;t support.
        </p>
      </Notes>
    </ExportPage>
  )
}
