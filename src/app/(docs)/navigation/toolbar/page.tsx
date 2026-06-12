import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/navigation/toolbar/')!

const CODE = `import { Toolbar, Button, Chip, Divider, ThemeToggle } from '@objectifthunes/whiteboard'

<Toolbar end={<ThemeToggle theme={theme} onToggle={toggle} />}>
  <Button variant="secondary" iconOnly title="Projects">⌂</Button>
  <strong>Magic Floor Plan</strong>
  <Chip>maison-cedre.pdf</Chip>
  <Divider orientation="vertical" />
  <Button variant="secondary">Import</Button>
  <Button variant="primary">✦ AI</Button>
</Toolbar>

// position="top" (default, fixed + centered), "bottom", or "static" `

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          The horizontal sibling of <code>VerticalToolbar</code> — same surface, padding and rhythm.
          Children flow in a row; <code>end</code> pins trailing actions after a wider gap. Use{' '}
          <code>position=&quot;static&quot;</code> to inline it (as in this preview).
        </p>
      </Notes>
    </ExportPage>
  )
}
