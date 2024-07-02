'use client'

import { useAuth } from '@/entities/auth'
import { useModal } from '@/entities/modal'
import { UserProfile } from '@/entities/profile'
import { NEWSLETTER_CATEGORY } from '@/shared/constant'
import { NewsletterCategory } from '@/shared/type'
import { Container } from '@/shared/ui'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { postUserSettingInfo } from '../api'
import { USER_INFO_OCCUPATION } from '../constant'

import UserInfoExpirationDate from './modal/UserSettingExpirationDateModal'
import UserSettingInterest from './modal/UserSettingInterestModal'
import UserSettingItem from './modal/UserSettingItem'
import UserSettingList from './modal/UserSettingJobModal'
import UserSettingModal from './modal/UserSettingModal'
import UserInfoNicknameInput from './modal/UserSettingNicknameModal'

const fetchUserProfile = async (userId: string): Promise<UserProfile> => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/${userId}`,
  ).then((res) => res.json())
  const { user } = data
  return user
}

export default function UserInfoSetting() {
  const { openModal } = useModal()
  const { userEmail } = useAuth()

  const queryClient = useQueryClient()

  // TODO: Susepense 있을 때 랑 그냥 query 썻을때 쿠키에 헤더가 실리고 안실린다.
  const { data: userProfile } = useQuery({
    queryKey: ['profile', userEmail],
    queryFn: () => fetchUserProfile(userEmail as string),
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
      queryClient.invalidateQueries({ queryKey: ['profile', userEmail!] })
    },
  })

  const openNicknameHandler = () => {
    openModal(({ isOpen, close }) => (
      <UserSettingModal
        isOpen={isOpen}
        title="닉네임 변경"
        submitHandler={(value: unknown) => {
          mutate({ value, type: 'nickname', email: userEmail! })
          close()
        }}
        closeHandler={close}
        renderItem={(setPostValue) => (
          <UserInfoNicknameInput
            setModalValue={setPostValue}
            initialValue={userProfile?.nickname as string}
          />
        )}
      />
    ))
  }

  const openJobHandler = () => {
    openModal(({ isOpen, close }) => (
      <UserSettingModal
        isOpen={isOpen}
        title="산업분야 변경"
        submitHandler={(value: unknown) => {
          mutate({ value, type: 'occupation', email: userEmail! })
          close()
        }}
        closeHandler={close}
        renderItem={(setPostValue) => (
          <UserSettingList
            listData={USER_INFO_OCCUPATION}
            wrap
            setPostValue={setPostValue}
            initialItem={userProfile?.occupation as string}
          />
        )}
      />
    ))
  }

  const openInterestHandler = () => {
    openModal(({ isOpen, close }) => (
      <UserSettingModal
        isOpen={isOpen}
        title="관심사 변경"
        submitHandler={(value: unknown) => {
          mutate({ value, type: 'interest', email: userEmail! })
          close()
        }}
        closeHandler={close}
        renderItem={(setPostValue) => (
          <UserSettingInterest
            setModalValue={setPostValue}
            initialValue={userProfile?.interest as NewsletterCategory[]}
          />
        )}
      />
    ))
  }
  const openExpirationHandler = () => {
    openModal(({ isOpen, close }) => (
      <UserSettingModal
        isOpen={isOpen}
        title="개인정보 수집 유효기간 변경"
        submitHandler={(value: unknown) => {
          mutate({ value, type: 'expiration', email: userEmail! })
          close()
        }}
        closeHandler={close}
        renderItem={(setPostValue) => (
          <UserInfoExpirationDate
            setModalValue={setPostValue}
            initialValue={userProfile?.userExpiration.toString() as string}
          />
        )}
      />
    ))
  }

  return (
    userProfile &&
    userEmail && (
      <div className="mx-auto w-full md:max-w-xl">
        <Container>
          <div className="mx-auto flex max-w-xl flex-col gap-3 p-2 md:max-w-none md:p-3">
            <h3 className="px-3 pt-2 text-lg font-bold">계정</h3>
            <UserSettingItem
              title="닉네임 변경"
              subTitle={userProfile?.nickname}
              openModalHandler={openNicknameHandler}
              icon="chevron"
            />
            <UserSettingItem
              title="관심사 변경"
              subTitle={userProfile?.interest
                .map((el) => NEWSLETTER_CATEGORY[el])
                .join(', ')}
              openModalHandler={openInterestHandler}
              icon="chevron"
            />
            <UserSettingItem
              title="산업분야 변경"
              subTitle={USER_INFO_OCCUPATION.get(userProfile!.occupation)}
              openModalHandler={openJobHandler}
              icon="chevron"
            />
            <UserSettingItem
              title="개인정보 수집 유효기간 변경"
              subTitle={` 오늘부터 ${userProfile?.userExpirationDate} 까지 활동이 없을 경우 계정이 자동으로
                탈퇴돼요`}
              openModalHandler={openExpirationHandler}
              bottomSubTitle
              icon="chevron"
            />
            <UserSettingItem
              title="약관 및 개인정보 처리 동의"
              subTitle={userProfile?.agreeAt}
              icon="none"
            />
          </div>
        </Container>
      </div>
    )
  )
}
