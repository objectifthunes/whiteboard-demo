'use client'

// The dashboard kit, fully assembled: DashboardShell + Sidebar +
// TopBar + Page with a StatCard grid, searchable filtered list,
// NoteBar, and the StickyBar batch bar. All state is in-page — the
// sidebar "navigates" by swapping the active item, so every part of
// the chrome is clickable without real routes.

import { useMemo, useState } from 'react'
import {
  Button,
  ButtonLink,
  ContentCard,
  DashboardShell,
  Eyebrow,
  FilterTabs,
  FormGrid,
  IconButton,
  Inline,
  ItemList,
  ListHeaderRow,
  LoadMoreButton,
  MutedText,
  NoteBar,
  Page,
  PageHeader,
  Pill,
  RowCard,
  SearchBar,
  Sidebar,
  SidebarBrand,
  StatCard,
  StickyBar,
  ToggleChip,
  TopBar,
  TopBarLink,
  type SidebarGroup,
} from '@objectifthunes/whiteboard'
import {
  Activity,
  AudioLines,
  Database,
  LayoutDashboard,
  ListMusic,
  Moon,
  Pencil,
  Sparkles,
  Trash2,
} from 'lucide-react'

const GROUPS: SidebarGroup[] = [
  {
    label: 'Overview',
    items: [{ href: '/dashboard', name: 'Dashboard', icon: <LayoutDashboard size={14} /> }],
  },
  {
    label: 'Catalog',
    items: [
      { href: '/tracks', name: 'Tracks', icon: <AudioLines size={14} /> },
      { href: '/moods', name: 'Moods', icon: <Moon size={14} /> },
      { href: '/playlists', name: 'Playlists', icon: <ListMusic size={14} /> },
    ],
  },
  {
    label: 'Create',
    items: [
      { href: '/generate', name: 'Generate tracks', icon: <Sparkles size={14} />, badge: 'PAID' },
    ],
  },
  {
    label: 'System',
    items: [
      { href: '/jobs', name: 'Jobs', icon: <Activity size={14} /> },
      { href: '/backup', name: 'Backup', icon: <Database size={14} /> },
    ],
  },
]

const TRACKS = [
  { name: 'Rain on tent', kind: 'sound', detail: 'sound · 30s loop' },
  { name: 'Distant thunder', kind: 'sound', detail: 'sound · 30s loop' },
  { name: 'Night train', kind: 'sound', detail: 'sound · 30s loop' },
  { name: 'Slow piano drift', kind: 'music', detail: 'music · 3m 12s' },
  { name: 'Woodland dawn', kind: 'music', detail: 'music · 2m 58s' },
]

export default function Page_() {
  const [activeHref, setActiveHref] = useState('/tracks')
  const [note, setNote] = useState<string | null>('Created "Rain on tent" — it is live in the catalog.')
  const [query, setQuery] = useState('')
  const [kind, setKind] = useState<'all' | 'sound' | 'music'>('all')
  const [staged, setStaged] = useState<string[]>(['Distant thunder', 'Slow piano drift'])

  const rows = useMemo(
    () =>
      TRACKS.filter(
        (t) =>
          (kind === 'all' || t.kind === kind) &&
          t.name.toLowerCase().includes(query.toLowerCase()),
      ),
    [query, kind],
  )
  const crumb = 'acme-studio ' + activeHref

  return (
    <DashboardShell
      sidebar={
        <Sidebar
          brand={
            <SidebarBrand
              mark={<Moon size={20} />}
              eyebrow="ADMIN"
              name="Acme Studio"
              meta="catalog · pipelines · jobs"
              renderLink={(_item, props) => (
                <a {...props} href="#" onClick={(e) => e.preventDefault()} />
              )}
            />
          }
          groups={GROUPS}
          activeHref={activeHref}
          renderLink={(item, props) => (
            <a
              {...props}
              href="#"
              onClick={(e) => {
                e.preventDefault()
                setActiveHref(item.href)
              }}
            />
          )}
        />
      }
      topbar={
        <TopBar
          crumb={crumb}
          actions={<TopBarLink onClick={() => setNote('This is where "log out" would go.')}>log out</TopBarLink>}
        />
      }
    >
      <Page>
        <PageHeader
          eyebrow="Catalog"
          title="Tracks"
          lede="Every sound and music loop in the catalog. Search, filter, stage the ones to regenerate."
        />

        {note && <NoteBar tone="success" onDismiss={() => setNote(null)}>{note}</NoteBar>}

        <FormGrid cols={2}>
          <StatCard title="Tracks · seed recap" pill="complete" pillTone="success" value="34 / 34" sub="seed specs created · 62 in the catalog total" />
          <StatCard
            title="Moods · seed recap"
            pill="3 missing"
            pillTone="warning"
            value="55 / 58"
            sub="seed specs created · 58 in the catalog total"
            actions={<ButtonLink href="#" onClick={(e) => e.preventDefault()} variant="secondary">Browse</ButtonLink>}
          />
        </FormGrid>

        <ContentCard title="Catalog">
          <SearchBar value={query} onChange={setQuery} />
          <FilterTabs
            options={[
              { value: 'all', label: 'All' },
              { value: 'sound', label: 'Sounds' },
              { value: 'music', label: 'Music' },
            ]}
            value={kind}
            onChange={setKind}
          />
          <ListHeaderRow title={`${rows.length} tracks`} />
          <ItemList>
            {rows.map((t) => {
              const inBatch = staged.includes(t.name)
              return (
                <RowCard
                  key={t.name}
                  title={t.name}
                  detail={t.detail}
                  actions={
                    <>
                      {inBatch && <Pill tone="success">in batch ✓</Pill>}
                      <ToggleChip
                        active={inBatch}
                        onClick={() =>
                          setStaged((s) =>
                            inBatch ? s.filter((n) => n !== t.name) : [...s, t.name],
                          )
                        }
                      >
                        {inBatch ? 'Unstage' : 'Add to batch'}
                      </ToggleChip>
                      <IconButton icon={<Pencil size={14} />} label="Rename" onClick={() => setNote(`Rename "${t.name}" — wire your own dialog here.`)} />
                      <IconButton icon={<Trash2 size={14} />} label="Delete" variant="danger" onClick={() => setNote(`Delete "${t.name}" — this demo keeps everything.`)} />
                    </>
                  }
                />
              )
            })}
          </ItemList>
          <LoadMoreButton cursor="fake-cursor" loading={false} onClick={() => setNote('Cursor pagination goes here.')} />
        </ContentCard>
      </Page>

      <StickyBar>
        <Inline justify="between">
          <Inline>
            <Eyebrow>Batch</Eyebrow>
            <MutedText size="xs">
              {staged.length === 0 ? 'nothing staged yet — add tracks from the list' : `${staged.length} staged · est. $${(staged.length * 0.06).toFixed(2)}`}
            </MutedText>
          </Inline>
          <Button
            disabled={staged.length === 0}
            onClick={() => {
              setNote(`Fired ${staged.length} job(s). This is the moment money moves — gate it.`)
              setStaged([])
            }}
          >
            Fire batch
          </Button>
        </Inline>
      </StickyBar>
    </DashboardShell>
  )
}
