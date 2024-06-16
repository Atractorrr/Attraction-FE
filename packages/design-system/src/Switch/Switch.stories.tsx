import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Switch } from './Switch'

const meta: Meta<typeof Switch> = {
  title: 'UI/Switch',
  component: Switch,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Attraction에서 사용되는 토글 스위치 컴포넌트입니다.',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const SwitchDefault: Story = {
  render: () => <Switch />,
}
