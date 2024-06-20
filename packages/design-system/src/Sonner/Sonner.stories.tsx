import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { toast } from 'sonner'
import { Toaster } from './Sonner'

const meta: Meta<typeof Toaster> = {
  title: 'UI/Sonner',
  component: Toaster,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Attraction에서 사용되는 토스트 컴포넌트입니다.',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const SonnerExample: Story = {
  render: () => {
    return (
      <div>
        <Toaster />
        <button
          type="button"
          onClick={() =>
            toast('Event has been created', {
              description: 'Sunday, December 03, 2023 at 9:00 AM',
              action: {
                label: 'Undo',
                // eslint-disable-next-line no-console
                onClick: () => console.log('Undo'),
              },
            })
          }>
          Show Toast
        </button>
      </div>
    )
  },
}
