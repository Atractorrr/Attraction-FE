'use client'

import { UserProfile } from '@/entities/profile'
import { NEWSLETTER_CATEGORY } from '@/shared/constant'
import { Container } from '@/shared/ui'
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from '@tanstack/react-query'
import { postUserSettingInfo } from '../api'
import { USER_INFO_OCCUPATION } from '../constant'
import useModal from '../lib/hook/useModal'
import UserSettingExpirationDateModal from './modal/UserSettingExpirationDateModal'
import UserSettingInterestModal from './modal/UserSettingInterestModal'
import UserSettingItem from './modal/UserSettingItem'
import UserSettingJobModal from './modal/UserSettingJobModal'
import UserSettingNicknameModal from './modal/UserSettingNicknameModal'

interface UserInfoSettingType {
  email: string
}

const fetchUserProfile = async (userId: string): Promise<UserProfile> => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/${userId}`,
  ).then((res) => res.json())
  const { user } = data
  return user
}

export default function UserInfoSetting({
  email: userEmail,
}: UserInfoSettingType) {
  const { openModal, closeModal } = useModal()

  const queryClient = useQueryClient()

  const { data: userProfile } = useSuspenseQuery({
    queryKey: ['profile', userEmail],
    queryFn: () => fetchUserProfile(userEmail),
  })
  const { mutate } = useMutation({
    mutationFn: ({
      value,
      type,
      email,
    }: {
      value: unknown
      type: 'interest' | 'nickname' | 'occupation' | 'expiration'
      email: string
    }) => {
      return postUserSettingInfo(value, type, email)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profile', userEmail] })
    },
  })

  return (
    userProfile && (
      <Container className="flex w-full max-w-[600px] flex-col gap-7 rounded-2xl p-6">
        <p className="text-lg font-bold">계정</p>
        <UserSettingItem
          title="닉네임 변경"
          subTitle={userProfile?.nickname}
          openModalHandler={() => {
            openModal(UserSettingNicknameModal, {
              onSubmit: async (value) => {
                if (value) {
                  mutate({ value, type: 'nickname', email: userEmail })
                  closeModal(UserSettingNicknameModal)
                }
              },
              initialValue: userProfile.nickname,
            })
          }}
          icon="chevron"
        />
        <UserSettingItem
          title="관심사 변경"
          subTitle={userProfile?.interest
            .map((el) => NEWSLETTER_CATEGORY[el])
            .join(', ')}
          openModalHandler={() => {
            openModal(UserSettingInterestModal, {
              onSubmit: async (value) => {
                if (value) {
                  mutate({ value, type: 'interest', email: userEmail })
                  closeModal(UserSettingInterestModal)
                }
              },
              initialValue: userProfile!.interest,
            })
          }}
          icon="chevron"
        />
        <UserSettingItem
          title="산업분야 변경"
          subTitle={USER_INFO_OCCUPATION.get(userProfile!.occupation)}
          openModalHandler={() => {
            openModal(UserSettingJobModal, {
              onSubmit: async (value) => {
                if (value) {
                  mutate({ value, type: 'occupation', email: userEmail })
                  closeModal(UserSettingJobModal)
                }
              },
              initialValue: userProfile.occupation,
            })
          }}
          icon="chevron"
        />
        <UserSettingItem
          title="개인정보 수집 유효기간 변경"
          subTitle={` 오늘부터 ${userProfile?.userExpirationDate} 까지 활동이 없을 경우 계정이 자동으로
            탈퇴돼요`}
          openModalHandler={() => {
            openModal(UserSettingExpirationDateModal, {
              onSubmit: async (value) => {
                if (value) {
                  mutate({ value, type: 'expiration', email: userEmail })
                  closeModal(UserSettingExpirationDateModal)
                }
              },
              initialValue: userProfile!.userExpiration.toString(),
            })
          }}
          bottomSubTitle
          icon="chevron"
        />
        <UserSettingItem
          title="약관 및 개인정보 처리 동의"
          subTitle={userProfile?.agreeAt}
          icon="none"
        />
      </Container>
    )
  )
}
