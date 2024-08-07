'use client'

import { logout, useAuth } from '@/entities/auth'
import { Container } from '@/shared/ui'
import { useMutation } from '@tanstack/react-query'

import { useModal } from '@/entities/modal'
import UserSettingItem from './modal/UserSettingItem'
import UserSettingWithdrawModal from './modal/UserSettingWithdrawModal'

const deleteUserInfo = (userEmail: string) => {
  const data = fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/${userEmail}`,
    {
      method: 'DELETE',
    },
  )

  return data
}

export default function UserInfoWithdraw() {
  const { openModal } = useModal()
  const { userEmail } = useAuth()
  const { mutate } = useMutation({
    mutationFn: (email: string) => deleteUserInfo(email),
    onSuccess: logout,
  })
  const openWithdrawModalHandler = () => {
    openModal(({ isOpen, close }) => (
      <UserSettingWithdrawModal
        isOpen={isOpen}
        closeHandler={close}
        submitHandler={() => {
          if (userEmail) {
            mutate(userEmail)
          }
        }}
      />
    ))
  }
  return (
    <div className="mx-auto w-full md:max-w-xl">
      <Container>
        <div className="mx-auto max-w-xl p-2 md:max-w-none md:p-3">
          <UserSettingItem
            title="탈퇴하기"
            icon="chevron"
            openModalHandler={openWithdrawModalHandler}
          />
        </div>
      </Container>
    </div>
  )
}
