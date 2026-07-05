'use client'

import { useEffect, useState } from 'react'
import {
  WhiteboardShell,
  FloatingPanel,
  CreatePanel,
  ItemCard,
  Stack,
  CardTitle,
  MutedText,
} from '@objectifthunes/whiteboard'

export default function Page() {
  const [mounted, setMounted] = useState(false)
  const [count, setCount] = useState(2)
  useEffect(() => { setMounted(true) }, [])
  if (!mounted) return null

  return (
    <WhiteboardShell>
      <FloatingPanel title="Channels" defaultPosition={{ x: 0, y: 0 }} width={640} focusable>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 20 }}>
          {Array.from({ length: count }, (_, i) => (
            <ItemCard key={i}>
              <Stack size="sm">
                <CardTitle>Channel {i + 1}</CardTitle>
                <MutedText>A regular resource card.</MutedText>
              </Stack>
            </ItemCard>
          ))}
        </div>
      </FloatingPanel>

      <CreatePanel
        title="New channel"
        label="Create channel"
        defaultPosition={{ x: 720, y: 0 }}
        width={280}
        onClick={() => setCount(c => c + 1)}
      />
    </WhiteboardShell>
  )
}
