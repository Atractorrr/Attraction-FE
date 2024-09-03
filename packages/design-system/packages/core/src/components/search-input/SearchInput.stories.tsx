/* eslint-disable no-alert */

import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import SearchInput from './SearchInput'
import { $variable } from '../../token'

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
      options: ['md', 'lg'],
      table: {
        type: { summary: ['md', 'lg'].join(' | ') },
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
    withBackground: {
      description: '인풋 배경색의 기본 상태를 지정합니다.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'undefined' },
      },
    },
    withClearButton: {
      description: '검색어를 지우는 버튼을 렌더링합니다.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
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
    onClear: {
      description: 'clear button을 클릭했을 때 실행시키는 이벤트를 지정합니다.',
      table: {
        type: { summary: 'function' },
        defaultValue: { summary: 'undefined' },
      },
    },
    onEnter: {
      description: '엔터키를 입력했을 때 실행시키는 이벤트를 지정합니다.',
      table: {
        type: { summary: 'function' },
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
    onEnter: () => alert('on enter !!!'),
    onClear: () => alert('on clear !!!'),
  },
}
