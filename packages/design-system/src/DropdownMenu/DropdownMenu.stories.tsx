import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from '@storybook/preview-api'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from './DropdownMenu'

const meta: Meta<typeof DropdownMenu> = {
  title: 'UI/DropdownMenu',
  component: DropdownMenu,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Attraction에서 사용되는 드롭다운 컴포넌트입니다.',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const DropdownDefault: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="ds-rounded-md ds-border ds-px-2 ds-py-1"
          type="button">
          Open
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="ds-w-60">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <span>Profile</span>
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>Billing</span>
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>Settings</span>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>Keyboard shortcuts</span>
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

export const DropdownWithCheckbox: Story = {
  render: () => {
    const [statusBar, setStatusBar] = useState<boolean>(false)
    const [activityBar, setActivityBar] = useState<boolean>(true)

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            className="ds-rounded-md ds-border ds-px-2 ds-py-1"
            type="button">
            Open
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="ds-w-60">
          <DropdownMenuGroup>
            <DropdownMenuCheckboxItem
              checked={statusBar}
              onCheckedChange={() => setStatusBar((prev) => !prev)}>
              Status Bar
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked={false} disabled>
              Disabled Bar
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={activityBar}
              onCheckedChange={() => setActivityBar((prev) => !prev)}>
              Activity Bar
            </DropdownMenuCheckboxItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
}

export const DropdownWithRadioGroup: Story = {
  render: () => {
    const [position, setPosition] = React.useState('bottom')

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            className="ds-rounded-md ds-border ds-px-2 ds-py-1"
            type="button">
            Open
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="ds-w-56">
          <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
}

export const DropdownWithSubmenu: Story = {
  render: () => {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            className="ds-rounded-md ds-border ds-px-2 ds-py-1"
            type="button">
            Open
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="ds-w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <span>Profile</span>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Billing</span>
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Settings</span>
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Keyboard shortcuts</span>
              <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <span>Team</span>
            </DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <span>Invite users</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>
                    <span>Email</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Message</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <span>More...</span>
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <DropdownMenuItem>
              <span>New Team</span>
              <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <span>GitHub</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>Support</span>
          </DropdownMenuItem>
          <DropdownMenuItem disabled>
            <span>API</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <span>Log out</span>
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
}
