export const SECTIONS = [
  {
    title: 'Whiteboard',
    items: [
      { href: '/components/canvas', label: 'Canvas & panels' },
      { href: '/components/store', label: 'Store & hooks' },
    ],
  },
  {
    title: 'Primitives',
    items: [
      { href: '/components/buttons', label: 'Buttons' },
      { href: '/components/forms', label: 'Forms' },
      { href: '/components/feedback', label: 'Feedback' },
      { href: '/components/layout', label: 'Layout' },
      { href: '/components/typography', label: 'Typography' },
      { href: '/components/cards', label: 'Cards & lists' },
      { href: '/components/navigation', label: 'Navigation' },
      { href: '/components/media', label: 'Media' },
      { href: '/components/sections', label: 'Sections' },
      { href: '/components/skeletons', label: 'Skeletons' },
    ],
  },
] as const

export type NavHref = (typeof SECTIONS)[number]['items'][number]['href']
