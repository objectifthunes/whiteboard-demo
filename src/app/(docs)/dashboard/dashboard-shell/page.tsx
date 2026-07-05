import { ExportPage } from '@/components/ExportPage'
import { Preview, FullScreenPreview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/dashboard/dashboard-shell/')!

const CODE = `import '@objectifthunes/whiteboard/style.css'
import { DashboardShell, Sidebar, TopBar, Page } from '@objectifthunes/whiteboard'

export default function AdminLayout({ children }) {
  return (
    <DashboardShell
      sidebar={<Sidebar brand={brand} groups={groups} activeHref={active} />}
      topbar={<TopBar crumb="acme / admin" actions={<TopBarLink>log out</TopBarLink>} />}
    >
      <Page>{children}</Page>
    </DashboardShell>
  )
}`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <FullScreenPreview
        href="/full/dashboard/shell/"
        illustration={
          <span style={{ fontFamily: 'var(--docs-mono)', fontSize: 12, letterSpacing: '0.08em' }}>
            SIDEBAR · TOPBAR · STAT CARDS · LIST · STICKY BATCH BAR
          </span>
        }
      />
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          <code>DashboardShell</code> is a <code>min-height: 100vh</code> two-column grid — mount it
          once as your admin layout, not per page. The preview above is a miniature: a docs-only clamp
          class overrides the viewport-scale rules (sticky sidebar, 100vh columns) to fit the box.
        </p>
        <p>
          <code>topbar</code> is optional; <code>children</code> land in a centred, padded content
          column (<code>--wb-dash-content-max</code>). Under 880px the grid collapses to a single
          column and the sidebar becomes static.
        </p>
      </Notes>
    </ExportPage>
  )
}
