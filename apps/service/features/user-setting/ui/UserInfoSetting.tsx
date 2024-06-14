'use client'

import { useState } from 'react'
import { postUserSettingJob } from '../api'
import { USER_INFO_OCCUPATION } from '../constant'
import UserSettingExpiration from './modal/UserSettingExpiration'
import UserSettingInterest from './modal/UserSettingInterest'
import UserSettingItem from './modal/UserSettingItem'
import UserSettingList from './modal/UserSettingList'
import UserSettingModal from './modal/UserSettingModal'

export default function UserInfoSetting() {
  const [activeNicknameModal, setActiveNicknameModal] = useState(false)
  const [activeUserJobModal, setActiveUserJobModal] = useState(false)
  const [activeUserInterestModal, setActiveUserInterestModal] = useState(false)
  const [activeUserExpirationModal, setActiveUserExpirationModal] =
    useState(false)

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
          postUserSetting={postUserSettingJob}
          setActiveModal={setActiveUserJobModal}
          renderItem={(setPostValue) => (
            <UserSettingList
              listData={USER_INFO_OCCUPATION}
              wrap
              btnClickHandler={(keyItem) => {
                setPostValue(keyItem)
              }}
              initialItem="PROFESSION"
            />
          )}
        />
      )}
      {activeUserJobModal && (
        <UserSettingModal
          postUserSetting={postUserSettingJob}
          setActiveModal={setActiveUserJobModal}
          renderItem={(setPostValue) => (
            <UserSettingList
              listData={USER_INFO_OCCUPATION}
              wrap
              btnClickHandler={(keyItem) => {
                setPostValue(keyItem)
              }}
              initialItem="PROFESSION"
            />
          )}
        />
      )}
      {activeUserInterestModal && (
        <UserSettingModal
          postUserSetting={postUserSettingJob}
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
          postUserSetting={postUserSettingJob}
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
