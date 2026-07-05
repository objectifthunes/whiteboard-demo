import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/dashboard/sticky-bar/')!

const CODE = `import { StickyBar, Inline, Button, MutedText } from '@objectifthunes/whiteboard'

{selected.length > 0 && (
  <StickyBar>
    <Inline justify="between">
      <MutedText size="sm">{selected.length} tracks selected</MutedText>
      <Inline>
        <Button variant="secondary" onClick={clear}>Clear</Button>
        <Button onClick={publishAll}>Publish selected</Button>
      </Inline>
    </Inline>
  </StickyBar>
)}`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          Despite the name it is <code>position: fixed</code>, not sticky, on purpose — sticky cannot
          escape a small parent container. It pins to the viewport bottom, offset past the sidebar via{' '}
          <code>--wb-dash-sidebar-w</code>, and goes full width under 880px. The preview above
          overrides it to static so you can see the content in place.
        </p>
        <p>
          <code>Page</code> already reserves 120px of bottom padding so the bar never hides the last
          rows — if you host it outside a <code>Page</code>, add that padding yourself.
        </p>
      </Notes>
    </ExportPage>
  )
}
