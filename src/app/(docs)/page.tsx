import Link from 'next/link'
import { ArrowDownToLine, Code2, LayoutDashboard, Sparkles } from 'lucide-react'
import { CodeBlock } from '@/components/CodeBlock'
import { Eyebrow } from '@/components/Eyebrow'
import { GROUPS, exportsByGroup, TOTAL_EXPORTS } from '@/components/exports'

const INSTALL = `pnpm add @objectifthunes/whiteboard zustand`

const WIRE_UP = `// app/layout.tsx
import '@objectifthunes/whiteboard/style.css'`

const SKILL_INSTALL = `git clone git@github.com:objectifthunes/whiteboard-claude-skill.git \\
  ~/.claude/skills/whiteboard-ui`

const CATEGORY_BLURB: Record<string, string> = {
  whiteboard:  'The pan/zoom canvas, floating panels, minimap, and the dialog / boundary helpers around them.',
  store:       'The Zustand store, the layout hook, and the small geometry utilities for camera framing.',
  buttons:     'Three button variants, the row container, the panel close button, theme toggle, and overlay icon button.',
  forms:       'Field + the styled native primitives, plus the 2-column CoordGrid for 3D inputs.',
  feedback:    'Alerts, pills, chips, loading + empty states — the small surfaces for status and emptiness.',
  layout:      'Stack, Inline, TitleRow, SplitLayout and friends — every rhythm and split you need.',
  typography:  'PageTitle, CardTitle, SectionTitle + description, and three sizes of muted text.',
  cards:       'Item cards, picker grids, and a controlled radio-card ChoiceGroup.',
  navigation:  'A fixed vertical toolbar and a circular initials badge.',
  media:       '16:9 stage for embedded scenes, plus a fallback-aware image thumb.',
  sections:    'PanelSection + PanelTitle — the building blocks of a FloatingPanel body.',
  skeletons:   'Every shape has a primitive. Composed CardSkeleton / PickerGridSkeleton / ChoiceGroupSkeleton on top.',
}

export default async function HomePage() {
  return (
    <div className="landing">
      <section className="landing__hero">
        <Eyebrow icon={<LayoutDashboard size={12} strokeWidth={1.75} />}>@OBJECTIFTHUNES/WHITEBOARD · DEMO</Eyebrow>
        <h1 className="landing__title">Every export, in one place.</h1>
        <p className="landing__lede">
          A live, source-paired showcase of every component, hook and util shipped by{' '}
          <code>@objectifthunes/whiteboard</code>. Pick an export from the sidebar to see its rendered output,
          the exact snippet that produced it, and its tradeoffs.
        </p>
      </section>

      <section>
        <div className="landing__grid">
          {GROUPS.map(g => {
            const items = exportsByGroup(g.id)
            if (items.length === 0) return null
            const first = items[0]
            return (
              <Link key={g.id} href={first.href} className="landing__card">
                <div className="landing__card-row">
                  <span className="landing__card-title">{g.label}</span>
                  <span className="landing__card-count">{items.length} {items.length === 1 ? 'export' : 'exports'}</span>
                </div>
                <p className="landing__card-blurb">{CATEGORY_BLURB[g.id]}</p>
                <span className="landing__card-open">Open →</span>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="landing__block">
        <Eyebrow icon={<ArrowDownToLine size={12} strokeWidth={1.75} />}>INSTALL</Eyebrow>
        <CodeBlock code={INSTALL} lang="bash" />
        <Eyebrow icon={<Code2 size={12} strokeWidth={1.75} />}>WIRE-UP</Eyebrow>
        <CodeBlock code={WIRE_UP} lang="tsx" />
      </section>

      <section className="landing__skill">
        <div className="landing__skill-header">
          <div>
            <Eyebrow icon={<Sparkles size={12} strokeWidth={1.75} />}>PICK IT UP WITH CLAUDE</Eyebrow>
            <h2 className="landing__skill-title">A skill, so Claude knows the rules.</h2>
          </div>
          <a className="landing__skill-cta" href="https://github.com/objectifthunes/whiteboard-claude-skill" target="_blank" rel="noopener noreferrer">
            Open repo
          </a>
        </div>
        <p style={{ color: 'var(--wb-text-secondary)', fontSize: 14 }}>
          A companion Claude skill lives at <code>objectifthunes/whiteboard-claude-skill</code>. Drop it into
          your <code>~/.claude/skills/</code> directory and Claude Code (or Claude.ai with the skill) will
          surface the five-step wire-up, the full export catalogue ({TOTAL_EXPORTS} entries), the design
          rules, and the non-obvious caveats — every time you mention <code>@objectifthunes/whiteboard</code>{' '}
          or any of its components.
        </p>
        <CodeBlock code={SKILL_INSTALL} lang="bash" />
        <Eyebrow icon={<Sparkles size={12} strokeWidth={1.75} />}>WHAT CLAUDE WILL DO, ONCE INSTALLED</Eyebrow>
        <ul className="landing__skill-bullets">
          <li>Scaffold a new Next.js app pre-wired with @objectifthunes/whiteboard</li>
          <li>Pick the right export per intent (CardTitle vs PageTitle, Stack vs Inline)</li>
          <li>Surface the &apos;use client&apos; / mount-gate caveats before they bite</li>
          <li>Compose layouts from SplitLayout shapes (media-content, media-content-actions)</li>
          <li>Theme via <code>--wb-*</code> tokens instead of reinventing the palette</li>
          <li>Quote the design rules instead of guessing them</li>
        </ul>
      </section>
    </div>
  )
}
