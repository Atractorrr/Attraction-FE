import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Separator } from './Separator'

const meta: Meta<typeof Separator> = {
  title: 'UI/Separator',
  component: Separator,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Attraction에서 사용되는 구분선 컴포넌트입니다.',
  },
  argTypes: {
    orientation: {
      description: '구분선의 방향을 지정합니다.',
      table: {
        type: { summary: 'horizontal | vertical' },
        defaultValue: { summary: 'horizontal' },
      },
    },
    decorative: {
      description: '추가 정보가 없는 장식적인 요소임을 나타냅니다.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: '-' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const SeparatorDefault: Story = {
  render: () => (
    <div>
      <div className="ds-space-y-1">
        <h4 className="ds-text-sm ds-font-medium ds-leading-none">
          Radix Primitives
        </h4>
        <p className="ds-text-muted-foreground ds-text-sm">
          An open-source UI component library.
        </p>
      </div>
      <Separator className="ds-my-4" />
      <div className="ds-flex ds-h-5 ds-items-center ds-space-x-4 ds-text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  ),
}
