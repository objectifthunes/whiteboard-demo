'use client'

import { AvatarBadge, VerticalToolbar } from '@objectifthunes/whiteboard'
import { BookOpen, FolderOpen, LayoutDashboard } from 'lucide-react'

export function Demo() {
  return (
    <div style={{ position: 'relative', height: 240, border: '1px solid var(--wb-border)', borderRadius: 10, overflow: 'hidden', background: 'var(--wb-bg)' }}>
      <VerticalToolbar position="static" bottom={<AvatarBadge>JD</AvatarBadge>}>
        <button type="button" className="wb-btn wb-btn--secondary wb-btn--icon-only" title="Dashboard" aria-label="Dashboard">
          <LayoutDashboard size={14} />
        </button>
        <button type="button" className="wb-btn wb-btn--secondary wb-btn--icon-only" title="Library" aria-label="Library">
          <BookOpen size={14} />
        </button>
        <button type="button" className="wb-btn wb-btn--secondary wb-btn--icon-only" title="Files" aria-label="Files">
          <FolderOpen size={14} />
        </button>
      </VerticalToolbar>
    </div>
  )
}
