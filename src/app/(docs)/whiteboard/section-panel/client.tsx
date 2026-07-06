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
  const [count, setCount] = useState(5)
  const [loading, setLoading] = useState(true)
  useEffect(() => { setMounted(true) }, [])
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(t)
  }, [])
  return (
    <div style={{ height: 460 }}>
      {mounted ? (
        <WhiteboardShell contained>
          <SectionPanel title="Videos" defaultPosition={{ x: 0, y: 0 }} cols={3} cardW={200} loading={loading} loadingCards={6}>
            {Array.from({ length: count }, (_, i) => (
              <ItemCard key={i}>
                <Stack size="sm">
                  <CardTitle>Video {i + 1}</CardTitle>
                  <MutedText>A static card — drag the board, not me.</MutedText>
                </Stack>
              </ItemCard>
            ))}
          </SectionPanel>
          <CreatePanel
            title="New video"
            label="New video"
            defaultPosition={{ x: sectionPanelWidth(3, 200) + 20, y: 0 }}
            width={200}
            onClick={() => setCount(c => c + 1)}
          />
        </WhiteboardShell>
      ) : null}
    </div>
  )
}
