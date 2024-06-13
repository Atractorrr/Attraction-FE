import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ScrollArea } from './ScrollArea'

const meta: Meta<typeof ScrollArea> = {
  title: 'UI/ScrollArea',
  component: ScrollArea,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Attraction에서 사용되는 스크롤 영역 컴포넌트입니다.',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const ScrollAreaDefault: Story = {
  render: () => (
    <ScrollArea className="ds-h-[200px] ds-w-[350px] ds-rounded-md ds-border ds-p-4">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </ScrollArea>
  ),
}
