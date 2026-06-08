import { CodeBlock } from '@/components/CodeBlock'
import { DocPage } from '@/components/DocPage'
import { DocSection } from '@/components/DocSection'
import { Preview } from '@/components/Preview'
import {
  CardSkeletonDemo,
  ChoiceGroupSkeletonDemo,
  PanelFormSkeletonDemo,
  PickerGridSkeletonDemo,
  PrimitivesDemo,
} from './client'

const PRIMS = `import {
  Skeleton,
  TitleSkeleton, LineSkeleton,
  InputSkeleton, TextareaSkeleton, SelectSkeleton,
  ButtonSkeleton, IconButtonSkeleton,
  ChipSkeleton, AvatarSkeleton, ThumbSkeleton, CanvasSkeleton,
} from '@objectifthunes/whiteboard'

<TitleSkeleton />
<LineSkeleton />
<LineSkeleton short />

<InputSkeleton />
<TextareaSkeleton />
<SelectSkeleton />

<ButtonSkeleton />
<IconButtonSkeleton />

<ChipSkeleton />
<AvatarSkeleton />
<ThumbSkeleton />

<CanvasSkeleton />

<Skeleton style={{ height: 24 }} radius="pill" />`

const PANEL_FORM = `import { PanelFormSkeleton } from '@objectifthunes/whiteboard'

{loading ? <PanelFormSkeleton inputs={3} showButton /> : <RealForm />}`

const CARD = `import { CardSkeleton, ItemList } from '@objectifthunes/whiteboard'

<ItemList as="ul">
  <CardSkeleton chipCount={2} actionCount={2} />
  <CardSkeleton withThumb={false} chipCount={1} />
</ItemList>`

const PICKER = `import { PickerGridSkeleton } from '@objectifthunes/whiteboard'

<PickerGridSkeleton count={8} minItemWidth={120} />`

const CHOICE = `import { ChoiceGroupSkeleton } from '@objectifthunes/whiteboard'

<ChoiceGroupSkeleton count={3} withDescription />`

export default async function SkeletonsPage() {
  return (
    <DocPage
      title="Skeletons"
      lead="Generic primitives plus a small set of composed skeletons. No domain-named widgets — compose what you need."
    >
      <DocSection
        title="Primitives"
        description="Every shape has a primitive: Title, Line, Input, Textarea, Select, Button, IconButton, Chip, Avatar, Thumb, Canvas, plus the base Skeleton if you need custom dimensions."
      >
        <Preview><PrimitivesDemo /></Preview>
        <CodeBlock code={PRIMS} />
      </DocSection>

      <DocSection
        title="PanelFormSkeleton"
        description="A panel body of N input placeholders plus an optional submit button."
      >
        <Preview><PanelFormSkeletonDemo /></Preview>
        <CodeBlock code={PANEL_FORM} />
      </DocSection>

      <DocSection
        title="CardSkeleton"
        description="A composed card placeholder. Toggle the thumbnail, chip row, and action row independently."
      >
        <Preview><CardSkeletonDemo /></Preview>
        <CodeBlock code={CARD} />
      </DocSection>

      <DocSection
        title="PickerGridSkeleton"
        description="A picker grid pre-filled with N placeholder cells. minItemWidth should match the real grid so the layout doesn't jump on swap."
      >
        <Preview><PickerGridSkeletonDemo /></Preview>
        <CodeBlock code={PICKER} />
      </DocSection>

      <DocSection
        title="ChoiceGroupSkeleton"
        description="A ChoiceGroup placeholder. Pass withDescription={true} when your real options have descriptions."
      >
        <Preview><ChoiceGroupSkeletonDemo /></Preview>
        <CodeBlock code={CHOICE} />
      </DocSection>
    </DocPage>
  )
}
