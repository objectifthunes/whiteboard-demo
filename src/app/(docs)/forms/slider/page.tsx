import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/forms/slider/')!

const CODE = `import { Slider } from '@objectifthunes/whiteboard'

<Slider
  label="Ink threshold"
  display={\`\${threshold} (auto)\`}
  min={0}
  max={255}
  value={threshold}
  onChange={setThreshold}
/>`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          The settings-panel pattern: uppercase label on the left, tabular-nums readout on the right,
          range underneath. <code>display</code> overrides the readout (units, annotations);
          <code>onChange</code> receives a number.
        </p>
      </Notes>
    </ExportPage>
  )
}
