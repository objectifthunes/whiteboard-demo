'use client'

import { useEffect, useState } from 'react'
import {
  WhiteboardShell,
  SectionPanel,
  sectionPanelWidth,
  CreatePanel,
  ItemCard,
  Stack,
  CardTitle,
  MutedText,
} from '@objectifthunes/whiteboard'

export function Demo() {
  const [mounted, setMounted] = useState(false)
  const [count, setCount] = useState(2)
  useEffect(() => { setMounted(true) }, [])
  return (
    <div style={{ height: 460 }}>
      {mounted ? (
        <WhiteboardShell contained>
          <CreatePanel
            title="New channel"
            label="Create channel"
            defaultPosition={{ x: 0, y: 0 }}
            width={220}
            onClick={() => setCount(c => c + 1)}
          />
          <SectionPanel title="Channels" defaultPosition={{ x: 240, y: 0 }} cols={2} cardW={200}>
            {Array.from({ length: count }, (_, i) => (
              <ItemCard key={i}>
                <Stack size="sm">
                  <CardTitle>Channel {i + 1}</CardTitle>
                  <MutedText>A regular resource card.</MutedText>
                </Stack>
              </ItemCard>
            ))}
          </SectionPanel>
        </WhiteboardShell>
      ) : null}
    </div>
  )
}
