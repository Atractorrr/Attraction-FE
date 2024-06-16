'use client'

import { UserProfile } from '@/entities/profile'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { postUserSettingInfo } from '../api'
import { USER_INFO_OCCUPATION } from '../constant'
import UserDuplicateCheckInput from './UserDuplicateCheckInput'
import UserSettingExpiration from './modal/UserSettingExpiration'
import UserSettingInterest from './modal/UserSettingInterest'
import UserSettingItem from './modal/UserSettingItem'
import UserSettingList from './modal/UserSettingList'
import UserSettingModal from './modal/UserSettingModal'

const fetchUserProfile = async (userId: string): Promise<UserProfile> => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/${userId}`,
  ).then((res) => res.json())
  const { user } = data
  return user
}

export default function UserInfoSetting() {
  const [activeNicknameModal, setActiveNicknameModal] = useState(false)
  const [activeUserJobModal, setActiveUserJobModal] = useState(false)
  const [activeUserInterestModal, setActiveUserInterestModal] = useState(false)
  const [activeUserExpirationModal, setActiveUserExpirationModal] =
    useState(false)
  const userEmail = 'kang151135@gmail.com'

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data: userProfile, refetch } = useQuery({
    queryKey: ['profile', userEmail],
    queryFn: () => fetchUserProfile(userEmail),
  })
  const { mutate } = useMutation({
    mutationFn: ({
      value,
      type,
      email,
    }: {
      value: any
      type: 'interest' | 'nickname' | 'occupation' | 'expiration'
      email: string
    }) => {
      return postUserSettingInfo(value, type, email)
    },
    onSuccess: () => {
      setActiveNicknameModal(false)
      setActiveUserJobModal(false)
      setActiveUserInterestModal(false)
      setActiveUserExpirationModal(false)
      refetch()
    },
  })

  return (
    <div className="flex w-full max-w-[600px] flex-col gap-7 rounded-2xl bg-white p-6 dark:bg-gray-700">
      <p className="text-lg font-bold">계정</p>
      <UserSettingItem
        title="닉네임 변경"
        subTitle="kang"
        setActiveModal={setActiveNicknameModal}
      />
      <UserSettingItem
        title="관심사 변경"
        subTitle="IT/테크, 비즈/재테크, 디자인, 트렌드/라이프"
        setActiveModal={setActiveUserInterestModal}
      />
      <UserSettingItem
        title="산업분야 변경"
        subTitle="자택 경비원"
        setActiveModal={setActiveUserJobModal}
      />
      <UserSettingItem
        title="개인정보 수집 유효기간 변경"
        subTitle=" 오늘부터 2024. 12. 13. 까지 활동이 없을 경우 계정이 자동으로
            탈퇴돼요"
        bottomSubTitle
        setActiveModal={setActiveUserExpirationModal}
      />
      <UserSettingItem
        title="약관 및 개인정보 처리 동의"
        subTitle="2024. 06. 13."
      />

      {activeNicknameModal && (
        <UserSettingModal
          postUserSetting={(value) => {
            mutate({ value, type: 'nickname', email: userEmail })
          }}
          setActiveModal={setActiveNicknameModal}
          renderItem={(setPostValue) => (
            <UserDuplicateCheckInput
              setModalValue={setPostValue}
              initialValue="kang15123"
            />
          )}
        />
      )}
      {activeUserJobModal && (
        <UserSettingModal
          postUserSetting={(value) => {
            mutate({ value, type: 'occupation', email: userEmail })
          }}
          setActiveModal={setActiveUserJobModal}
          renderItem={(setPostValue) => (
            <UserSettingList
              listData={USER_INFO_OCCUPATION}
              wrap
              btnClickHandler={(keyItem) => {
                setPostValue({ occupation: keyItem })
              }}
              initialItem="PROFESSION"
            />
          )}
        />
      )}
      {activeUserInterestModal && (
        <UserSettingModal
          postUserSetting={(value) => {
            mutate({ value, type: 'interest', email: userEmail })
          }}
          setActiveModal={setActiveUserInterestModal}
          renderItem={(setPostValue) => (
            <UserSettingInterest
              setModalValue={setPostValue}
              initialValue={['CULTURE_ART', 'DESIGN']}
            />
          )}
        />
      )}
      {activeUserExpirationModal && (
        <UserSettingModal
          postUserSetting={(value) => {
            mutate({ value, type: 'expiration', email: userEmail })
          }}
          setActiveModal={setActiveUserExpirationModal}
          renderItem={(setPostValue) => (
            <UserSettingExpiration
              setModalValue={setPostValue}
              initialValue="6"
            />
          )}
        />
      )}
    </div>
  )
}
