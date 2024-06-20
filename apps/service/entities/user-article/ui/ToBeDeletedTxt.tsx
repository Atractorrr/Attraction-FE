import { FlameEmoji } from '@attraction/icons'

export default function ToBeDeletedTxt() {
  return (
    <span className="mt-2 block break-keep text-sm font-medium text-yellow-400 sm:text-base dark:text-yellow-300">
      내일이면 보관함에서{' '}
      <span className="inline whitespace-nowrap">
        삭제돼요!
        <FlameEmoji className="ml-0.5 inline-block align-top text-lg sm:text-xl" />
      </span>
    </span>
  )
}
