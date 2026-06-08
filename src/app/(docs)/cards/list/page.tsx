import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/cards/list/')!

const CODE = `import { List } from '@objectifthunes/whiteboard'

<List>
  <li>One</li>
  <li>Two</li>
</List>`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          A reset <code>&lt;ul&gt;</code> — no bullets, no padding, no margin. Pass <code>reset=&#123;false&#125;</code>{' '}
          to keep the native bullets.
        </p>
      </Notes>
    </ExportPage>
  )
}
