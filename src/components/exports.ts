export type Badge = 'FULL-SCREEN' | 'HOOK' | 'UTIL' | 'TYPE'

export interface ExportEntry {
  slug: string           // url segment, e.g. 'shell'
  name: string           // 'WhiteboardShell'
  group: GroupId
  href: string           // '/whiteboard/shell/'
  badge?: Badge
  /** A short blurb shown next to the title on the export page. */
  lede: string
}

export type GroupId =
  | 'whiteboard'
  | 'store'
  | 'dashboard'
  | 'buttons'
  | 'forms'
  | 'feedback'
  | 'layout'
  | 'typography'
  | 'cards'
  | 'navigation'
  | 'media'
  | 'sections'
  | 'skeletons'

export const GROUPS: { id: GroupId; label: string }[] = [
  { id: 'whiteboard',  label: 'Whiteboard SaaS' },
  { id: 'store',       label: 'Store & hooks' },
  { id: 'dashboard',   label: 'Whiteboard Dashboard' },
  { id: 'buttons',     label: 'Buttons'     },
  { id: 'forms',       label: 'Forms'       },
  { id: 'feedback',    label: 'Feedback'    },
  { id: 'layout',      label: 'Layout'      },
  { id: 'typography',  label: 'Typography'  },
  { id: 'cards',       label: 'Cards & lists' },
  { id: 'navigation',  label: 'Navigation'  },
  { id: 'media',       label: 'Media'       },
  { id: 'sections',    label: 'Sections'    },
  { id: 'skeletons',   label: 'Skeletons'   },
]

export const EXPORTS: ExportEntry[] = [
  // Whiteboard primitives
  { slug: 'shell',                name: 'WhiteboardShell',     group: 'whiteboard', href: '/whiteboard/shell/',                lede: 'The pan/zoom canvas viewport. Fixed-position, full-viewport. Mount it once, drop FloatingPanels inside.', badge: 'FULL-SCREEN' },
  { slug: 'floating-panel',       name: 'FloatingPanel',       group: 'whiteboard', href: '/whiteboard/floating-panel/',       lede: 'A draggable, world-space panel that lives inside WhiteboardShell. Register your tool UIs here.', badge: 'FULL-SCREEN' },
  { slug: 'create-panel',         name: 'CreatePanel',         group: 'whiteboard', href: '/whiteboard/create-panel/',         lede: 'The "make a new one" card: a dashed panel with one full-width primary Button. Place it beside a board of resource cards.', badge: 'FULL-SCREEN' },
  { slug: 'minimap',              name: 'Minimap',             group: 'whiteboard', href: '/whiteboard/minimap/',              lede: 'A live overview of every registered panel + the current viewport. Click / drag to pan, double-click a panel to focus it.', badge: 'FULL-SCREEN' },
  { slug: 'zoom-bar',             name: 'ZoomBar',             group: 'whiteboard', href: '/whiteboard/zoom-bar/',             lede: 'Fixed-position zoom controls: in/out, fit, reset positions, snap-to-grid. Slot extra actions in via extraActions.', badge: 'FULL-SCREEN' },
  { slug: 'confirm-dialog',       name: 'ConfirmDialog',       group: 'whiteboard', href: '/whiteboard/confirm-dialog/',       lede: 'Portaled, accessible confirmation modal. Closes on Escape, backdrop click, or Cancel.' },
  { slug: 'panel-error-boundary', name: 'PanelErrorBoundary',  group: 'whiteboard', href: '/whiteboard/panel-error-boundary/', lede: 'Class-based error boundary with a Retry button. Drop it around panel bodies that load unstable widgets.' },

  // Store & hooks
  { slug: 'use-whiteboard-store',  name: 'useWhiteboardStore',  group: 'store', href: '/store/use-whiteboard-store/',  lede: 'A plain Zustand store with offset, scale, panels, and the canvas action handlers.', badge: 'HOOK' },
  { slug: 'use-whiteboard-layout', name: 'useWhiteboardLayout', group: 'store', href: '/store/use-whiteboard-layout/', lede: 'Given a widths map, returns grid-snapped { x, y } positions for the initial layout of a row of panels.', badge: 'HOOK' },
  { slug: 'geometry',              name: 'Geometry helpers',    group: 'store', href: '/store/geometry/',              lede: 'computeWhiteboardFit + computeWhiteboardRectFocus — pure functions for camera framing.', badge: 'UTIL' },
  { slug: 'helpers',               name: 'Helpers',             group: 'store', href: '/store/helpers/',               lede: 'usePanelRect, belowPanel, snapToWhiteboardGrid, WHITEBOARD_GRID, and cn.', badge: 'UTIL' },

  // Whiteboard Dashboard
  { slug: 'dashboard-shell',  name: 'DashboardShell',        group: 'dashboard', href: '/dashboard/dashboard-shell/',  lede: 'Sidebar column + main column with top bar and centred content. The classic admin layout; collapses to one column under 880px.', badge: 'FULL-SCREEN' },
  { slug: 'sidebar',          name: 'Sidebar',               group: 'dashboard', href: '/dashboard/sidebar/',          lede: 'Grouped dashboard navigation with brand, badge, and footer slots. Framework-agnostic — swap the plain <a> via renderLink.' },
  { slug: 'top-bar',          name: 'TopBar',                group: 'dashboard', href: '/dashboard/top-bar/',          lede: 'Sticky dashboard header: mono breadcrumb left, quiet TopBarLink actions right. Content scrolls under its blurred backdrop.' },
  { slug: 'page',             name: 'Page & PageHeader',     group: 'dashboard', href: '/dashboard/page/',             lede: 'Page, PageHeader, PageBlock, and Eyebrow — the vertical rhythm of every dashboard page.' },
  { slug: 'content-card',     name: 'ContentCard',           group: 'dashboard', href: '/dashboard/content-card/',     lede: 'Bordered surface card for dashboard content, optionally titled with an Eyebrow.' },
  { slug: 'stat-card',        name: 'StatCard',              group: 'dashboard', href: '/dashboard/stat-card/',        lede: 'Stat/recap tile: eyebrow title with a status pill, a big value, muted context lines, optional footer actions.' },
  { slug: 'form-grid',        name: 'FormGrid & FormActions', group: 'dashboard', href: '/dashboard/form-grid/',       lede: 'Two- or three-column field grid plus a right-aligned compact action row. Collapses to one column under 880px.' },
  { slug: 'filter-tabs',      name: 'FilterTabs',            group: 'dashboard', href: '/dashboard/filter-tabs/',      lede: 'Compact filter tabs built from Buttons — the active option is primary, the rest secondary. No custom tab CSS.' },
  { slug: 'toggle-chip',      name: 'ToggleChip',            group: 'dashboard', href: '/dashboard/toggle-chip/',      lede: 'A Chip that toggles, with an unmissable filled active state and aria-pressed wired in.' },
  { slug: 'icon-button',      name: 'IconButton',            group: 'dashboard', href: '/dashboard/icon-button/',      lede: 'Icon-only Button wrapped in a Tooltip that carries the label. For dense row actions where repeated text is noise.' },
  { slug: 'row-card',         name: 'RowCard & skeletons',   group: 'dashboard', href: '/dashboard/row-card/',         lede: 'The one list-row layout every catalog page shares — plus RowSkeleton and ListSkeleton with the exact same geometry.' },
  { slug: 'list-header-row',  name: 'ListHeaderRow',         group: 'dashboard', href: '/dashboard/list-header-row/',  lede: 'Header row above a list: eyebrow title left, actions right.' },
  { slug: 'search-bar',       name: 'SearchBar',             group: 'dashboard', href: '/dashboard/search-bar/',       lede: 'Catalog search input, always full width of its container. Filters go on their own line below, never inline.' },
  { slug: 'load-more-button', name: 'LoadMoreButton',        group: 'dashboard', href: '/dashboard/load-more-button/', lede: 'Cursor-pagination footer. Renders nothing without a next page or while loading, so drop it in unconditionally.' },
  { slug: 'button-link',      name: 'ButtonLink',            group: 'dashboard', href: '/dashboard/button-link/',      lede: 'A link styled exactly like Button — navigation that looks like an action, without nesting a button inside an anchor.' },
  { slug: 'note-bar',         name: 'NoteBar',               group: 'dashboard', href: '/dashboard/note-bar/',         lede: 'The single global notification surface: an Alert with a dismiss button. Renders nothing without children.' },
  { slug: 'sticky-bar',       name: 'StickyBar',             group: 'dashboard', href: '/dashboard/sticky-bar/',       lede: 'Viewport-pinned bottom bar for batch summaries and bulk actions. Offsets past the sidebar; full width under 880px.', badge: 'FULL-SCREEN' },

  // Forms (0.4 additions live alongside the originals below)
  { slug: 'checkbox',     name: 'Checkbox & Switch', group: 'forms', href: '/forms/checkbox/',     lede: 'Labeled boolean rows. The input pins its own size, so host globals can never stretch it across the row.' },
  { slug: 'slider',       name: 'Slider',            group: 'forms', href: '/forms/slider/',       lede: 'Label left, live readout right, themed range underneath. onChange emits numbers, not strings.' },
  { slug: 'number-field', name: 'NumberField',       group: 'forms', href: '/forms/number-field/', lede: 'Labeled numeric input that clamps to min/max and never emits NaN.' },

  // Buttons
  { slug: 'button',              name: 'Button',              group: 'buttons', href: '/buttons/button/',              lede: 'Three variants (primary, secondary, danger), a loading state, full-width + icon-only modifiers. Defaults to type="button".' },
  { slug: 'button-row',          name: 'ButtonRow',           group: 'buttons', href: '/buttons/button-row/',          lede: 'Equal-sized children via flex: 1 1 0 — drop-in for action footers.' },
  { slug: 'panel-close-button',  name: 'PanelCloseButton',    group: 'buttons', href: '/buttons/panel-close-button/',  lede: 'Pre-built secondary button with an X icon. Use inside a panel\'s headerActions.' },
  { slug: 'theme-toggle',        name: 'ThemeToggle',         group: 'buttons', href: '/buttons/theme-toggle/',        lede: 'Controlled moon/sun toggle. You own the data-theme attribute — almost always on <html>.' },
  { slug: 'overlay-icon-button', name: 'OverlayIconButton',   group: 'buttons', href: '/buttons/overlay-icon-button/', lede: 'Secondary icon-only button absolutely positioned over a canvas. Placement: top-right, bottom-left, bottom-right.' },

  // Forms
  { slug: 'field',           name: 'Field',           group: 'forms', href: '/forms/field/',           lede: 'Wraps any control with a label, optional hint, and inline error. Use layout="control" for inline checkbox stacks.' },
  { slug: 'label',           name: 'Label',           group: 'forms', href: '/forms/label/',           lede: 'A styled <label>: tiny, uppercase, muted, tight letter-spacing.' },
  { slug: 'input',           name: 'Input',           group: 'forms', href: '/forms/input/',           lede: 'A styled <input>. Forwards refs, accepts every native prop.' },
  { slug: 'textarea',        name: 'Textarea',        group: 'forms', href: '/forms/textarea/',        lede: 'A styled <textarea>. Forwards refs, accepts every native prop.' },
  { slug: 'select',          name: 'Select',          group: 'forms', href: '/forms/select/',          lede: 'A styled <select>. Forwards refs, accepts every native prop.' },
  { slug: 'coord-grid',      name: 'CoordGrid',       group: 'forms', href: '/forms/coord-grid/',      lede: 'A two-column grid container for CoordInputs.' },
  { slug: 'coord-input',     name: 'CoordInput',      group: 'forms', href: '/forms/coord-input/',     lede: 'A numeric input with a tiny axis label (x / y / z / scale). step="0.01" by default.' },

  // Feedback
  { slug: 'alert',              name: 'Alert',              group: 'feedback', href: '/feedback/alert/',              lede: 'Four tones — error, info, success, muted. Use sparingly: inside panels and on form errors.' },
  { slug: 'tooltip', name: 'Tooltip', group: 'feedback', href: '/feedback/tooltip/', lede: 'CSS-only tooltip — shows on hover and keyboard focus. No portal, no JS, no positioning library.' },
  { slug: 'pill',               name: 'Pill',               group: 'feedback', href: '/feedback/pill/',               lede: 'Soft status indicator with no border. Four tones: default, success, warning, danger.' },
  { slug: 'chip',               name: 'Chip',               group: 'feedback', href: '/feedback/chip/',               lede: 'Outlined tag, rendered as a span. Becomes interactive as <button class="chip">.' },
  { slug: 'tag-row',            name: 'TagRow',             group: 'feedback', href: '/feedback/tag-row/',            lede: 'Wrapping row of tiny items — chips, pills, mini metadata.' },
  { slug: 'loading-state',      name: 'LoadingState',       group: 'feedback', href: '/feedback/loading-state/',      lede: 'Inline spinner + label. Sized to flow inside a sentence or panel header.' },
  { slug: 'generating-overlay', name: 'GeneratingOverlay',  group: 'feedback', href: '/feedback/generating-overlay/', lede: 'Backdrop-blur overlay over its children when isGenerating is true.' },
  { slug: 'empty-state',        name: 'EmptyState',         group: 'feedback', href: '/feedback/empty-state/',        lede: 'Title + description + optional action — for the "nothing here yet" card.' },

  // Layout
  { slug: 'stack',         name: 'Stack',        group: 'layout', href: '/layout/stack/',         lede: 'Vertical grid with consistent gap. Use Stack everywhere you\'d otherwise reach for margin-bottom.' },
  { slug: 'surface', name: 'Surface', group: 'layout', href: '/layout/surface/', lede: 'The plain floating overlay container — selection menus, legends, log panes — for chrome that lives outside a WhiteboardShell.' },
  { slug: 'divider', name: 'Divider', group: 'layout', href: '/layout/divider/', lede: 'Hairline separator. Horizontal in stacks, vertical inside toolbars and inline rows.' },
  { slug: 'draggable', name: 'Draggable & DraggableSurface', group: 'layout', href: '/layout/draggable/', lede: 'Screen-space dragging for overlay chrome — grid snap on release, per-id persistence, double-click or resetDraggables() to reset. No WhiteboardShell required.' },
  { slug: 'inline',        name: 'Inline',       group: 'layout', href: '/layout/inline/',        lede: 'Horizontal row. justify="between" for split alignment; "end" to push trailing items.' },
  { slug: 'title-row',     name: 'TitleRow',     group: 'layout', href: '/layout/title-row/',     lede: 'A title-on-the-left, actions-on-the-right header row.' },
  { slug: 'split-layout',  name: 'SplitLayout',  group: 'layout', href: '/layout/split-layout/',  lede: 'Two- or three-column grid for media + content (+ actions) rows. Three shape-named variants.' },
  { slug: 'icon-text',     name: 'IconText',     group: 'layout', href: '/layout/icon-text/',     lede: 'Icon + text inline row with a consistent gap.' },
  { slug: 'page-shell',    name: 'PageShell',    group: 'layout', href: '/layout/page-shell/',    lede: 'A full-viewport centred <main>. For non-canvas surfaces (auth, settings).' },
  { slug: 'page-card',     name: 'PageCard',     group: 'layout', href: '/layout/page-card/',     lede: 'The bordered card you put inside PageShell.' },

  // Typography
  { slug: 'page-title',           name: 'PageTitle',           group: 'typography', href: '/typography/page-title/',           lede: 'The biggest title — an <h1>, 1.1rem, weight 600.' },
  { slug: 'card-title',           name: 'CardTitle',           group: 'typography', href: '/typography/card-title/',           lede: 'The title inside a card. Tiny, bold, with optional 2-line clamp.' },
  { slug: 'section-title',        name: 'SectionTitle',        group: 'typography', href: '/typography/section-title/',        lede: 'The heading inside a PanelSection. An inline element by default.' },
  { slug: 'section-description',  name: 'SectionDescription',  group: 'typography', href: '/typography/section-description/',  lede: 'The one-liner that sits under a SectionTitle.' },
  { slug: 'muted-text',           name: 'MutedText',           group: 'typography', href: '/typography/muted-text/',           lede: 'Muted body text in three sizes: xs, sm (default), md.' },
  { slug: 'kbd', name: 'Kbd', group: 'typography', href: '/typography/kbd/', lede: 'Keyboard-key chip for shortcut hints: esc, del, shift-drag.' },

  // Cards & lists
  { slug: 'item-card',     name: 'ItemCard',     group: 'cards', href: '/cards/item-card/',     lede: 'A bordered card surface. Pair with ItemList for vertical lists.' },
  { slug: 'item-list',     name: 'ItemList',     group: 'cards', href: '/cards/item-list/',     lede: 'A vertical grid of ItemCards with consistent gap.' },
  { slug: 'list',          name: 'List',         group: 'cards', href: '/cards/list/',          lede: 'A reset <ul>: no bullets, no padding, no margin.' },
  { slug: 'picker-card',   name: 'PickerCard',   group: 'cards', href: '/cards/picker-card/',   lede: 'A clickable card for picker grids. Defaults to <button>.' },
  { slug: 'picker-grid',   name: 'PickerGrid',   group: 'cards', href: '/cards/picker-grid/',   lede: 'A responsive auto-fill grid. minItemWidth controls how many columns fit.' },
  { slug: 'choice-card',   name: 'ChoiceCard',   group: 'cards', href: '/cards/choice-card/',   lede: 'A clickable radio-style card. Internal to ChoiceGroup; expose for custom groups.' },
  { slug: 'choice-group',  name: 'ChoiceGroup',  group: 'cards', href: '/cards/choice-group/',  lede: 'A controlled list of radio-style cards. Each option has value + label + optional description + disabled.' },

  // Navigation
  { slug: 'vertical-toolbar', name: 'VerticalToolbar', group: 'navigation', href: '/navigation/vertical-toolbar/', lede: 'Fixed-position icon sidebar with an optional bottom slot. Left, right, or static placement.' },
  { slug: 'toolbar',          name: 'Toolbar',          group: 'navigation', href: '/navigation/toolbar/',          lede: 'Horizontal sibling of VerticalToolbar — the app-chrome bar: title, chips, navigation, primary action, end slot.' },
  { slug: 'avatar-badge',     name: 'AvatarBadge',     group: 'navigation', href: '/navigation/avatar-badge/',     lede: 'A circular initials badge — small, with a muted background.' },

  // Media
  { slug: 'canvas-stage',  name: 'CanvasStage',  group: 'media', href: '/media/canvas-stage/',  lede: 'A 16:9 bordered stage for embedded scenes (Three.js, video, image).' },
  { slug: 'image-thumb',   name: 'ImageThumb',   group: 'media', href: '/media/image-thumb/',   lede: 'Aspect-locked thumbnail with a placeholder fallback when src is null.' },

  // Sections
  { slug: 'panel-section', name: 'PanelSection', group: 'sections', href: '/sections/panel-section/', lede: 'Bordered section with an optional heading + description + actions slot. Used inside FloatingPanel bodies.' },
  { slug: 'panel-title',   name: 'PanelTitle',   group: 'sections', href: '/sections/panel-title/',   lede: 'Compact icon + label for a FloatingPanel\'s title prop.' },

  // Skeletons
  { slug: 'skeleton',                name: 'Skeleton',                group: 'skeletons', href: '/skeletons/skeleton/',                lede: 'The base shimmering bar. Three radii (sm, md, pill); polymorphic via `as`.' },
  { slug: 'line-title',              name: 'Line + Title',            group: 'skeletons', href: '/skeletons/line-title/',              lede: 'LineSkeleton (with short variant) + TitleSkeleton. The two atoms of every text placeholder.' },
  { slug: 'form-primitives',         name: 'Form primitives',         group: 'skeletons', href: '/skeletons/form-primitives/',         lede: 'InputSkeleton, TextareaSkeleton, SelectSkeleton, ButtonSkeleton, IconButtonSkeleton.' },
  { slug: 'media-primitives',        name: 'Media + chip primitives', group: 'skeletons', href: '/skeletons/media-primitives/',        lede: 'ChipSkeleton, AvatarSkeleton, ThumbSkeleton, CanvasSkeleton.' },
  { slug: 'panel-form-skeleton',     name: 'PanelFormSkeleton',       group: 'skeletons', href: '/skeletons/panel-form-skeleton/',     lede: 'N input placeholders + an optional submit button — for panel-body loading states.' },
  { slug: 'card-skeleton',           name: 'CardSkeleton',            group: 'skeletons', href: '/skeletons/card-skeleton/',           lede: 'Generic composed card placeholder. Toggle thumb, chip row, and action row independently.' },
  { slug: 'picker-grid-skeleton',    name: 'PickerGridSkeleton',      group: 'skeletons', href: '/skeletons/picker-grid-skeleton/',    lede: 'A picker grid pre-filled with N placeholder cells. minItemWidth should match the real grid.' },
  { slug: 'choice-group-skeleton',   name: 'ChoiceGroupSkeleton',     group: 'skeletons', href: '/skeletons/choice-group-skeleton/',   lede: 'A ChoiceGroup placeholder. withDescription={true} when your real options have descriptions.' },
]

export function groupOf(id: GroupId) {
  return GROUPS.find(g => g.id === id)!
}

export function exportsByGroup(id: GroupId) {
  return EXPORTS.filter(e => e.group === id)
}

export function findExport(href: string): ExportEntry | undefined {
  return EXPORTS.find(e => e.href === href)
}

export const TOTAL_EXPORTS = EXPORTS.length
