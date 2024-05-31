'use client'

import { Button } from '@attraction/design-system'
import { CogOutline, FloppyDiskEmoji, ShareOutline } from '@attraction/icons'
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
import { useImgUpload } from '../lib'
import UserSettingModal from './UserSettingModal'

interface ProfileContainerProps {
  userProfile: UserProfile
}

export default function ProfileContainer({
  userProfile,
}: ProfileContainerProps) {
  // TODO: 프로필도 지우기, 비디오기능 안받기 (백엔드랑 api맞출때 같이 하기)
  const [modal, setModal] = useState(false)
  const {
    fileInputRef: profileInputRef,
    imgSrc: profileImgSrc,
    fileUploadHandler: profileUploadHandler,
  } = useImgUpload()
  const {
    fileInputRef: backgroundInputRef,
    imgSrc: backgroundImgSrc,
    fileUploadHandler: backgroundUploadHandler,
  } = useImgUpload()

  return (
    <Background>
      <div className="relative flex w-full flex-col">
        <div className="group relative px-5 pt-5">
          <ProfileBackground
            imgSrc={backgroundImgSrc || userProfile.backgroundImg}
          />
          <input
            type="file"
            ref={backgroundInputRef}
            hidden
            onChange={backgroundUploadHandler}
          />
          <Button
            type="button"
            className="invisible absolute right-2 top-8 h-fit  items-center rounded-xl bg-slate-100 p-1 opacity-0 transition-all
            group-hover:visible group-hover:right-8 group-hover:opacity-100"
            onClick={() => {
              backgroundInputRef.current?.click()
            }}>
            <FloppyDiskEmoji className="inline-block size-8 rotate-[25deg]" />
          </Button>
        </div>
        <div className="flex size-full flex-col pl-5 md:flex-row md:pl-14">
          <div className="relative size-20 md:size-auto">
            <div className="group relative size-40 shrink-0 -translate-y-1/2 rounded-full bg-white p-2 dark:bg-gray-800">
              <ProfileImage imaSrc={profileImgSrc || userProfile.profileImg} />
              <Button
                type="button"
                className="invisible absolute bottom-3 right-0 h-fit -translate-y-2 rounded-xl bg-slate-100 p-1 shadow-2xl transition-all group-hover:visible  group-hover:translate-y-0"
                onClick={() => {
                  profileInputRef.current?.click()
                }}>
                <FloppyDiskEmoji className="inline size-8" />
              </Button>
            </div>
            <input
              type="file"
              ref={profileInputRef}
              hidden
              onChange={profileUploadHandler}
            />
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
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-gray-50 px-3 py-1.5 hover:bg-gray-100 lg:w-fit dark:bg-gray-700 dark:hover:bg-gray-600"
                  onClick={() => {
                    setModal(true)
                  }}>
                  <CogOutline className="size-5" />
                  개인설정
                </Button>
                <Button className="flex w-full items-center justify-center gap-2 rounded-lg bg-gray-700 px-3 py-1.5 text-white lg:w-fit dark:bg-gray-50 dark:text-gray-700 dark:hover:bg-gray-100">
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
          nickname={userProfile.name}
          occupation={userProfile.occupation}
          interest={userProfile.categories}
          userExpiration={userProfile.userExpiration}
        />
      )}
    </Background>
  )
}
