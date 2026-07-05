'use client'

import { IconButton } from '@objectifthunes/whiteboard'
import { Download, Pencil, Trash2 } from 'lucide-react'

export function Demo() {
  return (
    <div className="demo-row">
      <IconButton icon={<Pencil size={14} />} label="Edit" />
      <IconButton icon={<Download size={14} />} label="Download" />
      <IconButton icon={<Trash2 size={14} />} label="Delete" variant="danger" />
      <IconButton icon={<Download size={14} />} label="Downloading" loading />
      <IconButton icon={<Pencil size={14} />} label="Edit (disabled)" disabled />
    </div>
  )
}
