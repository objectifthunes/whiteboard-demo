'use client'

import { AvatarBadge, Stack, VerticalToolbar } from '@objectifthunes/whiteboard'
import { LayoutDashboard, BookOpen, FolderOpen } from 'lucide-react'

export function VerticalToolbarDemo() {
  return (
    <div style={{ position: 'relative', height: 240, border: '1px solid var(--wb-border)', borderRadius: 'var(--wb-radius-lg)', overflow: 'hidden' }}>
      <VerticalToolbar
        position="static"
        bottom={<AvatarBadge>JD</AvatarBadge>}
      >
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

export function AvatarBadgeDemo() {
  return (
    <Stack>
      <div style={{ display: 'flex', gap: 8 }}>
        <AvatarBadge>JD</AvatarBadge>
        <AvatarBadge>SK</AvatarBadge>
        <AvatarBadge>AB</AvatarBadge>
      </div>
    </Stack>
  )
}
