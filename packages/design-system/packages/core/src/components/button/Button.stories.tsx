import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Button from './Button'
import { $variable } from '../../token'

const meta: Meta<typeof Button> = {
  title: 'Buttons/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Attraction에서 사용되는 버튼 컴포넌트입니다.',
  },
  argTypes: {
    variant: {
      description: '버튼의 형태를 지정합니다.',
      control: 'select',
      options: ['default', 'light', 'filled', 'subtle', 'hovering'],
      table: {
        type: {
          summary: ['default', 'light', 'filled', 'subtle', 'hovering'].join(
            ' | ',
          ),
        },
        defaultValue: { summary: 'default' },
      },
    },
    color: {
      description: '버튼의 색상을 지정합니다.',
      control: 'select',
      options: ['gray', 'red', 'yellow', 'green', 'blue'],
      table: {
        type: {
          summary: ['gray', 'red', 'yellow', 'green', 'blue'].join(' | '),
        },
        defaultValue: { summary: 'gray' },
      },
    },
    size: {
      description: '버튼의 크기를 지정합니다.',
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      table: {
        type: { summary: ['xs', 'sm', 'md', 'lg', 'xl'].join(' | ') },
        defaultValue: { summary: 'md' },
      },
    },
    round: {
      description: '버튼의 모서리 형태를 지정합니다.',
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'full'],
      table: {
        type: { summary: ['xs', 'sm', 'md', 'lg', 'xl', 'full'].join(' | ') },
        defaultValue: { summary: 'sm' },
      },
    },
    disabled: {
      description: '버튼의 비활성화 상태를 지정합니다.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    square: {
      description: '버튼을 정사각형 형태로 지정합니다.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'undefined' },
      },
    },
    withoutClickInteraction: {
      description: '버튼 클릭 시 발생하는 클릭 인터랙션을 제거합니다.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'undefined' },
      },
    },
    children: {
      description: '버튼에 표시할 내용을 입력합니다.',
      control: 'text',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'Button' },
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

const style: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  padding: '30px',
}

export const ButtonDefault: Story = {
  render: (props) => (
    <div>
      <div style={style}>
        <Button {...props} />
        <Button {...props} disabled />
      </div>
      <div
        className="dark"
        style={{ ...style, backgroundColor: $variable.color.gray900 }}>
        <Button {...props} />
        <Button {...props} disabled />
      </div>
    </div>
  ),
  args: {
    variant: 'default',
    children: 'Button',
  },
}

export const ButtonLightGray: Story = {
  render: (props) => (
    <div>
      <div style={style}>
        <Button {...props} />
        <Button {...props} disabled />
      </div>
      <div
        className="dark"
        style={{ ...style, backgroundColor: $variable.color.gray800 }}>
        <Button {...props} />
        <Button {...props} disabled />
      </div>
    </div>
  ),
  args: {
    variant: 'light',
    color: 'gray',
    children: 'Button',
  },
}

export const ButtonLightRed: Story = {
  render: (props) => (
    <div>
      <div style={style}>
        <Button {...props} />
        <Button {...props} disabled />
      </div>
      <div
        className="dark"
        style={{ ...style, backgroundColor: $variable.color.gray800 }}>
        <Button {...props} />
        <Button {...props} disabled />
      </div>
    </div>
  ),
  args: {
    variant: 'light',
    color: 'red',
    children: 'Button',
  },
}

export const ButtonLightYellow: Story = {
  render: (props) => (
    <div>
      <div style={style}>
        <Button {...props} />
        <Button {...props} disabled />
      </div>
      <div
        className="dark"
        style={{ ...style, backgroundColor: $variable.color.gray800 }}>
        <Button {...props} />
        <Button {...props} disabled />
      </div>
    </div>
  ),
  args: {
    variant: 'light',
    color: 'yellow',
    children: 'Button',
  },
}

export const ButtonLightGreen: Story = {
  render: (props) => (
    <div>
      <div style={style}>
        <Button {...props} />
        <Button {...props} disabled />
      </div>
      <div
        className="dark"
        style={{ ...style, backgroundColor: $variable.color.gray800 }}>
        <Button {...props} />
        <Button {...props} disabled />
      </div>
    </div>
  ),
  args: {
    variant: 'light',
    color: 'green',
    children: 'Button',
  },
}

export const ButtonLightBlue: Story = {
  render: (props) => (
    <div>
      <div style={style}>
        <Button {...props} />
        <Button {...props} disabled />
      </div>
      <div
        className="dark"
        style={{ ...style, backgroundColor: $variable.color.gray800 }}>
        <Button {...props} />
        <Button {...props} disabled />
      </div>
    </div>
  ),
  args: {
    variant: 'light',
    color: 'blue',
    children: 'Button',
  },
}

export const ButtonFilledGray: Story = {
  render: (props) => (
    <div>
      <div style={style}>
        <Button {...props} />
        <Button {...props} disabled />
      </div>
      <div
        className="dark"
        style={{ ...style, backgroundColor: $variable.color.gray800 }}>
        <Button {...props} />
        <Button {...props} disabled />
      </div>
    </div>
  ),
  args: {
    variant: 'filled',
    color: 'gray',
    children: 'Button',
  },
}

export const ButtonFilledRed: Story = {
  render: (props) => (
    <div>
      <div style={style}>
        <Button {...props} />
        <Button {...props} disabled />
      </div>
      <div
        className="dark"
        style={{ ...style, backgroundColor: $variable.color.gray800 }}>
        <Button {...props} />
        <Button {...props} disabled />
      </div>
    </div>
  ),
  args: {
    variant: 'filled',
    color: 'red',
    children: 'Button',
  },
}

export const ButtonFilledYellow: Story = {
  render: (props) => (
    <div>
      <div style={style}>
        <Button {...props} />
        <Button {...props} disabled />
      </div>
      <div
        className="dark"
        style={{ ...style, backgroundColor: $variable.color.gray800 }}>
        <Button {...props} />
        <Button {...props} disabled />
      </div>
    </div>
  ),
  args: {
    variant: 'filled',
    color: 'yellow',
    children: 'Button',
  },
}

export const ButtonFilledGreen: Story = {
  render: (props) => (
    <div>
      <div style={style}>
        <Button {...props} />
        <Button {...props} disabled />
      </div>
      <div
        className="dark"
        style={{ ...style, backgroundColor: $variable.color.gray800 }}>
        <Button {...props} />
        <Button {...props} disabled />
      </div>
    </div>
  ),
  args: {
    variant: 'filled',
    color: 'green',
    children: 'Button',
  },
}

export const ButtonFilledBlue: Story = {
  render: (props) => (
    <div>
      <div style={style}>
        <Button {...props} />
        <Button {...props} disabled />
      </div>
      <div
        className="dark"
        style={{ ...style, backgroundColor: $variable.color.gray800 }}>
        <Button {...props} />
        <Button {...props} disabled />
      </div>
    </div>
  ),
  args: {
    variant: 'filled',
    color: 'blue',
    children: 'Button',
  },
}

export const ButtonSubtleGray: Story = {
  render: (props) => (
    <div>
      <div style={style}>
        <Button {...props} />
        <Button {...props} disabled />
      </div>
      <div
        className="dark"
        style={{ ...style, backgroundColor: $variable.color.gray800 }}>
        <Button {...props} />
        <Button {...props} disabled />
      </div>
    </div>
  ),
  args: {
    variant: 'subtle',
    color: 'gray',
    children: 'Button',
  },
}

export const ButtonSubtleRed: Story = {
  render: (props) => (
    <div>
      <div style={style}>
        <Button {...props} />
        <Button {...props} disabled />
      </div>
      <div
        className="dark"
        style={{ ...style, backgroundColor: $variable.color.gray800 }}>
        <Button {...props} />
        <Button {...props} disabled />
      </div>
    </div>
  ),
  args: {
    variant: 'subtle',
    color: 'red',
    children: 'Button',
  },
}

export const ButtonSubtleYellow: Story = {
  render: (props) => (
    <div>
      <div style={style}>
        <Button {...props} />
        <Button {...props} disabled />
      </div>
      <div
        className="dark"
        style={{ ...style, backgroundColor: $variable.color.gray800 }}>
        <Button {...props} />
        <Button {...props} disabled />
      </div>
    </div>
  ),
  args: {
    variant: 'subtle',
    color: 'yellow',
    children: 'Button',
  },
}

export const ButtonSubtleGreen: Story = {
  render: (props) => (
    <div>
      <div style={style}>
        <Button {...props} />
        <Button {...props} disabled />
      </div>
      <div
        className="dark"
        style={{ ...style, backgroundColor: $variable.color.gray800 }}>
        <Button {...props} />
        <Button {...props} disabled />
      </div>
    </div>
  ),
  args: {
    variant: 'subtle',
    color: 'green',
    children: 'Button',
  },
}

export const ButtonSubtleBlue: Story = {
  render: (props) => (
    <div>
      <div style={style}>
        <Button {...props} />
        <Button {...props} disabled />
      </div>
      <div
        className="dark"
        style={{ ...style, backgroundColor: $variable.color.gray800 }}>
        <Button {...props} />
        <Button {...props} disabled />
      </div>
    </div>
  ),
  args: {
    variant: 'subtle',
    color: 'blue',
    children: 'Button',
  },
}
