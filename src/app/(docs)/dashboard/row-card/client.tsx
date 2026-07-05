'use client'

import { RowCard, RowSkeleton, ItemList, Pill, IconButton } from '@objectifthunes/whiteboard'
import { Pencil } from 'lucide-react'

export function Demo() {
  return (
    <ItemList>
      <RowCard
        title="Midnight Tide"
        detail="Nocturne · 3:42"
        actions={
          <>
            <Pill tone="success">live</Pill>
            <IconButton icon={<Pencil size={14} />} label="Edit" />
          </>
        }
      />
      <RowCard title="Aurora (draft)" actions={<Pill>draft</Pill>} />
      <RowSkeleton withDetail actionCount={2} />
    </ItemList>
  )
}
