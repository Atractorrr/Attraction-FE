import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { useOverlay } from '../../core'
import { Button } from '../button'
import ConfirmDialog from './ConfirmDialog'
import useConfirm from './useConfirm'

const meta: Meta<typeof ConfirmDialog> = {
  title: 'Overlays/ConfirmDialog',
  component: ConfirmDialog,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Attraction에서 사용되는 Confirm Dialog 컴포넌트입니다.',
  },
  argTypes: {
    open: {
      description: 'Dialog를 열고 닫는 옵션을 지정합니다.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'undefined' },
      },
    },
    onClose: {
      description: 'Dialog를 닫는 함수를 지정합니다.',
      table: {
        type: { summary: '() => void' },
        defaultValue: { summary: 'undefined' },
      },
    },
    withoutDimmed: {
      description:
        'true로 지정 시 검은색 배경 없이 렌더링됩니다. Dialog 중첩 시에 사용됩니다',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'undefined' },
      },
    },
    title: {
      description: 'Confirm Dialog의 제목을 지정합니다.',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Attraction' },
      },
    },
    content: {
      description: 'Confirm Dialog의 내용을 지정합니다.',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
    type: {
      description:
        'Confirm Dialog의 타입을 지정합니다. 확인 버튼 색상에 영향을 줍니다.',
      control: 'select',
      options: ['default', 'info', 'success', 'warn', 'danger'],
      table: {
        type: {
          summary: ['default', 'info', 'success', 'warn', 'danger'].join(' | '),
        },
        defaultValue: { summary: 'default' },
      },
    },
    onCancel: {
      description: '취소 버튼 클릭 시 실행시키는 함수를 지정합니다.',
      table: {
        type: { summary: '() => void' },
        defaultValue: { summary: 'undefined' },
      },
    },
    cancelButtonTitle: {
      description: '취소 버튼의 제목을 지정합니다.',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '취소' },
      },
    },
    onConfirm: {
      description: '확인 버튼 클릭 시 실행시키는 함수를 지정합니다.',
      table: {
        type: { summary: '() => void' },
        defaultValue: { summary: 'undefined' },
      },
    },
    confirmButtonTitle: {
      description: '확인 버튼의 제목을 지정합니다.',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '확인' },
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

const style: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.75rem',
}

export const ConfirmDialogDefault: Story = {
  render: (props) => {
    const overlay = useOverlay()
    return (
      <div style={style}>
        <Button
          onClick={() => {
            overlay.open(({ isOpen, close }) => (
              <ConfirmDialog {...props} open={isOpen} onClose={close} />
            ))
          }}>
          Open Confirm
        </Button>
      </div>
    )
  },
  args: {
    content: '확인하시겠습니까?',
  },
}

export const UsingUseConfirmHook: Story = {
  render: () => {
    const [selected, setSelected] = React.useState<boolean | null>(null)
    const confirm = useConfirm()
    return (
      <div style={style}>
        <Button
          onClick={async () => {
            const status = await confirm('확인하시겠습니까?')
            setSelected(status)
          }}>
          Open Confirm
        </Button>
        <p>
          선택됨: {selected === null && '선택 전'}
          {selected === true && '확인'}
          {selected === false && '취소'}
        </p>
      </div>
    )
  },
}

export const ContentWithBreakTag: Story = {
  render: () => {
    const overlay = useOverlay()
    return (
      <div style={style}>
        <Button
          onClick={() => {
            overlay.open(({ isOpen, close }) => (
              <ConfirmDialog
                open={isOpen}
                onClose={close}
                content={`확인하시겠습니까? \n정말 확인하시겠습니까? \n진짜로 확인하시겠습니까?`}
              />
            ))
          }}>
          Open Confirm
        </Button>
      </div>
    )
  },
}
