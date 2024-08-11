/* eslint-disable tailwindcss/no-custom-classname */
import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Badge from './Badge'
import { $variable } from '../../token'

const meta: Meta<typeof Badge> = {
  title: 'Data Display/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Attraction에서 사용되는 뱃지 컴포넌트입니다.',
  },
  argTypes: {
    variant: {
      description: '뱃지의 형태를 지정합니다.',
      control: 'select',
      options: ['light', 'filled', 'hovering'],
      table: {
        type: {
          summary: ['light', 'filled', 'hovering'].join(' | '),
        },
        defaultValue: { summary: 'light' },
      },
    },
    color: {
      description: '뱃지의 색상을 지정합니다.',
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
      description: '뱃지의 크기를 지정합니다.',
      control: 'select',
      options: ['sm', 'md', 'lg'],
      table: {
        type: { summary: ['sm', 'md', 'lg'].join(' | ') },
        defaultValue: { summary: 'md' },
      },
    },
    round: {
      description: '뱃지의 모서리 형태를 지정합니다.',
      control: 'select',
      options: ['sm', 'md', 'lg', 'full'],
      table: {
        type: { summary: ['sm', 'md', 'lg', 'full'].join(' | ') },
        defaultValue: { summary: 'sm' },
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

const boxStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '50%',
  padding: '30px',
}

export const BadgeDefault: Story = {
  render: (props) => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <div style={boxStyle}>
        <Badge {...props} />
      </div>
      <div
        className="dark"
        style={{ ...boxStyle, backgroundColor: $variable.color.gray800 }}>
        <Badge {...props} />
      </div>
    </div>
  ),
  args: {
    variant: 'light',
    children: 'Badge',
  },
}

export const BadgeLightRed: Story = {
  render: (props) => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <div style={boxStyle}>
        <Badge {...props} />
      </div>
      <div
        className="dark"
        style={{ ...boxStyle, backgroundColor: $variable.color.gray800 }}>
        <Badge {...props} />
      </div>
    </div>
  ),
  args: {
    variant: 'light',
    color: 'red',
    children: 'Badge',
  },
}

export const BadgeLightYellow: Story = {
  render: (props) => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <div style={boxStyle}>
        <Badge {...props} />
      </div>
      <div
        className="dark"
        style={{ ...boxStyle, backgroundColor: $variable.color.gray800 }}>
        <Badge {...props} />
      </div>
    </div>
  ),
  args: {
    variant: 'light',
    color: 'yellow',
    children: 'Badge',
  },
}

export const BadgeLightGreen: Story = {
  render: (props) => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <div style={boxStyle}>
        <Badge {...props} />
      </div>
      <div
        className="dark"
        style={{ ...boxStyle, backgroundColor: $variable.color.gray800 }}>
        <Badge {...props} />
      </div>
    </div>
  ),
  args: {
    variant: 'light',
    color: 'green',
    children: 'Badge',
  },
}

export const BadgeLightBlue: Story = {
  render: (props) => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <div style={boxStyle}>
        <Badge {...props} />
      </div>
      <div
        className="dark"
        style={{ ...boxStyle, backgroundColor: $variable.color.gray800 }}>
        <Badge {...props} />
      </div>
    </div>
  ),
  args: {
    variant: 'light',
    color: 'blue',
    children: 'Badge',
  },
}

export const BadgeFilledGray: Story = {
  render: (props) => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <div style={boxStyle}>
        <Badge {...props} />
      </div>
      <div
        className="dark"
        style={{ ...boxStyle, backgroundColor: $variable.color.gray800 }}>
        <Badge {...props} />
      </div>
    </div>
  ),
  args: {
    variant: 'filled',
    color: 'gray',
    children: 'Badge',
  },
}

export const BadgeFilledRed: Story = {
  render: (props) => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <div style={boxStyle}>
        <Badge {...props} />
      </div>
      <div
        className="dark"
        style={{ ...boxStyle, backgroundColor: $variable.color.gray800 }}>
        <Badge {...props} />
      </div>
    </div>
  ),
  args: {
    variant: 'filled',
    color: 'red',
    children: 'Badge',
  },
}

export const BadgeFilledYellow: Story = {
  render: (props) => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <div style={boxStyle}>
        <Badge {...props} />
      </div>
      <div
        className="dark"
        style={{ ...boxStyle, backgroundColor: $variable.color.gray800 }}>
        <Badge {...props} />
      </div>
    </div>
  ),
  args: {
    variant: 'filled',
    color: 'yellow',
    children: 'Badge',
  },
}

export const BadgeFilledGreen: Story = {
  render: (props) => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <div style={boxStyle}>
        <Badge {...props} />
      </div>
      <div
        className="dark"
        style={{ ...boxStyle, backgroundColor: $variable.color.gray800 }}>
        <Badge {...props} />
      </div>
    </div>
  ),
  args: {
    variant: 'filled',
    color: 'green',
    children: 'Badge',
  },
}

export const BadgeFilledBlue: Story = {
  render: (props) => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <div style={boxStyle}>
        <Badge {...props} />
      </div>
      <div
        className="dark"
        style={{ ...boxStyle, backgroundColor: $variable.color.gray800 }}>
        <Badge {...props} />
      </div>
    </div>
  ),
  args: {
    variant: 'filled',
    color: 'blue',
    children: 'Badge',
  },
}
