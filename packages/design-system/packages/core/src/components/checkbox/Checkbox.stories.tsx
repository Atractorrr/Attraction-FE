/* eslint-disable tailwindcss/no-custom-classname */
import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Checkbox from './Checkbox'
import { $variable } from '../../token'

const meta: Meta<typeof Checkbox> = {
  title: 'Inputs/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Attraction에서 사용되는 체크박스 컴포넌트입니다.',
  },
  argTypes: {
    color: {
      description: '체크박스의 색상을 지정합니다.',
      control: 'select',
      options: ['gray', 'red', 'yellow', 'green', 'blue'],
      table: {
        type: {
          summary: ['gray', 'red', 'yellow', 'green', 'blue'].join(' | '),
        },
        defaultValue: { summary: 'gray' },
      },
    },
    round: {
      description: '체크박스의 모서리 형태를 지정합니다.',
      control: 'select',
      options: ['default', 'full'],
      table: {
        type: { summary: ['default', 'full'].join(' | ') },
        defaultValue: { summary: 'default' },
      },
    },
    disabled: {
      description: '체크박스의 비활성화 상태를 지정합니다.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'undefined' },
      },
    },
    label: {
      description: '체크박스의 레이블을 지정합니다.',
      control: 'text',
      table: {
        type: { summary: ['ReactNode', 'string'].join(' | ') },
        defaultValue: { summary: 'undefined' },
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

const boxStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  padding: '30px',
}

export const CheckboxDefault: Story = {
  render: (props) => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <div style={{ ...boxStyle, width: '50%' }}>
        <Checkbox {...props} />
      </div>
      <div
        className="dark"
        style={{
          ...boxStyle,
          width: '50%',
          backgroundColor: $variable.color.gray800,
        }}>
        <Checkbox {...props} />
      </div>
    </div>
  ),
  args: {
    color: 'gray',
    round: 'default',
  },
}

export const CheckboxRed: Story = {
  render: (props) => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <div style={{ ...boxStyle, width: '50%' }}>
        <Checkbox {...props} />
        <Checkbox {...props} checked />
        <Checkbox {...props} checked disabled />
      </div>
      <div
        className="dark"
        style={{
          ...boxStyle,
          width: '50%',
          backgroundColor: $variable.color.gray800,
        }}>
        <Checkbox {...props} />
        <Checkbox {...props} checked />
        <Checkbox {...props} checked disabled />
      </div>
    </div>
  ),
  args: {
    color: 'red',
    round: 'default',
  },
}

export const CheckboxYellow: Story = {
  render: (props) => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <div style={{ ...boxStyle, width: '50%' }}>
        <Checkbox {...props} />
        <Checkbox {...props} checked />
        <Checkbox {...props} checked disabled />
      </div>
      <div
        className="dark"
        style={{
          ...boxStyle,
          width: '50%',
          backgroundColor: $variable.color.gray800,
        }}>
        <Checkbox {...props} />
        <Checkbox {...props} checked />
        <Checkbox {...props} checked disabled />
      </div>
    </div>
  ),
  args: {
    color: 'yellow',
    round: 'default',
  },
}

export const CheckboxGreen: Story = {
  render: (props) => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <div style={{ ...boxStyle, width: '50%' }}>
        <Checkbox {...props} />
        <Checkbox {...props} checked />
        <Checkbox {...props} checked disabled />
      </div>
      <div
        className="dark"
        style={{
          ...boxStyle,
          width: '50%',
          backgroundColor: $variable.color.gray800,
        }}>
        <Checkbox {...props} />
        <Checkbox {...props} checked />
        <Checkbox {...props} checked disabled />
      </div>
    </div>
  ),
  args: {
    color: 'green',
    round: 'default',
  },
}

export const CheckboxBlue: Story = {
  render: (props) => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <div style={{ ...boxStyle, width: '50%' }}>
        <Checkbox {...props} />
        <Checkbox {...props} checked />
        <Checkbox {...props} checked disabled />
      </div>
      <div
        className="dark"
        style={{
          ...boxStyle,
          width: '50%',
          backgroundColor: $variable.color.gray800,
        }}>
        <Checkbox {...props} />
        <Checkbox {...props} checked />
        <Checkbox {...props} checked disabled />
      </div>
    </div>
  ),
  args: {
    color: 'blue',
    round: 'default',
  },
}

export const CheckboxWithLabel: Story = {
  render: (props) => (
    <div>
      <div style={boxStyle}>
        <Checkbox {...props} />
      </div>
      <div
        className="dark"
        style={{ ...boxStyle, backgroundColor: $variable.color.gray800 }}>
        <Checkbox {...props} />
      </div>
    </div>
  ),
  args: {
    color: 'gray',
    round: 'default',
    label: 'checkbox with label',
  },
}
