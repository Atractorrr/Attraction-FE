import { ChevronRightOutline } from '@attraction/icons'

export default function UserInfoWithdraw() {
  return (
    <div className="w-full max-w-[600px] rounded-2xl bg-white p-6 dark:bg-gray-700">
      <div className="flex justify-between">
        <p className="font-medium">탈퇴하기</p>
        <div className="flex cursor-pointer items-center gap-4">
          <ChevronRightOutline className="size-5" />
        </div>
      </div>
    </div>
  )
}
