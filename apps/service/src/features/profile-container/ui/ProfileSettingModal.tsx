import { UserProfile } from '@/entities/profile'
import { Button } from '@attraction/design-system/dist'
import { useQueryClient } from '@tanstack/react-query'
import React, { useEffect } from 'react'
import { useImgUpload, useOptimisticPostImgUrl } from '../lib'

interface ProfileSettingModalType {
  setModal: React.Dispatch<React.SetStateAction<boolean>>
  email: string
  type: 'profile' | 'background'
}

// TODO: 추후에 S3 적용할 수 있다 지금은 리팩토링 하지말고 놔두기

export default function ProfileSettingModal({
  setModal,
  email,
  type,
}: ProfileSettingModalType) {
  const queryClient = useQueryClient()
  const userProfileData = queryClient.getQueryData<UserProfile>([
    'profile',
    email,
  ])
  const { getS3ImgUrl, fileUploadHandler } = useImgUpload()
  const { mutate } = useOptimisticPostImgUrl(email, type)

  const storeS3ImgHandler = async () => {
    const response = await getS3ImgUrl()

    if (response?.s3ImgUrl) {
      mutate({ fileImgSrc: response.s3ImgUrl, email, type })
    }
    setModal(false)
  }

  const deleteImgHandler = async () => {
    mutate({ fileImgSrc: '', email, type })
  }
  useEffect(() => {
    document.body.classList.add('lock-scroll')
    return () => {
      document.body.classList.remove('lock-scroll')
    }
  }, [])
  return (
    <div className="fixed left-0 top-0 z-50 flex size-full min-h-screen items-center justify-center">
      <div
        role="presentation"
        className="absolute -z-10 block size-full bg-gray-400 opacity-70"
        onClick={() => {
          setModal(false)
        }}
      />
      <div className="h-fit w-[95%] rounded-xl bg-white p-6 sm:w-2/3 md:w-[30rem] dark:bg-gray-800">
        <p className="mb-8 text-xl font-bold">프로필 이미지 변경</p>
        <p className="mb-2 cursor-default px-1 text-sm">이미지 업로드</p>
        <div className="mb-12 h-auto w-full">
          <input
            id="file-upload"
            type="file"
            className="block h-12 w-full cursor-pointer rounded-lg border border-gray-100 bg-white p-2 text-base leading-7 transition-colors file:mr-2 file:cursor-pointer file:rounded-full file:border-none file:bg-gray-50 file:px-3 file:py-1 file:text-sm file:font-normal file:text-gray-700 file:outline-none file:transition-colors dark:border-gray-700 dark:bg-gray-800 file:dark:bg-gray-700 file:dark:text-gray-50"
            accept="image/*"
            onChange={fileUploadHandler}
          />
        </div>
        <div className="flex h-fit w-full justify-between border-t border-t-gray-100 pt-4 dark:border-t-gray-700">
          {(type === 'profile' && userProfileData?.profileImg === '') ||
          (type === 'background' && userProfileData?.backgroundImg === '') ? (
            ''
          ) : (
            <Button
              title="기존 이미지 삭제"
              className="rounded-lg bg-red-50 px-5 py-2 text-red-400 transition-colors hover:bg-red-100 md:px-10 dark:bg-red-400 dark:text-red-50 dark:hover:bg-red-500"
              onClick={() => {
                deleteImgHandler()
                setModal(false)
              }}>
              삭제
            </Button>
          )}
          <div className="flex w-full justify-end gap-2">
            <Button
              title="취소하기"
              className="rounded-lg bg-gray-50 px-5 py-2 transition-colors hover:bg-gray-100 md:px-10 dark:bg-gray-700 dark:hover:bg-gray-600"
              onClick={() => setModal(false)}>
              취소
            </Button>
            <Button
              title="저장하기"
              className="rounded-lg bg-blue-50 px-5 py-2 text-blue-400 transition-colors hover:bg-blue-100 md:px-10 dark:bg-blue-400 dark:text-blue-50 dark:hover:bg-blue-500"
              onClick={storeS3ImgHandler}>
              저장
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
