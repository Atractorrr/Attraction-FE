/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { RadioGroup, RadioGroupItem } from './RadioGroup'

const meta: Meta<typeof RadioGroup> = {
  title: 'UI/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Attraction에서 사용되는 버튼 그룹 컴포넌트입니다.',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const RadioGroupDefault: Story = {
  render: () => (
    <RadioGroup
      className="ds-flex ds-flex-col ds-gap-y-2"
      defaultValue="comfortable">
      <div className="ds-flex ds-items-center ds-space-x-2">
        <RadioGroupItem value="default" id="r1" />
        <label
          className="ds-text-sm ds-font-medium ds-leading-none peer-disabled:ds-cursor-not-allowed peer-disabled:ds-opacity-70"
          htmlFor="r1">
          Default
        </label>
      </div>
      <div className="ds-flex ds-items-center ds-space-x-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <label
          className="ds-text-sm ds-font-medium ds-leading-none peer-disabled:ds-cursor-not-allowed peer-disabled:ds-opacity-70"
          htmlFor="r2">
          Comfortable
        </label>
      </div>
      <div className="ds-flex ds-items-center ds-space-x-2">
        <RadioGroupItem value="compact" id="r3" />
        <label
          className="ds-text-sm ds-font-medium ds-leading-none peer-disabled:ds-cursor-not-allowed peer-disabled:ds-opacity-70"
          htmlFor="r3">
          Compact
        </label>
      </div>
    </RadioGroup>
  ),
}
