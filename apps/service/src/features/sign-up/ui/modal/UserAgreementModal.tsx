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

interface UserAgreementModalType {
  onSubmit: () => void
  onClose: () => void
  initialValue: string
  isOpen: boolean
}

export default function UserAgreementModal({
  onSubmit,
  onClose,
  isOpen,
  initialValue,
}: UserAgreementModalType) {
  const { isMobileView } = useCheckDevice()

  return isMobileView ? (
    <Drawer
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) {
          onClose()
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
            onClick={onSubmit}>
            확인
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ) : (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) {
          onClose()
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
            onClick={onSubmit}>
            확인
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
