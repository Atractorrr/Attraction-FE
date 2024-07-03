import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryObj } from '@storybook/react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './Dialog'

const meta: Meta<typeof Dialog> = {
  title: 'UI/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Attraction에서 사용되는 토스트 컴포넌트입니다.',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const DialogExample: Story = {
  render: () => {
    return (
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    )
  },
}
