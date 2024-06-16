import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './Badge'

const meta: Meta<typeof Badge> = {
  title: 'UI/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Attraction에서 사용되는 뱃지 컴포넌트입니다.',
  },
  argTypes: {
    variant: {
      description: '뱃지의 색상을 지정합니다.',
      control: 'select',
      options: ['default', 'active', 'red', 'yellow', 'green', 'blue'],
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    children: {
      description: '뱃지에 표시할 내용을 입력합니다.',
      control: 'text',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'Badge' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const BadgeDefault: Story = {
  args: {
    variant: 'default',
    children: 'Badge',
  },
}

export const BadgeActive: Story = {
  args: {
    variant: 'active',
    children: 'Badge',
  },
}

export const BadgeRed: Story = {
  args: {
    variant: 'red',
    children: 'Badge',
  },
}

export const BadgeBlue: Story = {
  args: {
    variant: 'blue',
    children: 'Badge',
  },
}

export const BadgeGreen: Story = {
  args: {
    variant: 'green',
    children: 'Badge',
  },
}

export const BadgeYellow: Story = {
  args: {
    variant: 'yellow',
    children: 'Badge',
  },
}
