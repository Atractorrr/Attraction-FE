import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { AspectRatio } from './AspectRatio'

const meta: Meta<typeof AspectRatio> = {
  title: 'UI/AspectRatio',
  component: AspectRatio,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Attraction에서 사용되는 비율 컴포넌트입니다.',
  },
  argTypes: {
    ratio: {
      description: '가로 세로 비율을 지정합니다.',
      control: 'number',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const AspectRatioDefault: Story = {
  render: (args) => (
    <div className="ds-w-[450px] ds-overflow-hidden ds-rounded-xl">
      <AspectRatio {...args}>
        <img
          className="ds-size-full"
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="placeholder"
        />
      </AspectRatio>
    </div>
  ),
}
