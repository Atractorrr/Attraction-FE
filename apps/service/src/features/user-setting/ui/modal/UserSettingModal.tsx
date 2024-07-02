import { useCheckDevice } from '@/shared/lib'
import {
  Button,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@attraction/design-system'
import React, { ReactNode, useState } from 'react'
import { toast } from 'react-toastify'

type UserSettingModalType = {
  submitHandler: (value: unknown) => void
  closeHandler: () => void
  renderItem: (
    setPostValue: React.Dispatch<React.SetStateAction<unknown | undefined>>,
  ) => ReactNode
  title: string
  isOpen: boolean
}

export default function UserSettingModal({
  submitHandler,
  renderItem,
  closeHandler,
  title,
  isOpen,
}: UserSettingModalType) {
  const [postValue, setPostValue] = useState<unknown>()
  const { isMobileView } = useCheckDevice()

  return isMobileView ? (
    <Drawer
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) {
          closeHandler()
        }
      }}>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle className="mb-8">{title}</DrawerTitle>
          <div className="scrollbar-hidden h-[48vh] overflow-y-auto">
            {renderItem(setPostValue)}
          </div>
        </DrawerHeader>
        <DrawerFooter className="flex !flex-row-reverse items-center justify-center pt-2">
          <Button
            title="변경하기"
            className="w-2/3 grow whitespace-nowrap rounded-lg bg-blue-50 px-6 py-3 text-blue-400 transition-colors hover:bg-blue-100 xs:text-lg md:px-10 dark:bg-blue-400 dark:text-blue-50 dark:hover:bg-blue-500"
            onClick={() => {
              if (postValue) {
                submitHandler(postValue)
              } else {
                toast.error('잘못된 값 입니다.')
              }
            }}>
            변경
          </Button>
          <DrawerClose asChild>
            <Button
              title="취소하기"
              className="w-1/3 whitespace-nowrap rounded-lg bg-gray-50 px-6 py-3 xs:text-lg md:px-10 dark:bg-gray-700"
              onClick={() => {
                closeHandler()
              }}>
              취소
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ) : (
    <div className="fixed left-0 top-0 z-50 flex size-full min-h-screen items-center justify-center">
      <div
        role="presentation"
        className="absolute -z-10 block size-full bg-black/30 dark:bg-white/20"
        onClick={() => closeHandler?.()}
      />
      <div className="h-fit w-full max-w-[100vw-2.5rem] rounded-xl bg-white p-6 sm:max-w-lg dark:bg-gray-800">
        <p className="mb-8 text-xl font-bold">{title}</p>
        <div className="">{renderItem(setPostValue)}</div>
        <div className="mt-10 flex h-fit w-full justify-end border-t border-gray-100 pt-4 dark:border-gray-700">
          <div className="flex gap-2">
            <Button
              title="취소하기"
              className="rounded-lg bg-gray-50 px-5 py-2 transition-colors hover:bg-gray-100 md:px-8 dark:bg-gray-700 dark:hover:bg-gray-600"
              onClick={closeHandler}>
              취소
            </Button>
            <Button
              title="변경하기"
              className="rounded-lg bg-blue-50 px-5 py-2 text-blue-400 transition-colors hover:bg-blue-100 md:px-8 dark:bg-blue-400 dark:text-blue-50 dark:hover:bg-blue-500"
              onClick={() => {
                if (postValue) {
                  submitHandler(postValue)
                } else {
                  toast.error('잘못된 값 입니다.')
                }
              }}>
              변경
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
