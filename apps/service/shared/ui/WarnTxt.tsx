import { ExclamationCircleOutline } from '@attraction/icons'

const colorToStyle = {
  gray: 'text-gray-400 dark:text-gray-300',
  red: 'text-red-400 dark:text-red-300',
  yellow: 'text-yellow-400 dark:text-yellow-300',
  green: 'text-green-400 dark:text-green-300',
  blue: 'text-blue-400 dark:text-blue-300',
}

interface WarnTxtProps {
  content: string
  color?: keyof typeof colorToStyle
}

export default function WarnTxt({ content, color }: WarnTxtProps) {
  return (
    <p className={`flex gap-0.5 p-3 ${colorToStyle[color ?? 'gray']}`}>
      <ExclamationCircleOutline className="size-6 p-1" />
      <span className="max-w-[calc(100%-1.625rem)]">{content}</span>
    </p>
  )
}
