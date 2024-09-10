import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Switch from './Switch'
import { $variable } from '../../token'

const meta: Meta<typeof Switch> = {
  title: 'Inputs/Switch',
  component: Switch,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Attraction에서 사용되는 토글 스위치 컴포넌트입니다.',
  },
  argTypes: {
    color: {
      description: '토글 스위치의 색상을 지정합니다.',
      control: 'select',
      options: ['gray', 'red', 'yellow', 'green', 'blue'],
      table: {
        type: {
          summary: ['gray', 'red', 'yellow', 'green', 'blue'].join(' | '),
        },
        defaultValue: { summary: 'gray' },
      },
    },
    size: {
      description: '토글 스위치의 사이즈 지정합니다.',
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      table: {
        type: {
          summary: ['xs', 'sm', 'md', 'lg', 'xl'].join(' | '),
        },
        defaultValue: { summary: 'md' },
      },
    },
    disabled: {
      description: '토글 스위치의 비활성화 상태를 지정합니다.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
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

export const SwitchDefault: Story = {
  render: (props) => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <div style={{ ...boxStyle, width: '50%' }}>
        <Switch {...props} />
      </div>
      <div
        className="dark"
        style={{
          ...boxStyle,
          width: '50%',
          backgroundColor: $variable.color.gray800,
        }}>
        <Switch {...props} />
      </div>
    </div>
  ),
}

export const SwitchGray: Story = {
  render: (props) => (
    <div>
      <div style={boxStyle}>
        <Switch {...props} />
        <Switch {...props} disabled />
        <Switch {...props} checked />
        <Switch {...props} checked disabled />
      </div>
      <div
        className="dark"
        style={{
          ...boxStyle,
          backgroundColor: $variable.color.gray800,
        }}>
        <Switch {...props} />
        <Switch {...props} disabled />
        <Switch {...props} checked />
        <Switch {...props} checked disabled />
      </div>
    </div>
  ),
  args: {
    color: 'gray',
  },
}

export const SwitchRed: Story = {
  render: (props) => (
    <div>
      <div style={boxStyle}>
        <Switch {...props} />
        <Switch {...props} disabled />
        <Switch {...props} checked />
        <Switch {...props} checked disabled />
      </div>
      <div
        className="dark"
        style={{
          ...boxStyle,
          backgroundColor: $variable.color.gray800,
        }}>
        <Switch {...props} />
        <Switch {...props} disabled />
        <Switch {...props} checked />
        <Switch {...props} checked disabled />
      </div>
    </div>
  ),
  args: {
    color: 'red',
  },
}

export const SwitchYellow: Story = {
  render: (props) => (
    <div>
      <div style={boxStyle}>
        <Switch {...props} />
        <Switch {...props} disabled />
        <Switch {...props} checked />
        <Switch {...props} checked disabled />
      </div>
      <div
        className="dark"
        style={{
          ...boxStyle,
          backgroundColor: $variable.color.gray800,
        }}>
        <Switch {...props} />
        <Switch {...props} disabled />
        <Switch {...props} checked />
        <Switch {...props} checked disabled />
      </div>
    </div>
  ),
  args: {
    color: 'yellow',
  },
}

export const SwitchGreen: Story = {
  render: (props) => (
    <div>
      <div style={boxStyle}>
        <Switch {...props} />
        <Switch {...props} disabled />
        <Switch {...props} checked />
        <Switch {...props} checked disabled />
      </div>
      <div
        className="dark"
        style={{
          ...boxStyle,
          backgroundColor: $variable.color.gray800,
        }}>
        <Switch {...props} />
        <Switch {...props} disabled />
        <Switch {...props} checked />
        <Switch {...props} checked disabled />
      </div>
    </div>
  ),
  args: {
    color: 'green',
  },
}

export const SwitchBlue: Story = {
  render: (props) => (
    <div>
      <div style={boxStyle}>
        <Switch {...props} />
        <Switch {...props} disabled />
        <Switch {...props} checked />
        <Switch {...props} checked disabled />
      </div>
      <div
        className="dark"
        style={{
          ...boxStyle,
          backgroundColor: $variable.color.gray800,
        }}>
        <Switch {...props} />
        <Switch {...props} disabled />
        <Switch {...props} checked />
        <Switch {...props} checked disabled />
      </div>
    </div>
  ),
  args: {
    color: 'blue',
  },
}
