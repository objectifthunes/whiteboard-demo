'use client'

import { ListHeaderRow, ItemList, RowCard, ButtonLink, Pill } from '@objectifthunes/whiteboard'

export function Demo() {
  return (
    <div className="demo-col">
      <ListHeaderRow title="Tracks · 2" actions={<ButtonLink href="#">+ New</ButtonLink>} />
      <ItemList>
        <RowCard title="Midnight Tide" detail="Nocturne · 3:42" actions={<Pill tone="success">live</Pill>} />
        <RowCard title="Aurora" detail="Nocturne · 4:05" actions={<Pill>draft</Pill>} />
      </ItemList>
    </div>
  )
}
