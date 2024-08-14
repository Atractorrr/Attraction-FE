/* eslint-disable tailwindcss/no-custom-classname */
import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Chip from './Chip'
import { $variable } from '../../token'

const meta: Meta<typeof Chip> = {
  title: 'Inputs/Chip',
  component: Chip,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Attraction에서 사용되는 칩 컴포넌트입니다.',
  },
  argTypes: {
    color: {
      description: '칩의 색상을 지정합니다.',
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
      description: '칩의 사이즈 지정합니다.',
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
      table: {
        type: {
          summary: ['xs', 'sm', 'md', 'lg'].join(' | '),
        },
        defaultValue: { summary: 'md' },
      },
    },
    round: {
      description: '칩의 모서리 형태를 지정합니다.',
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'full'],
      table: {
        type: {
          summary: ['xs', 'sm', 'md', 'lg', 'xl', 'full'].join(' | '),
        },
        defaultValue: { summary: 'full' },
      },
    },
    disabled: {
      description: '칩의 비활성화 상태를 지정합니다.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'undefined' },
      },
    },
    withIcon: {
      description: '칩의 체크 아이콘 표시 여부를 지정합니다.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'undefined' },
      },
    },
    children: {
      description: '칩에 표시할 내용을 입력합니다.',
      control: 'text',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'Chip' },
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
        <Chip {...props} />
      </div>
      <div
        className="dark"
        style={{
          ...boxStyle,
          width: '50%',
          backgroundColor: $variable.color.gray800,
        }}>
        <Chip {...props} />
      </div>
    </div>
  ),
  args: {
    children: 'chip',
  },
}
