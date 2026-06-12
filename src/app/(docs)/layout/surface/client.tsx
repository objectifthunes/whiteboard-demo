'use client'

import { MutedText, SectionTitle, Surface } from '@objectifthunes/whiteboard'

export function Demo() {
  return (
    <div style={{ position: 'relative', height: 200, borderRadius: 10, background: 'var(--wb-bg)', border: '1px solid var(--wb-border)' }}>
      <Surface padding="sm" style={{ position: 'absolute', left: 14, top: 14, width: 220 }}>
        <SectionTitle>Selection</SectionTitle>
        <MutedText size="xs">3 lines selected — esc clears</MutedText>
      </Surface>
      <Surface padding="sm" style={{ position: 'absolute', right: 14, bottom: 14 }}>
        <MutedText size="xs">a quiet legend</MutedText>
      </Surface>
    </div>
  )
}
