'use client'

import { useAuth } from '@/entities/auth'
import {
  PreferTagItem,
  PreferTagList,
  ProfileBackground,
  ProfileImage,
  UserInfo,
} from '@/entities/profile'
import { Container, ErrorGuideTxt } from '@/shared/ui'
import { Button } from '@attraction/design-system'
import {
  CameraOutline,
  CogOutline,
  PaintOutline,
  ShareOutline,
} from '@attraction/icons'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { fetchUserProfile } from '../api'
import ProfileSettingModal from './ProfileSettingModal'

function CustomErrorGuideTxt() {
  return <ErrorGuideTxt />
}

export default function ProfileContainer() {
  const { userEmail } = useAuth()
  const { data: userProfile } = useQuery({
    queryKey: ['profile', userEmail],
    queryFn: () => fetchUserProfile(userEmail),
  })

  // TODO: 모달 패턴 찾아보기
  const [backgroundModal, setBackgroundModal] = useState(false)
  const [profileModal, setProfileModal] = useState(false)

  return (
    userProfile && (
      <Container>
        <ErrorBoundary FallbackComponent={CustomErrorGuideTxt}>
          <div className="relative flex w-full flex-col">
            <div className="group relative md:px-5 md:pt-5">
              <ProfileBackground
                imgSrc={userProfile.backgroundImg || '/images/default-4x1.jpg'}
              />
              <Button
                type="button"
                className="invisible absolute right-2 top-8 flex h-fit items-center gap-2 rounded-lg bg-black/60 px-3 py-2 text-white opacity-0 transition-all group-hover:visible group-hover:right-8 group-hover:opacity-100"
                onClick={() => {
                  setBackgroundModal(true)
                }}>
                <PaintOutline className="size-5" />
                <span className="whitespace-nowrap">배경 이미지 수정</span>
              </Button>
            </div>
            <div className="flex size-full flex-col pl-5 md:flex-row md:pl-12">
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
              <div className="w-full py-6 pl-1 pr-6 md:p-5">
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
                  <div className="mt-8 flex w-full shrink-0 gap-2 md:self-end lg:mt-0 lg:w-auto">
                    <Link
                      href="/setting"
                      title="페이지 이동: 개인 설정"
                      className="flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-gray-50 py-2 pl-3 pr-4 transition-colors hover:bg-gray-100 lg:w-auto dark:bg-gray-700 dark:hover:bg-gray-600">
                      <CogOutline className="size-5" />
                      <span>개인설정</span>
                    </Link>
                    <Button className="flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-gray-700 py-2 pl-3 pr-4 text-white transition-colors hover:bg-gray-800 lg:w-auto dark:bg-gray-50 dark:text-gray-700 dark:hover:bg-gray-100">
                      <ShareOutline className="size-5" />
                      <span>프로필 공유</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {profileModal && (
            <ProfileSettingModal
              email={userEmail!}
              setModal={setProfileModal}
              type="profile"
            />
          )}
          {backgroundModal && (
            <ProfileSettingModal
              email={userEmail!}
              setModal={setBackgroundModal}
              type="background"
            />
          )}
        </ErrorBoundary>
      </Container>
    )
  )
}
