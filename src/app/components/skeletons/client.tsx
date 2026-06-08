'use client'

import {
  AvatarSkeleton,
  ButtonRow,
  ButtonSkeleton,
  CanvasSkeleton,
  CardSkeleton,
  ChipSkeleton,
  ChoiceGroupSkeleton,
  IconButtonSkeleton,
  InputSkeleton,
  ItemList,
  LineSkeleton,
  PanelFormSkeleton,
  PickerGridSkeleton,
  SelectSkeleton,
  Skeleton,
  Stack,
  TextareaSkeleton,
  ThumbSkeleton,
  TitleSkeleton,
} from '@objectifthunes/whiteboard'

export function PrimitivesDemo() {
  return (
    <Stack>
      <TitleSkeleton />
      <LineSkeleton />
      <LineSkeleton short />
      <Stack size="sm">
        <InputSkeleton />
        <TextareaSkeleton />
        <SelectSkeleton />
      </Stack>
      <ButtonRow>
        <ButtonSkeleton />
        <ButtonSkeleton />
        <IconButtonSkeleton />
      </ButtonRow>
      <div style={{ display: 'flex', gap: 8 }}>
        <ChipSkeleton />
        <AvatarSkeleton />
        <ThumbSkeleton style={{ width: 80 }} />
      </div>
      <div style={{ height: 80 }}><CanvasSkeleton /></div>
      <Skeleton style={{ height: 24 }} radius="pill" />
    </Stack>
  )
}

export function PanelFormSkeletonDemo() {
  return <PanelFormSkeleton inputs={3} showButton />
}

export function CardSkeletonDemo() {
  return (
    <ItemList as="ul">
      <CardSkeleton chipCount={2} actionCount={2} />
      <CardSkeleton withThumb={false} chipCount={1} />
    </ItemList>
  )
}

export function PickerGridSkeletonDemo() {
  return <PickerGridSkeleton count={6} minItemWidth={120} />
}

export function ChoiceGroupSkeletonDemo() {
  return <ChoiceGroupSkeleton count={3} withDescription />
}
