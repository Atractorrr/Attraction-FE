import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Select from './Select'
import { $variable } from '../../token'

const meta: Meta<typeof Select> = {
  title: 'Inputs/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Attraction에서 사용되는 셀렉트 박스 컴포넌트입니다.',
  },
  argTypes: {
    state: {
      description: '셀렉트 박스의 상태를 지정합니다.',
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
      description: '셀렉트 박스의 크기를 지정합니다.',
      control: 'select',
      options: ['md', 'lg'],
      table: {
        type: { summary: ['md', 'lg'].join(' | ') },
        defaultValue: { summary: 'md' },
      },
    },
    round: {
      description: '셀렉트 박스의 모서리 형태를 지정합니다.',
      control: 'select',
      options: ['xs', 'sm', 'md'],
      table: {
        type: { summary: ['xs', 'sm', 'md'].join(' | ') },
        defaultValue: { summary: 'sm' },
      },
    },
    disabled: {
      description: '셀렉트 박스의 비활성화 상태를 지정합니다.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'undefined' },
      },
    },
    withBackground: {
      description: '셀렉트 박스 배경색의 기본 상태를 지정합니다.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'undefined' },
      },
    },
    required: {
      description: '필수 입력 여부를 지정합니다. label 옵션과 함께 사용됩니다.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'undefined' },
      },
    },
    mobile: {
      description: '모바일 여부를 지정합니다. 옵션의 스타일에 영향을 줍니다.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'undefined' },
      },
    },
    label: {
      description: '셀렉트 박스의 label을 지정합니다.',
      control: 'text',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'undefined' },
      },
    },
    value: {
      description: '셀렉트 박스의 value를 지정합니다.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    onChange: {
      description:
        '셀렉트 박스의 value가 바뀔 때마다 실행되는 함수를 지정합니다.',
      table: {
        type: { summary: '(value: string) => void' },
        defaultValue: { summary: 'undefined' },
      },
    },
    placeholder: {
      description: '셀렉트 박스의 placeholder를 지정합니다.',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    description: {
      description: '셀렉트 박스의 설명(하단 텍스트)을 지정합니다.',
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

type Library = 'React' | 'Vue' | 'Angular' | 'Svelte' | ''

export const SelectDefault: Story = {
  render: (props) => {
    const [lib, setLib] = React.useState<Library>('React')
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <div style={style}>
          <Select
            {...props}
            value={lib}
            onChange={(value) => setLib(value as Library)}>
            <Select.Option value="React" />
            <Select.Option value="Vue" />
            <Select.Option value="Angular" />
            <Select.Option value="Svelte" />
          </Select>
        </div>
        <div
          className="dark"
          style={{ ...style, backgroundColor: $variable.color.gray800 }}>
          <Select {...props}>
            <Select.Option value="React" />
            <Select.Option value="Vue" />
            <Select.Option value="Angular" />
            <Select.Option value="Svelte" />
          </Select>
        </div>
      </div>
    )
  },
}

export const SelectWithLabel: Story = {
  render: (props) => {
    const [selected, setSelected] = React.useState('')
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <div style={{ width: '50%' }}>
          <Select {...props} onChange={setSelected}>
            <Select.Option value="React">리액트</Select.Option>
            <Select.Option value="Vue">뷰</Select.Option>
            <Select.Option value="Angular">앵귤러</Select.Option>
            <Select.Option value="Svelte">스벨트</Select.Option>
          </Select>
          <p>선택됨: {selected || '없음'}</p>
        </div>
      </div>
    )
  },
}

export const SelectWithScroll: Story = {
  render: (props) => {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Select {...props} style={{ width: '50%' }}>
          <Select.Option value="React" />
          <Select.Option value="Vue" />
          <Select.Option value="Angular" />
          <Select.Option value="Svelte" />
        </Select>
      </div>
    )
  },
}
