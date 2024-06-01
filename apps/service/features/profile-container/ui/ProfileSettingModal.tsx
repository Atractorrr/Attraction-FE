import React, { useEffect } from 'react'
import { Button } from '@attraction/design-system'
import { useImgUpload } from '../lib'

interface ProfileSettingModalType {
  setModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ProfileSettingModal({
  setModal,
}: ProfileSettingModalType) {
  const { setImgSrc, imgSrc, fileUploadHandler } = useImgUpload()

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
      <div className="h-fit w-[95%] rounded-xl bg-white p-6 sm:w-2/3 md:w-[30rem]">
        <p className="mb-8 text-xl font-bold text-gray-700">
          프로필 이미지 변경
        </p>
        <p className="mb-2 cursor-default text-sm">이미지 업로드</p>
        <div className=" mb-16 flex w-full items-center justify-center gap-2 rounded-xl border border-gray-100 px-2 py-4">
          <label
            htmlFor="file-upload"
            className="cursor-pointer rounded-3xl bg-gray-50 px-4 py-1">
            파일 선택하기
            <input
              id="file-upload"
              type="file"
              hidden
              onChange={fileUploadHandler}
            />
          </label>
          <p className="basis-2/3 overflow-hidden">{imgSrc}</p>
        </div>
        <div className="flex h-fit w-full justify-between border-t border-t-gray-100 py-4">
          <Button
            className="rounded-lg bg-red-50 px-5 py-2 text-red-400 md:px-10"
            onClick={() => {
              setImgSrc('')
            }}>
            삭제
          </Button>
          <div className="flex gap-2">
            <Button
              className="rounded-lg bg-gray-50 px-5 py-2 text-gray-700 md:px-10"
              onClick={() => setModal(false)}>
              취소
            </Button>
            <Button className="rounded-lg bg-blue-50 px-5 py-2 text-blue-400 md:px-10">
              저장
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
