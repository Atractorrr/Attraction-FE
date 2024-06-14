import { cva } from 'class-variance-authority'

const checkboxVariants = cva(
  'ds-size-6 ds-cursor-pointer ds-appearance-none ds-rounded ds-border-2 ds-border-gray-100 ds-transition-colors dark:ds-border-gray-600',
  {
    variants: {
      variant: {
        default:
          'checked:ds-border-gray-700 checked:ds-bg-gray-700 dark:checked:ds-border-gray-50 dark:checked:ds-bg-gray-50',
        disabled:
          'ds-border-gray-50 ds-bg-gray-50 dark:ds-border-gray-700 dark:ds-bg-gray-700',
        red: 'checked:ds-border-red-400 checked:ds-bg-red-400',
        yellow: 'checked:ds-border-yellow-400 checked:ds-bg-yellow-400',
        green: 'checked:ds-border-green-400 checked:ds-bg-green-400',
        blue: 'checked:ds-border-blue-400 checked:ds-bg-blue-400',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export default checkboxVariants
