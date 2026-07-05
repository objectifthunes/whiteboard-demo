import { ExportPage } from '@/components/ExportPage'
import { Preview, FullScreenPreview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/dashboard/top-bar/')!

const CODE = `import { TopBar, TopBarLink, ThemeToggle } from '@objectifthunes/whiteboard'

<TopBar
  crumb="acme / tracks / edit"
  actions={
    <>
      <TopBarLink onClick={openDocs}>docs</TopBarLink>
      <TopBarLink onClick={logOut}>log out</TopBarLink>
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
    </>
  }
/>`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <FullScreenPreview
        href="/full/dashboard/shell/"
        illustration={
          <span style={{ fontFamily: 'var(--docs-mono)', fontSize: 12, letterSpacing: '0.08em' }}>
            STICKY CRUMB BAR · QUIET ACTIONS · LIVE IN THE FULL DEMO
          </span>
        }
      />
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          In a real <code>DashboardShell</code> the bar is <code>position: sticky</code> with a blurred
          backdrop, so content scrolls under it. The preview clamps it to static.
        </p>
        <p>
          <code>TopBarLink</code> is a <code>&lt;button&gt;</code>, not an anchor — it takes native
          button props, so navigation goes through <code>onClick</code> + your router. The crumb slot
          is mono text; keep it short and lowercase.
        </p>
      </Notes>
    </ExportPage>
  )
}
