'use client'

import {
  PreferTagItem,
  PreferTagList,
  ProfileBackground,
  ProfileImage,
  UserInfo,
} from '@/entities/profile'
import { Background, ErrorGuideTxt } from '@/shared/ui'
import { Button } from '@attraction/design-system'
import {
  CameraOutline,
  CogOutline,
  PaintOutline,
  ShareOutline,
} from '@attraction/icons'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { fetchUserProfile } from '../api'
import ProfileSettingModal from './ProfileSettingModal'
import UserSettingModal from './UserSettingModal'

interface ProfileContainerProps {
  userId: string
}

export default function ProfileContainer({ userId }: ProfileContainerProps) {
  const { data: userProfile } = useQuery({
    queryKey: ['profile', userId],
    queryFn: () => fetchUserProfile(userId),
  })

  // TODO: 모달 패턴 찾아보기
  const [modal, setModal] = useState(false)
  const [backgroundModal, setBackgroundModal] = useState(false)
  const [profileModal, setProfileModal] = useState(false)

  return (
    userProfile && (
      <Background>
        <ErrorBoundary FallbackComponent={ErrorGuideTxt}>
          <div className="relative flex w-full flex-col">
            <div className="group relative px-5 pt-5">
              <ProfileBackground
                imgSrc={userProfile.backgroundImg || '/images/default-4x1.jpg'}
              />
              <Button
                type="button"
                className="invisible absolute right-2 top-8 flex h-fit items-center gap-2 rounded-lg bg-black p-1 text-gray-50 opacity-0 transition-all
            group-hover:visible group-hover:right-8 group-hover:opacity-60"
                onClick={() => {
                  setBackgroundModal(true)
                }}>
                <PaintOutline className="size-5 opacity-100" />
                <span className="opacity-100">배경 이미지 수정</span>
              </Button>
            </div>
            <div className="flex size-full flex-col pl-5 md:flex-row md:pl-14">
              <div className="relative size-20 md:size-auto">
                <div className="relative size-40 shrink-0 -translate-y-1/2 rounded-full bg-white p-2 dark:bg-gray-800">
                  <ProfileImage
                    imaSrc={userProfile.profileImg || '/images/default-1x1.jpg'}
                  />
                  <div className="absolute left-0 top-0 size-full p-2">
                    <button
                      type="button"
                      onClick={() => setProfileModal(true)}
                      className="flex size-full flex-col items-center justify-center gap-2 rounded-full bg-black text-white opacity-0 transition-opacity hover:opacity-60">
                      <CameraOutline className="size-9" />
                      이미지 변경
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full p-5">
                <UserInfo
                  nickname={userProfile.nickname}
                  userEmail={userProfile.email}
                />
                <div className="flex flex-col justify-between gap-4 lg:flex-row">
                  <PreferTagList
                    categories={userProfile.interest}
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
              setModal={setModal}
              userProfile={userProfile}
              userId={userId}
            />
          )}
          {profileModal && (
            <ProfileSettingModal
              email={userId}
              setModal={setProfileModal}
              type="profile"
            />
          )}
          {backgroundModal && (
            <ProfileSettingModal
              email={userId}
              setModal={setBackgroundModal}
              type="background"
            />
          )}
        </ErrorBoundary>
      </Background>
    )
  )
}
