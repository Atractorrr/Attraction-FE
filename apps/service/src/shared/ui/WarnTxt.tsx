import { ReactNode } from 'react'
import {
  ExclamationCircleOutline,
  InformationCircleOutline,
} from '@attraction/icons'

const colorToStyle = {
  gray: 'text-gray-400 dark:text-gray-300',
  red: 'text-red-400 dark:text-red-300',
  yellow: 'text-yellow-400 dark:text-yellow-300',
  green: 'text-green-400 dark:text-green-300',
  blue: 'text-blue-400 dark:text-blue-300',
}

interface WarnTxtProps {
  content: string | ReactNode
  color?: keyof typeof colorToStyle
  type?: 'error' | 'info'
}

export default function WarnTxt({ content, color, type }: WarnTxtProps) {
  const Icon =
    type === 'info' ? InformationCircleOutline : ExclamationCircleOutline

  return (
    <p className={`flex gap-0.5 ${colorToStyle[color ?? 'gray']}`}>
      <Icon className="size-6 p-1" />
      <span className="block max-w-[calc(100%-1.625rem)] break-keep">
        {content}
      </span>
    </p>
  )
}
