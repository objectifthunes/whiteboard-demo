'use client'

import {
  DashboardShell,
  Sidebar,
  SidebarBrand,
  TopBar,
  TopBarLink,
  Page,
  PageHeader,
  StatCard,
} from '@objectifthunes/whiteboard'
import { LayoutDashboard, ListMusic, Sparkles } from 'lucide-react'

const groups = [
  { label: 'Overview', items: [{ href: '/', name: 'Dashboard', icon: <LayoutDashboard size={14} /> }] },
  { label: 'Catalog', items: [{ href: '/tracks', name: 'Tracks', icon: <ListMusic size={14} /> }] },
]

export function Demo() {
  return (
    <div
      className="demo-dash-clamp"
      style={{ height: 420, overflow: 'hidden', border: '1px solid var(--wb-border)', borderRadius: 12 }}
    >
      <DashboardShell
        sidebar={
          <Sidebar
            brand={<SidebarBrand mark={<Sparkles size={18} />} eyebrow="Acme" name="Admin" meta="v1.0.0" />}
            groups={groups}
            activeHref="/"
          />
        }
        topbar={<TopBar crumb="acme / dashboard" actions={<TopBarLink>log out</TopBarLink>} />}
      >
        <Page>
          <PageHeader eyebrow="Overview" title="Dashboard" lede="Everything in one place." />
          <StatCard title="Tracks" pill="complete" pillTone="success" value="34 / 40" sub="6 drafts remaining" />
        </Page>
      </DashboardShell>
    </div>
  )
}
