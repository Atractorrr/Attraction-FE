/* eslint-disable no-alert */

import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { $variable } from '../../token'
import { Select } from '../select'
import SearchInput from './SearchInput'

const meta: Meta<typeof SearchInput> = {
  title: 'Inputs/SearchInput',
  component: SearchInput,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Attraction에서 사용되는 검색 인풋 컴포넌트입니다.',
  },
  argTypes: {
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
    disabled: {
      description: '인풋의 비활성화 상태를 지정합니다.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'undefined' },
      },
    },
    clearOnSubmit: {
      description:
        'true로 지정 시 onSubmit 함수가 실행될 때 onClear 함수가 같이 실행됩니다.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
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
    withClearButton: {
      description: 'clear button을 렌더링합니다.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'undefined' },
      },
    },
    submitButtonPosition: {
      description: 'submit button의 위치를 지정합니다.',
      control: 'select',
      options: ['left', 'right'],
      table: {
        type: { summary: ['left', 'right'].join(' | ') },
        defaultValue: { summary: 'left' },
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
    onClear: {
      description: 'clear button을 클릭했을 때 실행시키는 이벤트를 지정합니다.',
      table: {
        type: { summary: 'React.MouseEventHandler<HTMLButtonElement>' },
        defaultValue: { summary: 'undefined' },
      },
    },
    onSubmit: {
      description:
        '검색 버튼 클릭 또는 엔터키를 입력했을 때 실행시키는 이벤트를 지정합니다.',
      table: {
        type: { summary: 'function' },
        defaultValue: { summary: 'undefined' },
      },
    },
    clearIcon: {
      description: 'clear button의 아이콘을 지정합니다.',
      table: {
        type: {
          summary: '(props: React.SVGProps<SVGSVGElement>) => JSX.Element',
        },
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

export const SearchInputDefault: Story = {
  render: (props) => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <div style={style}>
        <SearchInput {...props} />
      </div>
      <div
        className="dark"
        style={{ ...style, backgroundColor: $variable.color.gray800 }}>
        <SearchInput {...props} />
      </div>
    </div>
  ),
  args: {
    onSubmit: () => alert('on submit !!!'),
    onClear: () => alert('on clear !!!'),
  },
}

export const SearchInputWithSelect: Story = {
  render: (props) => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <div style={style}>
        <SearchInput.WithSelect>
          <Select
            size="xs"
            border="none"
            round="xs"
            defaultValue="title"
            style={{ width: '6.25rem' }}>
            <Select.Option value="title">제목</Select.Option>
            <Select.Option value="content">내용</Select.Option>
          </Select>
          <SearchInput.Divider />
          <SearchInput {...props} />
        </SearchInput.WithSelect>
      </div>
    </div>
  ),
  args: {
    onSubmit: () => alert('on submit !!!'),
    onClear: () => alert('on clear !!!'),
    size: 'sm',
    submitButtonPosition: 'right',
    withClearButton: true,
  },
}
