import { WithAuth } from '@/entities/auth'
import {
  UserInfoGeneral,
  UserInfoSetting,
  UserInfoWithdraw,
} from '@/features/user-setting'
import { LoadingSpinner } from '@/shared/ui'
import { Header } from '@/widgets/menu'
import { Metadata } from 'next'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: '개인설정',
}

export default function SettingPage() {
  return (
    <>
      <Header title="개인설정" />
      <WithAuth>
        <div className="flex w-full flex-col items-center justify-center gap-6">
          <Suspense fallback={<LoadingSpinner />}>
            <UserInfoSetting />
          </Suspense>
          <UserInfoGeneral />
          {/* <UserInfoAlert /> */}
          <UserInfoWithdraw />
        </div>
      </WithAuth>
    </>
  )
}
