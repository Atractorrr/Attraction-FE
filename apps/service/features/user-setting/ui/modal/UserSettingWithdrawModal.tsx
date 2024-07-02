'use client'

import { useCheckDevice } from '@/shared/lib'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  Button,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@attraction/design-system'

interface UserInfoWithdrawType {
  isOpen: boolean
  submitHandler: (value: unknown) => void
  closeHandler: () => void
}

export default function UserSettingWithdrawModal({
  isOpen,
  submitHandler,
  closeHandler,
}: UserInfoWithdrawType) {
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
          <DrawerTitle className="mb-8">탈퇴 하시겠어요?</DrawerTitle>
        </DrawerHeader>
        <DrawerFooter className="flex !flex-row-reverse items-center justify-center pt-2">
          <Button
            title="확인"
            className="w-2/3 grow whitespace-nowrap rounded-lg bg-blue-50 px-6 py-3 text-blue-400 transition-colors hover:bg-blue-100 xs:text-lg md:px-10 dark:bg-blue-400 dark:text-blue-50 dark:hover:bg-blue-500"
            onClick={submitHandler}>
            확인
          </Button>
          <DrawerClose asChild>
            <Button
              title="취소하기"
              className="w-1/3 whitespace-nowrap rounded-lg bg-gray-50 px-6 py-3 xs:text-lg md:px-10 dark:bg-gray-700"
              onClick={closeHandler}>
              취소
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ) : (
    <AlertDialog open={isOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>탈퇴 하시겠어요?</AlertDialogTitle>
          <AlertDialogDescription>
            서비스 이용에 불편한 점이 있다면 언제든 이야기 해주세요!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={closeHandler}>취소</AlertDialogCancel>
          <AlertDialogAction onClick={submitHandler}>확인</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
