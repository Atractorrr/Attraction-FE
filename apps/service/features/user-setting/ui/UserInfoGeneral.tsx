'use client'

import { Theme, useTheme, THEME_NAME } from '@/entities/theme'
import { Container } from '@/shared/ui'
import useModal from '../lib/hook/useModal'
import UserSettingItem from './modal/UserSettingItem'
import UserSettingThemeModal from './modal/UserSettingThemeModal'

export default function UserInfoGeneral() {
  const { openModal, closeModal } = useModal()
  const { currentTheme, setTheme } = useTheme()

  return (
    <div className="mx-auto w-full md:max-w-xl">
      <Container>
        <div className="mx-auto flex max-w-xl flex-col gap-3 p-2 md:max-w-none md:p-3">
          <h3 className="px-3 pt-2 text-lg font-bold">일반</h3>
          {/* <UserSettingItem
            title="프로필 관심사 노출 설정"
            subTitle="다른 사람에게 내 관심사를 노출하지 않아요"
            bottomSubTitle
          /> */}
          <UserSettingItem
            title="화면 테마 설정"
            subTitle={THEME_NAME[currentTheme]}
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
        </div>
      </Container>
    </div>
  )
}
