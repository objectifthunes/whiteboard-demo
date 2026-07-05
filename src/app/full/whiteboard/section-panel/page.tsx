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

export default function Page() {
  const [mounted, setMounted] = useState(false)
  const [count, setCount] = useState(5)
  useEffect(() => { setMounted(true) }, [])
  if (!mounted) return null

  return (
    <WhiteboardShell>
      <SectionPanel title="Videos" defaultPosition={{ x: 0, y: 0 }} cols={3} cardW={220}>
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
        defaultPosition={{ x: sectionPanelWidth(3, 220) + 80, y: 0 }}
        width={220}
        onClick={() => setCount(c => c + 1)}
      />
    </WhiteboardShell>
  )
}
