import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/layout/split-layout/')!

const CODE = `import { SplitLayout } from '@objectifthunes/whiteboard'

// Fixed media column + flexible content column.
<SplitLayout variant="media-content">
  <Thumb />
  <Stack size="sm">
    <CardTitle>{title}</CardTitle>
    <MutedText>{subtitle}</MutedText>
  </Stack>
</SplitLayout>

// Auto media + flexible content + auto actions.
<SplitLayout variant="media-content-actions">
  <AvatarBadge>JD</AvatarBadge>
  <Stack size="sm">
    <CardTitle>{name}</CardTitle>
    <MutedText>{email}</MutedText>
  </Stack>
  <Button variant="secondary">Edit</Button>
</SplitLayout>

// Small-screen fallback.
<SplitLayout variant="single">{children}</SplitLayout>`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          Three shape-named variants. <code>media-content</code> is a fixed-width media + flexible content;
          <code>media-content-actions</code> adds an auto-sized actions column on the right;{' '}
          <code>single</code> collapses to one column. On viewports below 768px,{' '}
          <code>media-content</code> and <code>media-content-actions</code> drop to one column automatically.
        </p>
      </Notes>
    </ExportPage>
  )
}
