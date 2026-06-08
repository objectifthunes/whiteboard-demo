import { ExportPage } from '@/components/ExportPage'
import { Preview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/buttons/theme-toggle/')!

const CODE = `import { ThemeToggle } from '@objectifthunes/whiteboard'

const [theme, setTheme] = useState<'light' | 'dark'>('light')
useEffect(() => { document.documentElement.dataset.theme = theme }, [theme])

<ThemeToggle
  theme={theme}
  onToggle={() => setTheme(t => t === 'light' ? 'dark' : 'light')}
/>`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          Controlled. The component owns no DOM state — <em>you</em> own the <code>data-theme</code>{' '}
          attribute. Almost always set it on <code>&lt;html&gt;</code> so descendant{' '}
          <code>[data-theme=&quot;dark&quot;]</code> selectors apply.
        </p>
        <p>
          Override the icons via <code>lightIcon</code> / <code>darkIcon</code> — useful when your design
          system has bespoke moon/sun glyphs.
        </p>
      </Notes>
    </ExportPage>
  )
}
