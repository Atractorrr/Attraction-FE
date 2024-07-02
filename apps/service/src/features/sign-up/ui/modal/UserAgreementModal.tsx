import { ModalComponentPropType } from '@/features/user-setting/model'
import { useCheckDevice } from '@/shared/lib'
import { PrivacyPolicy, ServicePolicy } from '@/shared/ui'
import {
  Button,
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@attraction/design-system'
import { useState } from 'react'

export default function UserAgreementModal({
  onSubmit,
  onClose,
  initialValue,
}: ModalComponentPropType) {
  const { isMobileView } = useCheckDevice()
  const [activeModal, setActiveModal] = useState(true)

  return isMobileView ? (
    <Drawer
      open={activeModal}
      onOpenChange={(open) => {
        if (!open) {
          setActiveModal(false)
          setTimeout(() => {
            onClose?.()
          }, 300)
        }
      }}>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle className="mb-8">
            {initialValue === 'service'
              ? '서비스 이용약관 동의'
              : '개인정보 수집 및 이용 동의'}
          </DrawerTitle>
          <div className="scrollbar-hidden h-[48vh] overflow-y-auto">
            {initialValue === 'service' ? <ServicePolicy /> : <PrivacyPolicy />}
          </div>
        </DrawerHeader>
        <DrawerFooter className="flex !flex-row-reverse items-center justify-center pt-2">
          <Button
            title="확인"
            className="w-2/3 grow whitespace-nowrap rounded-lg bg-blue-50 px-6 py-3 text-blue-400 transition-colors hover:bg-blue-100 xs:text-lg md:px-10 dark:bg-blue-400 dark:text-blue-50 dark:hover:bg-blue-500"
            onClick={() => {
              setActiveModal(false)
              setTimeout(() => {
                onSubmit(null)
              }, 300)
            }}>
            확인
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ) : (
    <Dialog
      open={activeModal}
      onOpenChange={(open) => {
        if (!open) {
          setActiveModal(false)
          setTimeout(() => {
            onClose?.()
          }, 300)
        }
      }}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {initialValue === 'service'
              ? '서비스 이용약관 동의'
              : '개인정보 수집 및 이용 동의'}
          </DialogTitle>
        </DialogHeader>
        <div className="scrollbar-hidden h-[48vh] overflow-y-auto">
          {initialValue === 'service' ? <ServicePolicy /> : <PrivacyPolicy />}
        </div>
        <DialogFooter>
          <Button
            type="button"
            className="rounded-lg bg-blue-50 px-5 py-2 text-blue-400 transition-colors hover:bg-blue-100 md:px-8 dark:bg-blue-400 dark:text-blue-50 dark:hover:bg-blue-500"
            onClick={() => {
              setActiveModal(false)
              setTimeout(() => {
                onSubmit(null)
              }, 300)
            }}>
            확인
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
