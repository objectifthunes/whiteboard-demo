'use client'

import { useState } from 'react'
import {
  CardTitle,
  ChoiceGroup,
  ItemCard,
  ItemList,
  List,
  MutedText,
  PickerCard,
  PickerGrid,
  Stack,
} from '@objectifthunes/whiteboard'

export function ItemListDemo() {
  return (
    <ItemList as="ul">
      <ItemCard as="li">
        <Stack size="sm">
          <CardTitle>First item</CardTitle>
          <MutedText>Short description.</MutedText>
        </Stack>
      </ItemCard>
      <ItemCard as="li">
        <Stack size="sm">
          <CardTitle>Second item</CardTitle>
          <MutedText>Short description.</MutedText>
        </Stack>
      </ItemCard>
    </ItemList>
  )
}

export function ListDemo() {
  return (
    <List>
      <li>List item one</li>
      <li>List item two</li>
      <li>List item three</li>
    </List>
  )
}

export function PickerGridDemo() {
  return (
    <PickerGrid minItemWidth={120}>
      {Array.from({ length: 6 }).map((_, i) => (
        <li key={i}>
          <PickerCard>
            <Stack size="sm">
              <div style={{ aspectRatio: '1 / 1', background: 'var(--wb-surface-muted)', borderRadius: 'var(--wb-radius-sm)' }} />
              <MutedText size="xs">Item {i + 1}</MutedText>
            </Stack>
          </PickerCard>
        </li>
      ))}
    </PickerGrid>
  )
}

export function ChoiceGroupDemo() {
  const [value, setValue] = useState<'a' | 'b' | 'c'>('a')
  return (
    <ChoiceGroup
      value={value}
      onChange={setValue}
      options={[
        { value: 'a', label: 'First', description: 'A short hint about this option.' },
        { value: 'b', label: 'Second', description: 'Another hint.' },
        { value: 'c', label: 'Third', description: 'And a third.' },
      ]}
    />
  )
}
