import { ChevronRightOutline } from '@attraction/icons'

export default function UserInfoSetting() {
  return (
    <div className="w-full max-w-[600px] rounded-2xl bg-white p-6 dark:bg-gray-700">
      <p className="mb-7 text-lg font-bold">계정</p>
      <div className="mb-8 flex justify-between">
        <p className="font-medium">닉네임 변경</p>
        <div className="flex cursor-pointer items-center gap-4">
          <p className="size-sm text-gray-500">kang</p>
          <ChevronRightOutline className="size-5" />
        </div>
      </div>
      <div className="mb-8 flex cursor-pointer justify-between">
        <p className="font-medium">관심사 변경</p>
        <div className="flex items-center gap-4">
          <p className="size-sm text-gray-500">
            IT/테크, 비즈/재테크, 디자인, 트렌드/라이프
          </p>
          <ChevronRightOutline className="size-5" />
        </div>
      </div>
      <div className="mb-8 flex cursor-pointer justify-between">
        <p className="font-medium">산업분야 변경</p>
        <div className="flex items-center gap-4">
          <p className="size-sm text-gray-500">자택 경비원</p>
          <ChevronRightOutline className="size-5" />
        </div>
      </div>
      <div className="mb-8 flex cursor-pointer items-center justify-between">
        <div className="flex flex-col gap-2">
          <p className="font-medium">개인정보 수집 유효기간 변경</p>
          <p className="size-sm text-gray-500">
            오늘부터 2024. 12. 13. 까지 활동이 없을 경우 계정이 자동으로
            탈퇴돼요
          </p>
        </div>
        <ChevronRightOutline className="size-5 shrink-0" />
      </div>
      <div className="mb-3 flex cursor-pointer justify-between">
        <p className="font-medium">약관 및 개인정보 처리 동의</p>
        <div className="flex items-center gap-4">
          <p className="size-sm text-gray-500">2024. 06. 13.</p>
          <ChevronRightOutline className="size-5" />
        </div>
      </div>
    </div>
  )
}
