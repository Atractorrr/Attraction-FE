import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Checkbox from './Checkbox'

const meta: Meta<typeof Checkbox> = {
  title: 'UI/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Attraction에서 사용되는 체크박스 컴포넌트입니다.',
  },
  argTypes: {
    color: {
      description: '체크박스의 색상을 지정합니다.',
      control: 'select',
      options: ['default', 'red', 'yellow', 'green', 'blue'],
      table: {
        type: { summary: 'default | red | yellow | green | blue' },
        defaultValue: { summary: 'default' },
      },
    },
    label: {
      description: '체크박스 옆에 표시할 레이블을 입력합니다.',
      control: 'text',
      table: {
        defaultValue: { summary: 'Badge' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const CheckboxDefault: Story = {
  render: (args) => <Checkbox {...args} />,
}

export const CheckboxRed: Story = {
  render: () => <Checkbox color="red" />,
}

export const CheckboxYellow: Story = {
  render: () => <Checkbox color="yellow" />,
}

export const CheckboxGreen: Story = {
  render: () => <Checkbox color="green" />,
}

export const CheckboxBlue: Story = {
  render: () => <Checkbox color="blue" />,
}

export const CheckboxWithLabel: Story = {
  render: () => (
    <Checkbox color="default" label="this is attraction checkbox" />
  ),
}
