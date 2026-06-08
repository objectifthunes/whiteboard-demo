import { CodeBlock } from '@/components/CodeBlock'
import { DocPage } from '@/components/DocPage'
import { DocSection } from '@/components/DocSection'
import { Preview } from '@/components/Preview'
import { CoordsDemo, FieldDemo, PrimitivesDemo } from './client'

const FIELD = `import { Field, Input } from '@objectifthunes/whiteboard'

<Field label="Name" htmlFor="name" hint="Display name only.">
  <Input id="name" placeholder="John Doe" />
</Field>

<Field label="Email" htmlFor="email" error="Email is required.">
  <Input id="email" type="email" />
</Field>`

const PRIMS = `import { Label, Textarea, Select } from '@objectifthunes/whiteboard'

<Label htmlFor="bio">Bio</Label>
<Textarea id="bio" placeholder="Tell us about yourself…" />

<Label htmlFor="region">Region</Label>
<Select id="region">
  <option>Europe</option>
  <option>Americas</option>
  <option>APAC</option>
</Select>`

const COORDS = `import { CoordGrid, CoordInput } from '@objectifthunes/whiteboard'

<CoordGrid>
  <CoordInput axis="x" value={pos.x} onChange={…} />
  <CoordInput axis="y" value={pos.y} onChange={…} />
  <CoordInput axis="z" value={pos.z} onChange={…} />
</CoordGrid>`

export default async function FormsPage() {
  return (
    <DocPage
      title="Forms"
      lead="Thin styled wrappers around native form elements plus a Field with built-in label, hint, and error slots."
    >
      <DocSection
        title="Field"
        description="Wraps any control with a label, optional hint, and inline error. Pass `layout='control'` if your child manages its own row (e.g. a checkbox)."
      >
        <Preview><FieldDemo /></Preview>
        <CodeBlock code={FIELD} />
      </DocSection>

      <DocSection
        title="Label, Textarea, Select"
        description="Styled to match Input. Each forwards refs and accepts every native prop."
      >
        <Preview><PrimitivesDemo /></Preview>
        <CodeBlock code={PRIMS} />
      </DocSection>

      <DocSection
        title="CoordGrid + CoordInput"
        description="A 2-column grid for 3D position / scale inputs. Each CoordInput renders a tiny axis label + a numeric input with step=0.01."
      >
        <Preview><CoordsDemo /></Preview>
        <CodeBlock code={COORDS} />
      </DocSection>
    </DocPage>
  )
}
