import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import TextInput from './TextInput'
import { $variable } from '../../token'

const meta: Meta<typeof TextInput> = {
  title: 'Inputs/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Attraction에서 사용되는 인풋 컴포넌트입니다.',
  },
  argTypes: {
    state: {
      description: '인풋의 상태를 지정합니다.',
      control: 'select',
      options: ['default', 'danger', 'warn', 'success', 'info'],
      table: {
        type: {
          summary: ['default', 'danger', 'warn', 'success', 'info'].join(' | '),
        },
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      description: '인풋의 크기를 지정합니다.',
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
      table: {
        type: { summary: ['xs', 'sm', 'md', 'lg'].join(' | ') },
        defaultValue: { summary: 'md' },
      },
    },
    round: {
      description: '인풋의 모서리 형태를 지정합니다.',
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'full'],
      table: {
        type: { summary: ['xs', 'sm', 'md', 'lg', 'full'].join(' | ') },
        defaultValue: { summary: 'sm' },
      },
    },
    border: {
      description: '인풋의 테두리 지정 여부를 지정합니다.',
      control: 'select',
      options: ['default', 'none'],
      table: {
        type: { summary: ['default', 'none'].join(' | ') },
        defaultValue: { summary: 'default' },
      },
    },
    disabled: {
      description: '인풋의 비활성화 상태를 지정합니다.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'undefined' },
      },
    },
    withBackground: {
      description: '인풋 배경색의 기본 상태를 지정합니다.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'undefined' },
      },
    },
    required: {
      description: '필수 인풋 여부를 지정합니다. label 옵션과 함께 사용됩니다.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'undefined' },
      },
    },
    label: {
      description: '인풋의 label을 지정합니다.',
      control: 'text',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'undefined' },
      },
    },
    placeholder: {
      description: '인풋의 placeholder를 지정합니다.',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    description: {
      description: '인풋의 설명(하단 텍스트)을 지정합니다.',
      control: 'text',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'undefined' },
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

const style: React.CSSProperties = {
  display: 'block',
  padding: '30px',
  width: '50%',
}

export const TextInputDefault: Story = {
  render: (props) => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <div style={style}>
        <TextInput {...props} />
      </div>
      <div
        className="dark"
        style={{ ...style, backgroundColor: $variable.color.gray800 }}>
        <TextInput {...props} />
      </div>
    </div>
  ),
}
