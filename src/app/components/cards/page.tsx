import { CodeBlock } from '@/components/CodeBlock'
import { DocPage } from '@/components/DocPage'
import { DocSection } from '@/components/DocSection'
import { Preview } from '@/components/Preview'
import { ChoiceGroupDemo, ItemListDemo, ListDemo, PickerGridDemo } from './client'

const ITEM = `import { ItemCard, ItemList, CardTitle, MutedText, Stack } from '@objectifthunes/whiteboard'

<ItemList as="ul">
  <ItemCard as="li">
    <Stack size="sm">
      <CardTitle>First item</CardTitle>
      <MutedText>Short description.</MutedText>
    </Stack>
  </ItemCard>
  <ItemCard as="li">…</ItemCard>
</ItemList>`

const LIST = `import { List } from '@objectifthunes/whiteboard'

{/* <ul> with list-style removed and zero padding/margin. */}
<List>
  <li>List item one</li>
  <li>List item two</li>
</List>`

const PICKER = `import { PickerGrid, PickerCard } from '@objectifthunes/whiteboard'

<PickerGrid minItemWidth={120}>
  {items.map(item => (
    <li key={item.id}>
      <PickerCard onClick={() => choose(item)}>
        <Stack size="sm">
          <Thumbnail src={item.thumb} />
          <MutedText size="xs">{item.label}</MutedText>
        </Stack>
      </PickerCard>
    </li>
  ))}
</PickerGrid>`

const CHOICE = `import { ChoiceGroup } from '@objectifthunes/whiteboard'

const [value, setValue] = useState<'a' | 'b' | 'c'>('a')

<ChoiceGroup
  value={value}
  onChange={setValue}
  options={[
    { value: 'a', label: 'First',  description: 'A short hint about this option.' },
    { value: 'b', label: 'Second', description: 'Another hint.' },
    { value: 'c', label: 'Third',  description: 'And a third.' },
  ]}
/>`

export default async function CardsPage() {
  return (
    <DocPage
      title="Cards & lists"
      lead="The card / list primitives — bordered surfaces, picker grids, and a controlled radio-card group."
    >
      <DocSection
        title="ItemCard + ItemList"
        description="ItemCard is a bordered surface. ItemList is a vertical grid of ItemCards with consistent gap."
      >
        <Preview><ItemListDemo /></Preview>
        <CodeBlock code={ITEM} />
      </DocSection>

      <DocSection title="List" description="Reset <ul> — no bullets, no padding. Use when an ItemList is too heavy.">
        <Preview><ListDemo /></Preview>
        <CodeBlock code={LIST} />
      </DocSection>

      <DocSection
        title="PickerGrid + PickerCard"
        description="Responsive auto-fill grid. minItemWidth controls how many columns fit at any width — no opinionated 'characters' or 'library' variants."
      >
        <Preview><PickerGridDemo /></Preview>
        <CodeBlock code={PICKER} />
      </DocSection>

      <DocSection
        title="ChoiceGroup"
        description="A controlled list of radio-style cards. Each option needs value + label, plus optional description and disabled."
      >
        <Preview><ChoiceGroupDemo /></Preview>
        <CodeBlock code={CHOICE} />
      </DocSection>
    </DocPage>
  )
}
