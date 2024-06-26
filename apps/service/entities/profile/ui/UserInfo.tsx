'use client'

import { copy } from '@/shared/lib'
import { DocumentDuplicateOutline } from '@attraction/icons'
import { toast } from 'react-toastify'

interface UserInfoProps {
  nickname: string
  userEmail: string
}

export default function UserInfo({ nickname, userEmail }: UserInfoProps) {
  return (
    <div className="mb-6 px-1">
      <p className="break-keep text-xl font-bold sm:text-2xl">{nickname}</p>
      <button
        type="button"
        title={`이메일 복사: ${userEmail}`}
        className="mt-2 flex items-center justify-start gap-1 break-keep text-base text-gray-500 dark:text-gray-400"
        onClick={async () => {
          const { status } = await copy(userEmail)

          if (status) {
            toast.success('이메일 복사 성공')
          } else {
            toast.error('이메일 복사 실패')
          }
        }}>
        <span>{userEmail}</span>
        <DocumentDuplicateOutline className="text-lg" />
      </button>
    </div>
  )
}
