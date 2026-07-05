'use client'

import { Page, PageHeader, PageBlock, Eyebrow, MutedText } from '@objectifthunes/whiteboard'
import { ListMusic } from 'lucide-react'

export function Demo() {
  return (
    <div className="demo-dash-clamp">
      <Page>
        <PageHeader eyebrow="Catalog" title="Tracks" lede="Every track in the library, drafts included." />
        <PageBlock title="Recent uploads">
          <MutedText size="sm">Blocks hold arbitrary content under an eyebrow heading.</MutedText>
        </PageBlock>
        <Eyebrow icon={<ListMusic size={12} />}>Standalone eyebrow with icon</Eyebrow>
      </Page>
    </div>
  )
}
