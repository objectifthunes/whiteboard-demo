import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/cards/choice-group/')!

const CODE = `import { ChoiceGroup } from '@objectifthunes/whiteboard'

const [value, setValue] = useState<'a' | 'b' | 'c'>('a')

<ChoiceGroup
  value={value}
  onChange={setValue}
  options={[
    { value: 'a', label: 'First',  description: 'Recommended for most teams.' },
    { value: 'b', label: 'Second', description: 'For workspaces with custom roles.' },
    { value: 'c', label: 'Third',  description: 'For enterprise plans.' },
  ]}
/>`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          A typed, controlled list of radio-style cards. Each option needs <code>value</code> +{' '}
          <code>label</code>; <code>description</code> and <code>disabled</code> are optional.
        </p>
        <p>
          <code>{`ChoiceGroup<T extends string>`}</code> — the <code>value</code> + <code>onChange</code>{' '}
          types are inferred from the options array.
        </p>
      </Notes>
    </ExportPage>
  )
}
