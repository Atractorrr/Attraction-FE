'use client'

import { useModal } from '@/entities/modal'
import { THEME_NAME, Theme, useTheme } from '@/entities/theme'
import { Container } from '@/shared/ui'
import UserSettingItem from './modal/UserSettingItem'
import UserSettingModal from './modal/UserSettingModal'
import UserSettingTheme from './modal/UserSettingThemeModal'

export default function UserInfoGeneral() {
  const { currentTheme, setTheme } = useTheme()
  const { openModal } = useModal()

  const openThemeModalHandler = () => {
    openModal(({ isOpen, close }) => (
      <UserSettingModal
        isOpen={isOpen}
        title="테마 변경"
        submitHandler={(value: unknown) => {
          setTheme(value as Theme)
          close()
        }}
        closeHandler={close}
        renderItem={(setPostValue) => (
          <UserSettingTheme setModalValue={setPostValue} />
        )}
      />
    ))
  }

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
            openModalHandler={openThemeModalHandler}
          />
        </div>
      </Container>
    </div>
  )
}
