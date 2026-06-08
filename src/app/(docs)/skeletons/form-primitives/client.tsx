'use client'

import {
  ButtonRow,
  ButtonSkeleton,
  IconButtonSkeleton,
  InputSkeleton,
  SelectSkeleton,
  Stack,
  TextareaSkeleton,
} from '@objectifthunes/whiteboard'

export function Demo() {
  return (
    <Stack>
      <InputSkeleton />
      <TextareaSkeleton />
      <SelectSkeleton />
      <ButtonRow>
        <ButtonSkeleton />
        <ButtonSkeleton />
        <IconButtonSkeleton />
      </ButtonRow>
    </Stack>
  )
}
