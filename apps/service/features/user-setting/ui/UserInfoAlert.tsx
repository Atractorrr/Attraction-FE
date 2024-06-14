import { ChevronRightOutline } from '@attraction/icons'

export default function UserInfoAlert() {
  return (
    <div className="w-full max-w-[600px] rounded-2xl bg-white p-6 dark:bg-gray-700">
      <p className="mb-7 text-lg font-bold">알림</p>
      <div className="mb-8 flex cursor-pointer items-center justify-between">
        <div className="flex flex-col gap-2">
          <p className="font-medium">앱 푸시 알림</p>
          <p className="size-sm text-gray-500">
            다른 사람에게 내 관심사를 노출하지 않아요
          </p>
        </div>
        <ChevronRightOutline className="size-5 shrink-0" />
      </div>
      <div className="mb-3 flex justify-between">
        <p className="font-medium">마케팅 정보 수신 동의</p>
        <div className="flex cursor-pointer items-center gap-4">
          <p className="size-sm text-gray-500">동의함</p>
          <ChevronRightOutline className="size-5" />
        </div>
      </div>
    </div>
  )
}
