/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from './Checkbox'

const meta: Meta<typeof Checkbox> = {
  title: 'UI/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Attraction에서 사용되는 체크박스 컴포넌트입니다.',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const CheckboxDefault: Story = {
  render: () => (
    <div className="ds-flex ds-items-center ds-space-x-2">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="ds-text-sm ds-font-medium ds-leading-none peer-disabled:ds-cursor-not-allowed peer-disabled:ds-opacity-70">
        Accept terms and conditions
      </label>
    </div>
  ),
}
