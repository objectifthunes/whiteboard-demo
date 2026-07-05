'use client'

import { StickyBar, Inline, Button, MutedText } from '@objectifthunes/whiteboard'

export function Demo() {
  return (
    <div className="demo-dash-clamp" style={{ border: '1px solid var(--wb-border)', borderRadius: 12, overflow: 'hidden' }}>
      <StickyBar>
        <Inline justify="between">
          <MutedText size="sm">3 tracks selected</MutedText>
          <Inline>
            <Button variant="secondary">Clear</Button>
            <Button>Publish selected</Button>
          </Inline>
        </Inline>
      </StickyBar>
    </div>
  )
}
