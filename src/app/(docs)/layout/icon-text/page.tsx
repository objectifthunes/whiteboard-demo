import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/layout/icon-text/')!

const CODE = `import { IconText } from '@objectifthunes/whiteboard'

<IconText icon={<Star size={14} />}>Starred item</IconText>`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          Inline-flex row of icon + text with a consistent gap. Polymorphic via <code>as</code>.
        </p>
      </Notes>
    </ExportPage>
  )
}
