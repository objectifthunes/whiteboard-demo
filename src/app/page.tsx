'use client'

import { useEffect, useMemo, useState } from 'react'
import {
  WhiteboardShell,
  ThemeToggle,
  useWhiteboardLayout,
  WHITEBOARD_GRID,
} from '@objectifthunes/whiteboard'
import { GettingStartedPanel } from '@/panels/GettingStartedPanel'
import { ButtonsPanel } from '@/panels/ButtonsPanel'
import { FormsPanel } from '@/panels/FormsPanel'
import { StatusPanel } from '@/panels/StatusPanel'
import { LayoutPanel } from '@/panels/LayoutPanel'
import { CardsPanel } from '@/panels/CardsPanel'
import { TypographyPanel } from '@/panels/TypographyPanel'
import { SkeletonPanel } from '@/panels/SkeletonPanel'
import { OverlaysPanel } from '@/panels/OverlaysPanel'
import { NavigationPanel } from '@/panels/NavigationPanel'

const GAP = WHITEBOARD_GRID * 2

const WIDTHS = {
  gettingStarted: 420, buttons: 360, forms: 380,
  status: 360, layout: 360, typography: 360,
  cards: 380, overlays: 360, navigation: 360, skeletons: 820,
}

export default function Page() {
  const [mounted, setMounted] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  const layoutOptions = useMemo(
    () => ({ widths: WIDTHS, startX: 40, y: 40, gap: GAP }),
    [],
  )
  const { positions } = useWhiteboardLayout(layoutOptions)

  if (!mounted) return <div className="demo-root" />

  return (
    <div className="demo-root">
      <WhiteboardShell
        extraActions={
          <ThemeToggle
            theme={theme}
            onToggle={() => setTheme(t => (t === 'light' ? 'dark' : 'light'))}
          />
        }
      >
        <GettingStartedPanel defaultPosition={positions.gettingStarted} />
        <ButtonsPanel defaultPosition={positions.buttons} />
        <FormsPanel defaultPosition={positions.forms} />
        <StatusPanel defaultPosition={positions.status} />
        <LayoutPanel defaultPosition={positions.layout} />
        <TypographyPanel defaultPosition={positions.typography} />
        <CardsPanel defaultPosition={positions.cards} />
        <OverlaysPanel defaultPosition={positions.overlays} />
        <NavigationPanel defaultPosition={positions.navigation} />
        <SkeletonPanel defaultPosition={positions.skeletons} width={820} />
      </WhiteboardShell>
    </div>
  )
}
