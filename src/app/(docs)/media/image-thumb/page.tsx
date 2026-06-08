import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/media/image-thumb/')!

const CODE = `import { ImageThumb } from '@objectifthunes/whiteboard'

<ImageThumb src={null} alt="No image" placeholder="No image" />
<ImageThumb src={url} alt="…" fit="contain" />
<ImageThumb src={url} alt="…" fit="cover" />`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          Aspect-ratio-locked thumbnail. Falls back to the <code>placeholder</code> when <code>src</code>{' '}
          is <code>null</code> <em>or</em> when the image fails to load (the <code>onImageError</code> callback fires too).
        </p>
        <p>
          <code>fit</code> picks <code>object-fit: contain</code> (default) or <code>cover</code>;{' '}
          <code>size</code> caps the max-width (<code>sm</code>, <code>md</code>, or <code>fluid</code>).
        </p>
      </Notes>
    </ExportPage>
  )
}
