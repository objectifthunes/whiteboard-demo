import { CodeBlock } from '@/components/CodeBlock'
import { DocPage } from '@/components/DocPage'
import { DocSection } from '@/components/DocSection'
import { Preview } from '@/components/Preview'
import { AvatarBadgeDemo, VerticalToolbarDemo } from './client'

const TOOLBAR = `import { VerticalToolbar, AvatarBadge } from '@objectifthunes/whiteboard'

<VerticalToolbar bottom={<AvatarBadge>JD</AvatarBadge>}>
  <button className="wb-btn wb-btn--secondary wb-btn--icon-only" aria-label="Dashboard">
    <LayoutDashboard size={14} />
  </button>
  <button className="wb-btn wb-btn--secondary wb-btn--icon-only" aria-label="Library">
    <BookOpen size={14} />
  </button>
</VerticalToolbar>

// position="left" (default), "right", or "static" (for inline placement)`

const AVATAR = `import { AvatarBadge } from '@objectifthunes/whiteboard'

<AvatarBadge>JD</AvatarBadge>`

export default async function NavigationPage() {
  return (
    <DocPage
      title="Navigation"
      lead="A fixed-position vertical toolbar and a circular initials badge."
    >
      <DocSection
        title="VerticalToolbar"
        description="Fixed-position sidebar. Place icon buttons as children and an optional bottom element (e.g. an AvatarBadge). Defaults to position='left'; pass 'static' to inline it."
      >
        <Preview><VerticalToolbarDemo /></Preview>
        <CodeBlock code={TOOLBAR} />
      </DocSection>

      <DocSection
        title="AvatarBadge"
        description="Circular initials badge. Pass the initials as children."
      >
        <Preview><AvatarBadgeDemo /></Preview>
        <CodeBlock code={AVATAR} />
      </DocSection>
    </DocPage>
  )
}
