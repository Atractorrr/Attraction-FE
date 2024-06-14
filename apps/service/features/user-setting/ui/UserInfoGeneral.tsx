import { ChevronRightOutline } from '@attraction/icons'

export default function UserInfoGeneral() {
  return (
    <div className="w-full max-w-[600px] rounded-2xl bg-white p-6 dark:bg-gray-700">
      <p className="mb-7 text-lg font-bold">일반</p>
      <div className="mb-8 flex cursor-pointer items-center justify-between">
        <div className="flex flex-col gap-2">
          <p className="font-medium">프로필 관심사 노출 설정</p>
          <p className="size-sm text-gray-500">
            다른 사람에게 내 관심사를 노출하지 않아요
          </p>
        </div>
        <ChevronRightOutline className="size-5 shrink-0" />
      </div>
      <div className="mb-3 flex justify-between">
        <p className="font-medium">화면 테마 설정</p>
        <div className="flex cursor-pointer items-center gap-4">
          <p className="size-sm text-gray-500">라이트 테마</p>
          <ChevronRightOutline className="size-5" />
        </div>
      </div>
    </div>
  )
}
