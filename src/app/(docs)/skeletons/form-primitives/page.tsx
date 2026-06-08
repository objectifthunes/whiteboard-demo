import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/skeletons/form-primitives/')!

const CODE = `import {
  InputSkeleton, TextareaSkeleton, SelectSkeleton,
  ButtonSkeleton, IconButtonSkeleton,
} from '@objectifthunes/whiteboard'

<InputSkeleton />
<TextareaSkeleton />
<SelectSkeleton />
<ButtonSkeleton />
<IconButtonSkeleton />`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          One placeholder per form primitive — each pre-sized to the real component&apos;s height so the
          layout doesn&apos;t jump on swap.
        </p>
      </Notes>
    </ExportPage>
  )
}
