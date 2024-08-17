import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { $variable } from '../../token'
import { Button } from '../button'
import CopyButton from './CopyButton'

const meta: Meta<typeof CopyButton> = {
  title: 'Buttons/CopyButton',
  component: CopyButton,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Attraction에서 사용되는 버튼 컴포넌트입니다.',
  },
  argTypes: {
    value: {
      description: '복사할 텍스트를 지정합니다.',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
    delay: {
      description:
        '복사 성공 시 status가 다시 원상복구 되는 시간(ms)을 지정합니다.',
      control: 'number',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '800' },
      },
    },
    children: {
      description:
        'render props 패턴을 통해 상태를 위임받을 버튼 컴포넌트를 렌더링합니다.',
      control: 'text',
      table: {
        type: { summary: '({ status, copy }) => ReactNode' },
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const CopyButtonDefault: Story = {
  render: ({ value, delay, onSuccess, onFailed }) => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: '30px',
      }}>
      <CopyButton
        value={value || 'example text'}
        delay={delay}
        {...{ onSuccess, onFailed }}>
        {({ status, copy }) => (
          <Button
            disabled={status}
            onClick={copy}
            style={{
              width: '180px',
              color: status ? $variable.color.green400 : undefined,
            }}>
            {status ? 'success!!!' : 'copy button'}
          </Button>
        )}
      </CopyButton>
    </div>
  ),
}
