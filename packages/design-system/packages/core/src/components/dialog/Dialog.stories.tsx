import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { useDebounce } from '@attraction/ds-hooks'
import { useOverlay } from '../../core'
import { Button } from '../button'
import { TextInput } from '../text-input'
import Dialog from './Dialog'

const meta: Meta<typeof Dialog> = {
  title: 'Overlays/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Attraction에서 사용되는 Dialog 컴포넌트입니다.',
  },
  argTypes: {
    size: {
      description: 'Dialog의 크기를 지정합니다.',
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      table: {
        type: { summary: ['xs', 'sm', 'md', 'lg', 'xl'].join(' | ') },
        defaultValue: { summary: 'md' },
      },
    },
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
        'true로 지정 시 검은색 배경 없이 렌더링됩니다. Dialog 중첩 시에 사용됩니다.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'undefined' },
      },
    },
    cancelWithOutsideClick: {
      description:
        'false로 지정 시 검은색 배경을 클릭해도 Dialog가 닫히지 않습니다.',
      table: {
        type: { summary: 'boolean | undefined' },
        defaultValue: { summary: 'true' },
      },
    },
    position: {
      description: 'Dialog가 렌더링되는 위치를 지정합니다.',
      control: 'select',
      options: ['top', 'center'],
      table: {
        type: { summary: ['top', 'center'].join(' | ') },
        defaultValue: { summary: 'center' },
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

const style: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

export const DialogDefault: Story = {
  render: ({ size, withoutDimmed }) => {
    const overlay = useOverlay()
    return (
      <div style={style}>
        <Button
          onClick={() => {
            overlay.open(({ isOpen, close }) => (
              <Dialog
                open={isOpen}
                onClose={close}
                {...{ size, withoutDimmed }}>
                <Dialog.Header>
                  <Dialog.Title>Dialog</Dialog.Title>
                  <Dialog.CloseButton />
                </Dialog.Header>
                <Dialog.Content>Dialog Content</Dialog.Content>
                <Dialog.Footer>
                  <Button variant="light" color="red" onClick={close}>
                    삭제
                  </Button>
                  <Button variant="light" onClick={close}>
                    취소
                  </Button>
                  <Button variant="filled" color="blue" onClick={close}>
                    저장
                  </Button>
                </Dialog.Footer>
              </Dialog>
            ))
          }}>
          Open Dialog
        </Button>
      </div>
    )
  },
}

export const DialogXSmall: Story = {
  render: ({ size }) => {
    const overlay = useOverlay()
    return (
      <div style={style}>
        <Button
          onClick={() => {
            overlay.open(({ isOpen, close }) => (
              <Dialog open={isOpen} onClose={close} size={size}>
                <Dialog.Header style={{ justifyContent: 'center' }}>
                  <Dialog.Title>Dialog</Dialog.Title>
                </Dialog.Header>
                <Dialog.Content style={{ textAlign: 'center' }}>
                  Dialog XSmall Content
                </Dialog.Content>
                <Dialog.Footer>
                  <Button variant="filled" color="blue" onClick={close}>
                    저장
                  </Button>
                  <Button variant="light" onClick={close}>
                    취소
                  </Button>
                  <Button variant="light" color="red" onClick={close}>
                    삭제
                  </Button>
                </Dialog.Footer>
              </Dialog>
            ))
          }}>
          Open Dialog
        </Button>
      </div>
    )
  },
  args: {
    size: 'xs',
  },
}

export const DialogOverlap: Story = {
  render: ({ size }) => {
    const overlay1 = useOverlay()
    const overlay2 = useOverlay()
    return (
      <div style={style}>
        <Button
          onClick={() => {
            overlay1.open(({ isOpen, close }) => (
              <Dialog open={isOpen} onClose={close} size={size}>
                <Dialog.Header>
                  <Dialog.Title>Dialog1</Dialog.Title>
                </Dialog.Header>
                <Dialog.Content>Dialog Overlap1 Content</Dialog.Content>
                <Dialog.Footer>
                  <Button variant="light" onClick={close}>
                    취소
                  </Button>
                  <Button
                    variant="filled"
                    color="blue"
                    onClick={() => {
                      overlay2.open(({ isOpen: isOpen2, close: close2 }) => (
                        <Dialog
                          open={isOpen2}
                          onClose={close2}
                          size={size}
                          withoutDimmed>
                          <Dialog.Header>
                            <Dialog.Title>Dialog2</Dialog.Title>
                          </Dialog.Header>
                          <Dialog.Content>
                            Dialog Overlap2 Content
                          </Dialog.Content>
                          <Dialog.Footer>
                            <Button variant="light" onClick={close2}>
                              취소
                            </Button>
                            <Button
                              variant="filled"
                              color="blue"
                              onClick={close2}>
                              확인
                            </Button>
                          </Dialog.Footer>
                        </Dialog>
                      ))
                    }}>
                    열기
                  </Button>
                </Dialog.Footer>
              </Dialog>
            ))
          }}>
          Open Dialog
        </Button>
      </div>
    )
  },
}

export const DialogWithInput: Story = {
  render: ({ size, withoutDimmed }) => {
    const overlay = useOverlay()
    return (
      <div style={style}>
        <Button
          onClick={() => {
            overlay.open(({ isOpen, close }) => {
              const [value, setValue] = React.useState('')
              const debouncedValue = useDebounce(value, 200)
              return (
                <Dialog
                  open={isOpen}
                  onClose={close}
                  {...{ size, withoutDimmed }}>
                  <Dialog.Header>
                    <Dialog.Title>Dialog</Dialog.Title>
                    <Dialog.CloseButton />
                  </Dialog.Header>
                  <Dialog.Content>
                    <TextInput
                      label="예시 입력"
                      description={debouncedValue ? '참 잘했어요! 👍' : null}
                      placeholder="텍스트를 입력해보세요"
                      state={debouncedValue ? 'success' : 'default'}
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                    />
                  </Dialog.Content>
                  <Dialog.Footer>
                    <Button variant="light" onClick={close}>
                      취소
                    </Button>
                    <Button
                      variant="filled"
                      color="blue"
                      disabled={!value}
                      onClick={close}>
                      저장
                    </Button>
                  </Dialog.Footer>
                </Dialog>
              )
            })
          }}>
          Open Dialog
        </Button>
      </div>
    )
  },
}
