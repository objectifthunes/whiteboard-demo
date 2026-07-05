import { ExportPage } from '@/components/ExportPage'
import { Preview, FullScreenPreview } from '@/components/Preview'
import { Source } from '@/components/Source'
import { Notes } from '@/components/Notes'
import { findExport } from '@/components/exports'
import { Demo } from './client'

const e = findExport('/dashboard/sidebar/')!

const CODE = `import { Sidebar, SidebarBrand, activeSidebarHref } from '@objectifthunes/whiteboard'

const groups = [
  { label: 'Catalog', items: [
    { href: '/tracks', name: 'Tracks', icon: <ListMusic size={14} /> },
    { href: '/covers', name: 'Covers', badge: 'PAID' },
  ]},
]

<Sidebar
  brand={<SidebarBrand mark={<Logo />} eyebrow="Acme" name="Admin" meta="v1.0.0" />}
  groups={groups}
  activeHref={activeSidebarHref(groups, pathname)}
  renderLink={(item, props) => <Link {...props} href={item.href} />}
/>`

export default async function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <FullScreenPreview
        href="/full/dashboard/shell/"
        illustration={
          <span style={{ fontFamily: 'var(--docs-mono)', fontSize: 12, letterSpacing: '0.08em' }}>
            GROUPED NAV · ACTIVE STATE · BADGES · LIVE IN THE FULL DEMO
          </span>
        }
      />
      <Preview><Demo /></Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          By default items render as plain <code>&lt;a&gt;</code> tags. For client-side routing pass{' '}
          <code>renderLink</code> and spread <code>props</code> onto your router&apos;s Link:{' '}
          <code>{'(item, props) => <Link {...props} href={item.href} />'}</code> — <code>props</code>{' '}
          carries the computed <code>className</code> (including <code>is-active</code>) and the
          rendered children.
        </p>
        <p>
          <code>activeSidebarHref(groups, pathname)</code> picks the longest matching href, so{' '}
          <code>/covers/new</code> activates &quot;New cover&quot; and not also &quot;Covers&quot;.
          Item icons read best at 14px; <code>badge</code> takes any node (&quot;PAID&quot;,
          &quot;BETA&quot;, a count).
        </p>
      </Notes>
    </ExportPage>
  )
}
