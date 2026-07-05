'use client'

import { Sidebar, SidebarBrand } from '@objectifthunes/whiteboard'
import { FileImage, LayoutDashboard, ListMusic, Sparkles } from 'lucide-react'

const groups = [
  {
    label: 'Overview',
    items: [{ href: '/', name: 'Dashboard', icon: <LayoutDashboard size={14} /> }],
  },
  {
    label: 'Catalog',
    items: [
      { href: '/tracks', name: 'Tracks', icon: <ListMusic size={14} /> },
      { href: '/covers', name: 'Covers', icon: <FileImage size={14} />, badge: 'PAID' },
    ],
  },
]

export function Demo() {
  return (
    <div
      className="demo-dash-clamp"
      style={{ height: 360, width: 240, overflow: 'hidden', border: '1px solid var(--wb-border)', borderRadius: 12 }}
    >
      <Sidebar
        brand={<SidebarBrand mark={<Sparkles size={18} />} eyebrow="Acme" name="Admin" meta="v1.0.0" />}
        groups={groups}
        activeHref="/tracks"
      />
    </div>
  )
}
