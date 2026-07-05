'use client'

import { ContentCard, MutedText } from '@objectifthunes/whiteboard'

export function Demo() {
  return (
    <div className="demo-grid-2">
      <ContentCard title="Usage">
        <MutedText size="sm">1,204 renders this month, up 12% on May.</MutedText>
      </ContentCard>
      <ContentCard>
        <MutedText size="sm">No title — just the bordered surface.</MutedText>
      </ContentCard>
    </div>
  )
}
