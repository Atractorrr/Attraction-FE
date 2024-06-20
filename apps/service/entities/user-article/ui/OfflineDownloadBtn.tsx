'use client'

import { ArrowDownTrayOutline } from '@attraction/icons'

export default function OfflineDownloadBtn() {
  return (
    <button
      type="button"
      title="오프라인 저장"
      className="inline-flex h-9 items-center justify-center gap-2 rounded-full bg-gray-50 pl-4 pr-5 transition-colors hover:bg-gray-100 disabled:!bg-gray-50 disabled:text-gray-500 dark:bg-gray-700 dark:hover:bg-gray-600 dark:disabled:!bg-gray-700 dark:disabled:text-gray-400">
      <ArrowDownTrayOutline className="xs:text-lg" />
      <span className="whitespace-nowrap text-sm xs:text-base">
        오프라인 저장
      </span>
    </button>
  )
}
