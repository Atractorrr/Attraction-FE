'use client'

import { Button } from '@attraction/design-system'
import { FloppyDiskEmoji } from '@attraction/icons'
import * as Entities from '@/entities'
import { UserProfileType } from '@/entities'
import { useImgUpload } from '../libs/hooks/useImgUpload'

type Props = {
  userProfile: UserProfileType
}

export default function Profiles({ userProfile }: Props) {
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
    <div className="relative flex w-full flex-col rounded-b-2xl border border-gray-100 bg-white md:rounded-2xl">
      <div className="group relative px-5 pt-5">
        <Entities.Profile.ProfileBackground
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
          <div className="group relative size-40 shrink-0 -translate-y-1/2 rounded-full bg-white p-2">
            <Entities.Profile.ProfileImage
              imaSrc={profileImgSrc || userProfile.profileImg}
            />
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
          <Entities.Profile.UserInfo
            userName={userProfile.name}
            userEmail={userProfile.email}
          />
          <div className="flex flex-col justify-between gap-4 lg:flex-row">
            <Entities.Profile.PreferTagList
              categories={userProfile.categories}
              renderItem={(category) => (
                <Entities.Profile.PreferTagItem
                  key={category}
                  category={category}
                />
              )}
            />
            {/* TODO: 피드백 받은 후 h-fit, self-center 넣기 */}
            <div className="flex shrink-0 gap-2 ">
              <Button className="w-full rounded-lg bg-gray-50 px-3 py-1.5 lg:w-fit">
                개인설정
              </Button>
              <Button className="w-full rounded-lg bg-gray-700 px-3 py-1.5 text-white lg:w-fit">
                프로필 공유
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
