'use client'

import { Theme, useTheme } from '@/entities/theme'
import { Container } from '@/shared/ui'
import useModal from '../lib/hook/useModal'
import UserSettingItem from './modal/UserSettingItem'
import UserSettingThemeModal from './modal/UserSettingThemeModal'

export default function UserInfoGeneral() {
  const { openModal, closeModal } = useModal()
  const { currentTheme, setTheme } = useTheme()
  const getThemeText = (currentThemeValue: Theme) => {
    if (currentThemeValue === 'dark') return '다크 테마'
    if (currentThemeValue === 'light') return '라이트 테마'
    return '시스템 테마'
  }

  return (
    <Container className="flex w-full max-w-[600px] flex-col gap-7 rounded-2xl p-6">
      <p className="text-lg font-bold">일반</p>
      {/* <UserSettingItem
        title="프로필 관심사 노출 설정"
        subTitle="다른 사람에게 내 관심사를 노출하지 않아요"
        bottomSubTitle
      /> */}
      <UserSettingItem
        title="화면 테마 설정"
        subTitle={getThemeText(currentTheme)}
        icon="chevron"
        openModalHandler={() => {
          openModal(UserSettingThemeModal, {
            onSubmit: (value) => {
              if (value) {
                setTheme(value as Theme)
                closeModal(UserSettingThemeModal)
              }
            },
          })
        }}
      />
    </Container>
  )
}
