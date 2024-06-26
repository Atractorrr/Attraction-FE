'use client'

import { useAuth } from '@/entities/auth'
import { Container } from '@/shared/ui'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useModal } from '../lib'
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
  const router = useRouter()
  const { mutate } = useMutation({
    mutationFn: (email: string) => deleteUserInfo(email),
    onSuccess: async () => {
      await fetch(`${process.env.NEXT_PUBLIC_FE_URL}/api/auth/sign-out`, {
        method: 'DELETE',
      })
      router.refresh()
      router.push('/')
    },
  })
  return (
    <div className="mx-auto w-full md:max-w-xl">
      <Container>
        <div className="mx-auto max-w-xl p-2 md:max-w-none md:p-3">
          <UserSettingItem
            title="탈퇴하기"
            icon="chevron"
            openModalHandler={() => {
              openModal(UserSettingWithdrawModal, {
                onSubmit: () => {
                  if (userEmail) {
                    mutate(userEmail)
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
