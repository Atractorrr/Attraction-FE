import React from 'react'
import { $variable } from '../../token'
import { rem } from '../../core'
import styles from './Button.module.scss'

export const buttonClassName = styles['ds-button']

export const buttonVariants = {
  variant: {
    default: {
      gray: {
        light: {
          default: {
            color: $variable.color.gray700,
            border: $variable.color.gray100,
            background: $variable.color.gray000,
          },
          active: {
            color: $variable.color.gray700,
            border: $variable.color.gray100,
            background: $variable.color.gray100,
          },
          disabled: {
            color: $variable.color.gray400,
            border: $variable.color.gray100,
            background: $variable.color.gray000,
          },
        },
        dark: {
          default: {
            color: $variable.color.gray050,
            border: $variable.color.gray800,
            background: $variable.color.gray800,
          },
          active: {
            color: $variable.color.gray050,
            border: $variable.color.gray700,
            background: $variable.color.gray700,
          },
          disabled: {
            color: $variable.color.gray500,
            border: $variable.color.gray800,
            background: $variable.color.gray800,
          },
        },
      },
      red: {
        light: {
          default: {
            color: $variable.color.red400,
            border: $variable.color.gray100,
            background: $variable.color.gray000,
          },
          active: {
            color: $variable.color.red400,
            border: $variable.color.gray100,
            background: $variable.color.gray100,
          },
          disabled: {
            color: $variable.color.red200,
            border: $variable.color.gray100,
            background: $variable.color.gray000,
          },
        },
        dark: {
          default: {
            color: $variable.color.red300,
            border: $variable.color.gray800,
            background: $variable.color.gray800,
          },
          active: {
            color: $variable.color.red300,
            border: $variable.color.gray700,
            background: $variable.color.gray700,
          },
          disabled: {
            color: $variable.color.red700,
            border: $variable.color.gray800,
            background: $variable.color.gray800,
          },
        },
      },
      yellow: {
        light: {
          default: {
            color: $variable.color.yellow400,
            border: $variable.color.gray100,
            background: $variable.color.gray000,
          },
          active: {
            color: $variable.color.yellow400,
            border: $variable.color.gray100,
            background: $variable.color.gray100,
          },
          disabled: {
            color: $variable.color.yellow200,
            border: $variable.color.gray100,
            background: $variable.color.gray000,
          },
        },
        dark: {
          default: {
            color: $variable.color.yellow300,
            border: $variable.color.gray800,
            background: $variable.color.gray800,
          },
          active: {
            color: $variable.color.yellow300,
            border: $variable.color.gray700,
            background: $variable.color.gray700,
          },
          disabled: {
            color: $variable.color.yellow700,
            border: $variable.color.gray800,
            background: $variable.color.gray800,
          },
        },
      },
      green: {
        light: {
          default: {
            color: $variable.color.green400,
            border: $variable.color.gray100,
            background: $variable.color.gray000,
          },
          active: {
            color: $variable.color.green400,
            border: $variable.color.gray100,
            background: $variable.color.gray100,
          },
          disabled: {
            color: $variable.color.green200,
            border: $variable.color.gray100,
            background: $variable.color.gray000,
          },
        },
        dark: {
          default: {
            color: $variable.color.green300,
            border: $variable.color.gray800,
            background: $variable.color.gray800,
          },
          active: {
            color: $variable.color.green300,
            border: $variable.color.gray700,
            background: $variable.color.gray700,
          },
          disabled: {
            color: $variable.color.green700,
            border: $variable.color.gray800,
            background: $variable.color.gray800,
          },
        },
      },
      blue: {
        light: {
          default: {
            color: $variable.color.blue400,
            border: $variable.color.gray100,
            background: $variable.color.gray000,
          },
          active: {
            color: $variable.color.blue400,
            border: $variable.color.gray100,
            background: $variable.color.gray100,
          },
          disabled: {
            color: $variable.color.blue200,
            border: $variable.color.gray100,
            background: $variable.color.gray000,
          },
        },
        dark: {
          default: {
            color: $variable.color.blue300,
            border: $variable.color.gray800,
            background: $variable.color.gray800,
          },
          active: {
            color: $variable.color.blue300,
            border: $variable.color.gray700,
            background: $variable.color.gray700,
          },
          disabled: {
            color: $variable.color.blue600,
            border: $variable.color.gray800,
            background: $variable.color.gray800,
          },
        },
      },
    },
    light: {
      gray: {
        light: {
          default: {
            color: $variable.color.gray700,
            border: $variable.color.gray050,
            background: $variable.color.gray050,
          },
          active: {
            color: $variable.color.gray700,
            border: $variable.color.gray100,
            background: $variable.color.gray100,
          },
          disabled: {
            color: $variable.color.gray400,
            border: $variable.color.gray050,
            background: $variable.color.gray050,
          },
        },
        dark: {
          default: {
            color: $variable.color.gray050,
            border: $variable.color.gray700,
            background: $variable.color.gray700,
          },
          active: {
            color: $variable.color.gray050,
            border: $variable.color.gray600,
            background: $variable.color.gray600,
          },
          disabled: {
            color: $variable.color.gray500,
            border: $variable.color.gray700,
            background: $variable.color.gray700,
          },
        },
      },
      red: {
        light: {
          default: {
            color: $variable.color.red400,
            border: $variable.color.red050,
            background: $variable.color.red050,
          },
          active: {
            color: $variable.color.red400,
            border: $variable.color.red100,
            background: $variable.color.red100,
          },
          disabled: {
            color: $variable.color.red200,
            border: $variable.color.red050,
            background: $variable.color.red050,
          },
        },
        dark: {
          default: {
            color: $variable.color.red300,
            border: $variable.color.red800,
            background: $variable.color.red800,
          },
          active: {
            color: $variable.color.red300,
            border: $variable.color.red700,
            background: $variable.color.red700,
          },
          disabled: {
            color: $variable.color.red600,
            border: $variable.color.red800,
            background: $variable.color.red800,
          },
        },
      },
      yellow: {
        light: {
          default: {
            color: $variable.color.yellow400,
            border: $variable.color.yellow050,
            background: $variable.color.yellow050,
          },
          active: {
            color: $variable.color.yellow400,
            border: $variable.color.yellow100,
            background: $variable.color.yellow100,
          },
          disabled: {
            color: $variable.color.yellow200,
            border: $variable.color.yellow050,
            background: $variable.color.yellow050,
          },
        },
        dark: {
          default: {
            color: $variable.color.yellow300,
            border: $variable.color.yellow800,
            background: $variable.color.yellow800,
          },
          active: {
            color: $variable.color.yellow300,
            border: $variable.color.yellow700,
            background: $variable.color.yellow700,
          },
          disabled: {
            color: $variable.color.yellow700,
            border: $variable.color.yellow800,
            background: $variable.color.yellow800,
          },
        },
      },
      green: {
        light: {
          default: {
            color: $variable.color.green400,
            border: $variable.color.green050,
            background: $variable.color.green050,
          },
          active: {
            color: $variable.color.green400,
            border: $variable.color.green100,
            background: $variable.color.green100,
          },
          disabled: {
            color: $variable.color.green200,
            border: $variable.color.green050,
            background: $variable.color.green050,
          },
        },
        dark: {
          default: {
            color: $variable.color.green300,
            border: $variable.color.green800,
            background: $variable.color.green800,
          },
          active: {
            color: $variable.color.green300,
            border: $variable.color.green700,
            background: $variable.color.green700,
          },
          disabled: {
            color: $variable.color.green700,
            border: $variable.color.green800,
            background: $variable.color.green800,
          },
        },
      },
      blue: {
        light: {
          default: {
            color: $variable.color.blue400,
            border: $variable.color.blue050,
            background: $variable.color.blue050,
          },
          active: {
            color: $variable.color.blue400,
            border: $variable.color.blue100,
            background: $variable.color.blue100,
          },
          disabled: {
            color: $variable.color.blue200,
            border: $variable.color.blue050,
            background: $variable.color.blue050,
          },
        },
        dark: {
          default: {
            color: $variable.color.blue300,
            border: $variable.color.blue800,
            background: $variable.color.blue800,
          },
          active: {
            color: $variable.color.blue300,
            border: $variable.color.blue700,
            background: $variable.color.blue700,
          },
          disabled: {
            color: $variable.color.blue600,
            border: $variable.color.blue800,
            background: $variable.color.blue800,
          },
        },
      },
    },
    filled: {
      gray: {
        light: {
          default: {
            color: $variable.color.gray050,
            border: $variable.color.gray700,
            background: $variable.color.gray700,
          },
          active: {
            color: $variable.color.gray050,
            border: $variable.color.gray600,
            background: $variable.color.gray600,
          },
          disabled: {
            color: $variable.color.gray400,
            border: $variable.color.gray050,
            background: $variable.color.gray050,
          },
        },
        dark: {
          default: {
            color: $variable.color.gray700,
            border: $variable.color.gray050,
            background: $variable.color.gray050,
          },
          active: {
            color: $variable.color.gray700,
            border: $variable.color.gray200,
            background: $variable.color.gray200,
          },
          disabled: {
            color: $variable.color.gray500,
            border: $variable.color.gray700,
            background: $variable.color.gray700,
          },
        },
      },
      red: {
        light: {
          default: {
            color: $variable.color.gray000,
            border: $variable.color.red400,
            background: $variable.color.red400,
          },
          active: {
            color: $variable.color.gray000,
            border: $variable.color.red500,
            background: $variable.color.red500,
          },
          disabled: {
            color: $variable.color.red200,
            border: $variable.color.red050,
            background: $variable.color.red050,
          },
        },
        dark: {
          default: {
            color: $variable.color.gray000,
            border: $variable.color.red400,
            background: $variable.color.red400,
          },
          active: {
            color: $variable.color.gray000,
            border: $variable.color.red500,
            background: $variable.color.red500,
          },
          disabled: {
            color: $variable.color.red600,
            border: $variable.color.red800,
            background: $variable.color.red800,
          },
        },
      },
      yellow: {
        light: {
          default: {
            color: $variable.color.gray000,
            border: $variable.color.yellow400,
            background: $variable.color.yellow400,
          },
          active: {
            color: $variable.color.gray000,
            border: $variable.color.yellow500,
            background: $variable.color.yellow500,
          },
          disabled: {
            color: $variable.color.yellow200,
            border: $variable.color.yellow050,
            background: $variable.color.yellow050,
          },
        },
        dark: {
          default: {
            color: $variable.color.gray000,
            border: $variable.color.yellow400,
            background: $variable.color.yellow400,
          },
          active: {
            color: $variable.color.gray000,
            border: $variable.color.yellow500,
            background: $variable.color.yellow500,
          },
          disabled: {
            color: $variable.color.yellow700,
            border: $variable.color.yellow800,
            background: $variable.color.yellow800,
          },
        },
      },
      green: {
        light: {
          default: {
            color: $variable.color.gray000,
            border: $variable.color.green400,
            background: $variable.color.green400,
          },
          active: {
            color: $variable.color.gray000,
            border: $variable.color.green500,
            background: $variable.color.green500,
          },
          disabled: {
            color: $variable.color.green200,
            border: $variable.color.green050,
            background: $variable.color.green050,
          },
        },
        dark: {
          default: {
            color: $variable.color.gray000,
            border: $variable.color.green400,
            background: $variable.color.green400,
          },
          active: {
            color: $variable.color.gray000,
            border: $variable.color.green500,
            background: $variable.color.green500,
          },
          disabled: {
            color: $variable.color.green700,
            border: $variable.color.green800,
            background: $variable.color.green800,
          },
        },
      },
      blue: {
        light: {
          default: {
            color: $variable.color.gray000,
            border: $variable.color.blue400,
            background: $variable.color.blue400,
          },
          active: {
            color: $variable.color.gray000,
            border: $variable.color.blue500,
            background: $variable.color.blue500,
          },
          disabled: {
            color: $variable.color.blue200,
            border: $variable.color.blue050,
            background: $variable.color.blue050,
          },
        },
        dark: {
          default: {
            color: $variable.color.gray000,
            border: $variable.color.blue400,
            background: $variable.color.blue400,
          },
          active: {
            color: $variable.color.gray000,
            border: $variable.color.blue500,
            background: $variable.color.blue500,
          },
          disabled: {
            color: $variable.color.blue600,
            border: $variable.color.blue800,
            background: $variable.color.blue800,
          },
        },
      },
    },
    subtle: {
      gray: {
        light: {
          default: {
            color: $variable.color.gray700,
            border: 'transparent',
            background: 'transparent',
          },
          active: {
            color: $variable.color.gray700,
            border: $variable.color.gray100,
            background: $variable.color.gray100,
          },
          disabled: {
            color: $variable.color.gray400,
            border: 'transparent',
            background: 'transparent',
          },
        },
        dark: {
          default: {
            color: $variable.color.gray050,
            border: 'transparent',
            background: 'transparent',
          },
          active: {
            color: $variable.color.gray050,
            border: $variable.color.gray700,
            background: $variable.color.gray700,
          },
          disabled: {
            color: $variable.color.gray500,
            border: 'transparent',
            background: 'transparent',
          },
        },
      },
      red: {
        light: {
          default: {
            color: $variable.color.red400,
            border: 'transparent',
            background: 'transparent',
          },
          active: {
            color: $variable.color.red400,
            border: $variable.color.red050,
            background: $variable.color.red050,
          },
          disabled: {
            color: $variable.color.red200,
            border: 'transparent',
            background: 'transparent',
          },
        },
        dark: {
          default: {
            color: $variable.color.red300,
            border: 'transparent',
            background: 'transparent',
          },
          active: {
            color: $variable.color.red300,
            border: $variable.color.red800,
            background: $variable.color.red800,
          },
          disabled: {
            color: $variable.color.red600,
            border: 'transparent',
            background: 'transparent',
          },
        },
      },
      yellow: {
        light: {
          default: {
            color: $variable.color.yellow400,
            border: 'transparent',
            background: 'transparent',
          },
          active: {
            color: $variable.color.yellow400,
            border: $variable.color.yellow050,
            background: $variable.color.yellow050,
          },
          disabled: {
            color: $variable.color.yellow200,
            border: 'transparent',
            background: 'transparent',
          },
        },
        dark: {
          default: {
            color: $variable.color.yellow300,
            border: 'transparent',
            background: 'transparent',
          },
          active: {
            color: $variable.color.yellow300,
            border: $variable.color.yellow800,
            background: $variable.color.yellow800,
          },
          disabled: {
            color: $variable.color.yellow700,
            border: 'transparent',
            background: 'transparent',
          },
        },
      },
      green: {
        light: {
          default: {
            color: $variable.color.green400,
            border: 'transparent',
            background: 'transparent',
          },
          active: {
            color: $variable.color.green400,
            border: $variable.color.green050,
            background: $variable.color.green050,
          },
          disabled: {
            color: $variable.color.green200,
            border: 'transparent',
            background: 'transparent',
          },
        },
        dark: {
          default: {
            color: $variable.color.green300,
            border: 'transparent',
            background: 'transparent',
          },
          active: {
            color: $variable.color.green300,
            border: $variable.color.green800,
            background: $variable.color.green800,
          },
          disabled: {
            color: $variable.color.green600,
            border: 'transparent',
            background: 'transparent',
          },
        },
      },
      blue: {
        light: {
          default: {
            color: $variable.color.blue400,
            border: 'transparent',
            background: 'transparent',
          },
          active: {
            color: $variable.color.blue400,
            border: $variable.color.blue050,
            background: $variable.color.blue050,
          },
          disabled: {
            color: $variable.color.blue200,
            border: 'transparent',
            background: 'transparent',
          },
        },
        dark: {
          default: {
            color: $variable.color.blue300,
            border: 'transparent',
            background: 'transparent',
          },
          active: {
            color: $variable.color.blue300,
            border: $variable.color.blue800,
            background: $variable.color.blue800,
          },
          disabled: {
            color: $variable.color.blue600,
            border: 'transparent',
            background: 'transparent',
          },
        },
      },
    },
    hovering: {
      gray: {
        light: {
          default: {
            color: $variable.color.gray000,
            border: 'transparent',
            background: $variable.color.hoveringBg,
          },
          active: {
            color: $variable.color.gray000,
            border: 'transparent',
            background: $variable.color.hoveringBg,
          },
          disabled: {
            color: $variable.color.gray400,
            border: 'transparent',
            background: $variable.color.hoveringBg,
          },
        },
        dark: {
          default: {
            color: $variable.color.gray000,
            border: 'transparent',
            background: $variable.color.hoveringBg,
          },
          active: {
            color: $variable.color.gray000,
            border: 'transparent',
            background: $variable.color.hoveringBg,
          },
          disabled: {
            color: $variable.color.gray400,
            border: 'transparent',
            background: $variable.color.hoveringBg,
          },
        },
      },
      red: {
        light: {
          default: {
            color: $variable.color.red300,
            border: 'transparent',
            background: $variable.color.hoveringBg,
          },
          active: {
            color: $variable.color.red300,
            border: 'transparent',
            background: $variable.color.hoveringBg,
          },
          disabled: {
            color: $variable.color.red600,
            border: 'transparent',
            background: $variable.color.hoveringBg,
          },
        },
        dark: {
          default: {
            color: $variable.color.red300,
            border: 'transparent',
            background: $variable.color.hoveringBg,
          },
          active: {
            color: $variable.color.red300,
            border: 'transparent',
            background: $variable.color.hoveringBg,
          },
          disabled: {
            color: $variable.color.red600,
            border: 'transparent',
            background: $variable.color.hoveringBg,
          },
        },
      },
      yellow: {
        light: {
          default: {
            color: $variable.color.yellow300,
            border: 'transparent',
            background: $variable.color.hoveringBg,
          },
          active: {
            color: $variable.color.yellow300,
            border: 'transparent',
            background: $variable.color.hoveringBg,
          },
          disabled: {
            color: $variable.color.yellow700,
            border: 'transparent',
            background: $variable.color.hoveringBg,
          },
        },
        dark: {
          default: {
            color: $variable.color.yellow300,
            border: 'transparent',
            background: $variable.color.hoveringBg,
          },
          active: {
            color: $variable.color.yellow300,
            border: 'transparent',
            background: $variable.color.hoveringBg,
          },
          disabled: {
            color: $variable.color.yellow700,
            border: 'transparent',
            background: $variable.color.hoveringBg,
          },
        },
      },
      green: {
        light: {
          default: {
            color: $variable.color.green300,
            border: 'transparent',
            background: $variable.color.hoveringBg,
          },
          active: {
            color: $variable.color.green300,
            border: 'transparent',
            background: $variable.color.hoveringBg,
          },
          disabled: {
            color: $variable.color.green600,
            border: 'transparent',
            background: $variable.color.hoveringBg,
          },
        },
        dark: {
          default: {
            color: $variable.color.green300,
            border: 'transparent',
            background: $variable.color.hoveringBg,
          },
          active: {
            color: $variable.color.green300,
            border: 'transparent',
            background: $variable.color.hoveringBg,
          },
          disabled: {
            color: $variable.color.green600,
            border: 'transparent',
            background: $variable.color.hoveringBg,
          },
        },
      },
      blue: {
        light: {
          default: {
            color: $variable.color.blue300,
            border: 'transparent',
            background: $variable.color.hoveringBg,
          },
          active: {
            color: $variable.color.blue300,
            border: 'transparent',
            background: $variable.color.hoveringBg,
          },
          disabled: {
            color: $variable.color.blue600,
            border: 'transparent',
            background: $variable.color.hoveringBg,
          },
        },
        dark: {
          default: {
            color: $variable.color.blue300,
            border: 'transparent',
            background: $variable.color.hoveringBg,
          },
          active: {
            color: $variable.color.blue300,
            border: 'transparent',
            background: $variable.color.hoveringBg,
          },
          disabled: {
            color: $variable.color.blue600,
            border: 'transparent',
            background: $variable.color.hoveringBg,
          },
        },
      },
    },
  },
  size: {
    xs: {
      height: rem(32),
      padding: '0.25rem 0.5rem',
      roundPadding: '0.25rem 0.75rem',
      font: $variable.font.size200,
    },
    sm: {
      height: rem(36),
      padding: '0.25rem 0.5rem',
      roundPadding: '0.25rem 0.75rem',
      font: $variable.font.size200,
    },
    md: {
      height: rem(40),
      padding: '0.5rem 0.75rem',
      roundPadding: '0.5rem 1.25rem',
      font: $variable.font.size300,
    },
    lg: {
      height: rem(48),
      padding: '0.5rem 1rem',
      roundPadding: '0.5rem 1.5rem',
      font: $variable.font.size400,
    },
    xl: {
      height: rem(64),
      padding: '0.75rem 1.5rem',
      roundPadding: '0.75rem 2.25rem',
      font: $variable.font.size400,
    },
  },
  round: {
    xs: rem(4),
    sm: rem(8),
    md: rem(12),
    lg: rem(16),
    xl: rem(20),
    full: '9999px',
  },
}

export interface ButtonVariants {
  variant?: keyof typeof buttonVariants.variant
  color?: keyof typeof buttonVariants.variant.default
  size?: keyof typeof buttonVariants.size
  round?: keyof typeof buttonVariants.round
  square?: boolean
  withoutClickInteraction?: boolean
  withoutBorder?: boolean
}

export function buttonVariable({
  variant = 'default',
  color = 'gray',
  size = 'md',
  round = 'sm',
  square = false,
  withoutClickInteraction = false,
  withoutBorder = false,
}: ButtonVariants) {
  const { light, dark } = buttonVariants.variant[variant][color]
  const { height, padding, roundPadding, font } = buttonVariants.size[size]
  const buttonPadding = round === 'full' ? roundPadding : padding
  const borderNone = withoutBorder || variant === 'hovering'

  return {
    '--width': square ? height : 'auto',
    '--height': height,
    '--padding': square ? '0rem' : buttonPadding,
    '--font-size': font,

    '--light-default-color': light.default.color,
    '--dark-default-color': dark.default.color,
    '--light-default-border': borderNone
      ? 'none'
      : `0.0625rem solid ${light.default.border}`,
    '--dark-default-border': dark.default.border,
    '--light-default-background': light.default.background,
    '--dark-default-background': dark.default.background,

    '--light-active-color': light.active.color,
    '--dark-active-color': dark.active.color,
    '--light-active-border': light.active.border,
    '--dark-active-border': dark.active.border,
    '--light-active-background': light.active.background,
    '--dark-active-background': dark.active.background,

    '--light-disabled-color': light.disabled.color,
    '--dark-disabled-color': dark.disabled.color,
    '--light-disabled-border': light.disabled.border,
    '--dark-disabled-border': dark.disabled.border,
    '--light-disabled-background': light.disabled.background,
    '--dark-disabled-background': dark.disabled.background,

    '--round': buttonVariants.round[round],
    '--click-interaction': withoutClickInteraction ? 'none' : 'translateY(4%)',
  } as React.CSSProperties
}
