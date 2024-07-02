import { Metadata } from 'next'
import { Suspense } from 'react'
import { Header } from '@/widgets/menu'
import {
  UserInfoGeneral,
  UserInfoSetting,
  UserInfoWithdraw,
} from '@/features/user-setting'
import Modals from '@/features/user-setting/ui/modal/Modals'
import { WithAuth } from '@/entities/auth'
import { LoadingSpinner } from '@/shared/ui'

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
          <Modals />
        </div>
      </WithAuth>
    </>
  )
}
