import { useCheckDevice } from '@/shared/lib'
import {
  Button,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@attraction/design-system'
import React, { ReactNode, useState } from 'react'

type UserSettingModalType = {
  postUserSetting: (value: unknown) => void
  setActiveModal: React.Dispatch<React.SetStateAction<boolean>>
  renderItem: (
    setPostValue: React.Dispatch<React.SetStateAction<unknown | undefined>>,
  ) => ReactNode
  title: string
}

export default function UserSettingModal({
  postUserSetting,
  renderItem,
  setActiveModal,
  title,
}: UserSettingModalType) {
  const [postValue, setPostValue] = useState<unknown>()
  const { isMobile, isMobileView } = useCheckDevice()

  return isMobile || isMobileView ? (
    <Drawer open>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle className="mb-8">{title}</DrawerTitle>
          <DrawerDescription>{renderItem(setPostValue)}</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="pt-2">
          <Button
            className="rounded-lg bg-blue-50 px-5 py-2 text-blue-400 transition-colors hover:bg-blue-100 md:px-10 dark:bg-blue-400 dark:text-blue-50 dark:hover:bg-blue-500"
            onClick={() => {
              postUserSetting(postValue)
            }}>
            변경
          </Button>
          <DrawerClose asChild>
            <Button
              className="rounded-lg bg-gray-50 px-5 py-2 md:px-10 dark:bg-gray-700"
              onClick={() => setActiveModal(false)}>
              Cancel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ) : (
    <div className="fixed left-0 top-0 z-50 flex size-full min-h-screen items-center justify-center">
      <div
        role="presentation"
        className="absolute -z-10 block size-full bg-gray-400 opacity-70"
        onClick={() => {
          setActiveModal(false)
        }}
      />
      <div className="h-fit w-[95%] rounded-xl bg-white p-6 sm:w-2/3 md:w-[30rem] dark:bg-gray-800">
        <p className="mb-8 text-xl font-bold">{title}</p>
        <div className="">{renderItem(setPostValue)}</div>
        <div className="mt-10 flex h-fit w-full justify-end border-t border-t-gray-100 pt-4 dark:border-t-gray-700">
          <div className="flex gap-2">
            <Button
              className="rounded-lg bg-gray-50 px-5 py-2 md:px-10 dark:bg-gray-700"
              onClick={() => setActiveModal(false)}>
              취소
            </Button>
            <Button
              className="rounded-lg bg-blue-50 px-5 py-2 text-blue-400 transition-colors hover:bg-blue-100 md:px-10 dark:bg-blue-400 dark:text-blue-50 dark:hover:bg-blue-500"
              onClick={() => {
                postUserSetting(postValue)
              }}>
              변경
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
