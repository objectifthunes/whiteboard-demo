import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/dashboard/button-link/')!

const CODE = `import { ButtonLink } from '@objectifthunes/whiteboard'
import Link from 'next/link'

<ButtonLink as={Link} href="/tracks/new">+ New track</ButtonLink>
<ButtonLink href="/docs" variant="secondary">Browse</ButtonLink>
<ButtonLink href="/danger" variant="danger">Delete all</ButtonLink>`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          Pass <code>as={'{Link}'}</code> to swap the anchor for your router&apos;s Link — every other
          prop is a native anchor prop and spreads through. It stays an anchor semantically: no{' '}
          <code>disabled</code>, no <code>loading</code>. If the action can fail or take time, it
          should be a <code>Button</code>, not navigation.
        </p>
      </Notes>
    </ExportPage>
  )
}
