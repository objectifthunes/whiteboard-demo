import {
  ALargeSmall,
  Database,
  FileCode2,
  Hand,
  Image,
  LayoutDashboard,
  LayoutPanelTop,
  Layers,
  ListTree,
  MessageSquare,
  MousePointerClick,
  Square,
  SquareDashed,
  type LucideIcon,
} from 'lucide-react'
import type { GroupId } from './exports'

export const GROUP_ICONS: Record<GroupId, LucideIcon> = {
  whiteboard:  LayoutDashboard,
  store:       Database,
  buttons:     MousePointerClick,
  forms:       Square,
  feedback:    MessageSquare,
  layout:      Layers,
  typography:  ALargeSmall,
  cards:       FileCode2,
  navigation:  Hand,
  media:       Image,
  sections:    LayoutPanelTop,
  skeletons:   SquareDashed,
}

/** Use this for sidebar nav items + group eyebrows. */
export function GroupIcon({ group, size = 12 }: { group: GroupId; size?: number }) {
  const Icon = GROUP_ICONS[group] ?? ListTree
  return <Icon size={size} strokeWidth={1.75} />
}
