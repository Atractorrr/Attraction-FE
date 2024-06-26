import { Metadata } from 'next'
import { Suspense } from 'react'
import {
  UserInfoGeneral,
  UserInfoSetting,
  UserInfoWithdraw,
} from '@/features/user-setting'
import { LoadingSpinner } from '@/shared/ui'
import Modals from '@/features/user-setting/ui/modal/Modals'
import { WithAuth } from '@/entities/auth'

export const metadata: Metadata = {
  title: '개인설정',
}

export default function SettingPage() {
  return (
    <WithAuth>
      <div className="flex w-full flex-col items-center justify-center gap-6">
        <Suspense fallback={<LoadingSpinner />}>
          <UserInfoSetting />
        </Suspense>
        <UserInfoGeneral />
        {/* <UserInfoAlert /> */}
        <UserInfoWithdraw />
        <Modals />
      </div>
    </WithAuth>
  )
}
