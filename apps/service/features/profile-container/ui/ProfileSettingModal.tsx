import React, { useEffect } from 'react'
import { Button } from '@attraction/design-system'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { UserProfile } from '@/entities/profile'
import { useImgUpload } from '../lib'

interface ProfileSettingModalType {
  setModal: React.Dispatch<React.SetStateAction<boolean>>
  email: string
  type: 'profile' | 'background'
}

// TODO: 추후에 S3 적용할 수 있다 지금은 리팩토링 하지말고 놔두기

const postImgUrl = async ({
  fileImgSrc,
  email,
  type,
}: {
  fileImgSrc: string
  email: string
  type: 'profile' | 'background'
}) => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/${email}/${type === 'profile' ? 'profile' : 'background'}`,
    {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fileImgSrc }),
    },
  )
  return data
}

export default function ProfileSettingModal({
  setModal,
  email,
  type,
}: ProfileSettingModalType) {
  const queryClient = useQueryClient()
  const { setFileInfo, fileUploadHandler, fileInfo } = useImgUpload()
  const { mutate } = useMutation({
    mutationFn: postImgUrl,
    onMutate: async (sendUrl) => {
      await queryClient.cancelQueries({ queryKey: ['profile', email] })

      const previousData = queryClient.getQueryData<UserProfile>([
        'profile',
        email,
      ])

      queryClient.setQueryData<UserProfile>(['profile', email], (old) => {
        if (old) {
          const imgUrl =
            type === 'profile'
              ? { profileImg: sendUrl.fileImgSrc }
              : { backgroundImg: sendUrl.fileImgSrc }

          return { ...old, ...imgUrl }
        }
        return old
      })

      return { previousData }
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['profiles', email] })
    },
  })
  useEffect(() => {
    const height = window.scrollY

    document.body.style.cssText = `
      position: fixed;
      top: -${height}px;
      overflow-y: scroll;
      width: 100%;
    `
    return () => {
      const scrollY = document.body.style.top
      document.body.style.cssText = ''
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1)
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
        <p className="mb-2 cursor-default text-sm">이미지 업로드</p>
        <div className=" mb-16 flex w-full items-center justify-center gap-2 rounded-xl border border-gray-100 px-2 py-4  dark:border-gray-700">
          <label
            htmlFor="file-upload"
            className="cursor-pointer rounded-3xl bg-gray-50 px-4 py-1 dark:bg-gray-700">
            파일 선택하기
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              hidden
              onChange={fileUploadHandler}
            />
          </label>
          <p className="basis-2/3 overflow-hidden">{fileInfo.name}</p>
        </div>
        <div className="flex h-fit w-full justify-between border-t border-t-gray-100 pt-4 dark:border-t-gray-700">
          <Button
            className="rounded-lg bg-red-50 px-5 py-2 text-red-400 transition-colors hover:bg-red-100 md:px-10 dark:bg-red-400 dark:text-red-50 dark:hover:bg-red-500"
            onClick={() => {
              setFileInfo((pre) => ({ ...pre, src: '', name: '' }))
              mutate({ fileImgSrc: '', email, type })
              setModal(false)
            }}>
            삭제
          </Button>
          <div className="flex gap-2">
            <Button
              className="rounded-lg bg-gray-50 px-5 py-2 md:px-10 dark:bg-gray-700"
              onClick={() => setModal(false)}>
              취소
            </Button>
            <Button
              className="rounded-lg bg-blue-50 px-5 py-2 text-blue-400 transition-colors hover:bg-blue-100 md:px-10 dark:bg-blue-400 dark:text-blue-50 dark:hover:bg-blue-500"
              onClick={() => {
                if (fileInfo.src.length !== 0) {
                  mutate({ fileImgSrc: fileInfo.src, email, type })
                }
                setModal(false)
              }}>
              저장
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
