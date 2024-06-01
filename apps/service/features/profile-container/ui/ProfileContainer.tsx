'use client'

import { Button } from '@attraction/design-system'
import { CogOutline, ShareOutline } from '@attraction/icons'
import { useState } from 'react'
import {
  UserProfile,
  ProfileBackground,
  ProfileImage,
  UserInfo,
  PreferTagList,
  PreferTagItem,
} from '@/entities/profile'
import { Background } from '@/shared/ui'
import UserSettingModal from './UserSettingModal'
import ProfileSettingModal from './ProfileSettingModal'

interface ProfileContainerProps {
  userProfile: UserProfile
}

export default function ProfileContainer({
  userProfile,
}: ProfileContainerProps) {
  // TODO: 프로필도 지우기, 비디오기능 안받기 (백엔드랑 api맞출때 같이 하기)
  const [modal, setModal] = useState(false)
  const [profileModal, setProfileModal] = useState(false)
  const [backgroundModal, setBackgroundModal] = useState(false)

  return (
    <Background>
      <div className="relative flex w-full flex-col">
        <div className="group relative px-5 pt-5">
          <ProfileBackground imgSrc={userProfile.backgroundImg} />
          <Button
            type="button"
            className="invisible absolute right-2 top-8 flex h-fit items-center gap-2 rounded-lg bg-black p-1 text-gray-50 opacity-0 transition-all
            group-hover:visible group-hover:right-8 group-hover:opacity-60"
            onClick={() => {
              setBackgroundModal(true)
            }}>
            <CogOutline className="size-5 opacity-100" />
            <span className="opacity-100">배경 이미지 수정</span>
          </Button>
        </div>
        <div className="flex size-full flex-col pl-5 md:flex-row md:pl-14">
          <div className="relative size-20 md:size-auto">
            <div className="relative size-40 shrink-0 -translate-y-1/2 rounded-full bg-white p-2 dark:bg-gray-800">
              <ProfileImage imaSrc={userProfile.profileImg} />
              <div className="absolute left-0 top-0 size-full p-2">
                <button
                  type="button"
                  onClick={() => setProfileModal(true)}
                  className="flex size-full flex-col items-center justify-center gap-2 rounded-full bg-black text-white opacity-0 transition-opacity hover:opacity-60">
                  <CogOutline className="size-9" />
                  이미지 변경
                </button>
              </div>
            </div>
          </div>
          <div className="w-full p-5">
            <UserInfo
              userName={userProfile.name}
              userEmail={userProfile.email}
            />
            <div className="flex flex-col justify-between gap-4 lg:flex-row">
              <PreferTagList
                categories={userProfile.categories}
                renderItem={(category) => (
                  <PreferTagItem key={category} category={category} />
                )}
              />
              <div className="flex w-full shrink-0 gap-2 md:self-end lg:w-auto">
                <Button
                  className="xs:px-2 flex w-full items-center justify-center gap-2 rounded-lg bg-gray-50 py-1.5 hover:bg-gray-100 sm:px-3 lg:w-fit dark:bg-gray-700 dark:hover:bg-gray-600"
                  onClick={() => {
                    setModal(true)
                  }}>
                  <CogOutline className="size-5" />
                  개인설정
                </Button>
                <Button className="xs:px-2 flex w-full items-center justify-center gap-2 rounded-lg  bg-gray-700 py-1.5 text-white sm:px-3 lg:w-fit dark:bg-gray-50 dark:text-gray-700 dark:hover:bg-gray-100">
                  <ShareOutline className="size-5" />
                  프로필 공유
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {modal && (
        <UserSettingModal
          email={userProfile.email}
          setModal={setModal}
          nickname={userProfile.name}
          occupation={userProfile.occupation}
          interest={userProfile.categories}
          userExpiration={userProfile.userExpiration}
        />
      )}
      {profileModal && <ProfileSettingModal setModal={setProfileModal} />}
      {backgroundModal && <ProfileSettingModal setModal={setBackgroundModal} />}
    </Background>
  )
}
