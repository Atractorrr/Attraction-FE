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
  type?: 'error' | 'info'
}

export default function WarnTxt({ content, color, type }: WarnTxtProps) {
  return (
    <p className={`flex gap-0.5 ${colorToStyle[color ?? 'gray']}`}>
      {type === 'info' ? (
        <svg
          // TODO: icon 패키지 사용 (info 아이콘)
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          className="size-6 p-1"
          viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12 17.75a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75M12 7a1 1 0 1 1 0 2a1 1 0 0 1 0-2"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12M12 2.75a9.25 9.25 0 1 0 0 18.5a9.25 9.25 0 0 0 0-18.5"
            clipRule="evenodd"
          />
        </svg>
      ) : (
        <ExclamationCircleOutline className="size-6 p-1" />
      )}
      <span className="block max-w-[calc(100%-1.625rem)] break-keep">
        {content}
      </span>
    </p>
  )
}
