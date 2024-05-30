'use client'

import { Button } from '@attraction/design-system'
import { FloppyDiskEmoji } from '@attraction/icons'
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

interface ProfileContainerProps {
  userProfile: UserProfile
}

export default function ProfileContainer({
  userProfile,
}: ProfileContainerProps) {
  // TODO: 프로필도 지우기, 비디오기능 안받기 (백엔드랑 api맞출때 같이 하기)
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
                categories={userProfile.interest}
                renderItem={(category) => (
                  <PreferTagItem key={category} category={category} />
                )}
              />
              {/* // TODO: 피드백 받은 후 h-fit, self-center 넣기 */}
              <div className="flex w-full shrink-0 gap-2 md:self-end lg:w-auto">
                <Button className="flex w-full items-center justify-center gap-2 rounded-lg bg-gray-50 px-3 py-1.5 hover:bg-gray-100 lg:w-fit dark:bg-gray-700 dark:hover:bg-gray-600 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-5">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                    />
                  </svg>
                  개인설정
                </Button>
                <Button className="flex w-full items-center justify-center gap-2 rounded-lg bg-gray-700 px-3 py-1.5 text-white lg:w-fit dark:bg-gray-50 dark:text-gray-700 dark:hover:bg-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-5">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                  프로필 공유
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Background>
  )
}
