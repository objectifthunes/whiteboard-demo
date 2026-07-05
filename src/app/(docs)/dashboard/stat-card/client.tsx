'use client'

import { StatCard, FormGrid, MutedText, ButtonLink } from '@objectifthunes/whiteboard'

export function Demo() {
  return (
    <FormGrid cols={2}>
      <StatCard
        title="Tracks"
        pill="complete"
        pillTone="success"
        value="40 / 40"
        sub="All catalog tracks published"
        actions={<ButtonLink href="#" variant="secondary">Browse</ButtonLink>}
      />
      <StatCard title="Covers" pill="3 missing" pillTone="warning" value="37 / 40" sub="Last upload 2 days ago">
        <MutedText size="xs">Missing: Dune, Tides, Aurora</MutedText>
      </StatCard>
    </FormGrid>
  )
}
