'use client'

import {
  Button,
  Drawer,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
} from '@attraction/design-system'

export default function TestPage() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>drawer test</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>바텀시트 테스트</DrawerTitle>
          <DrawerDescription>바텀시트 테스트 입니다</DrawerDescription>
        </DrawerHeader>
        <div className="h-[40vh] w-full" />
        <DrawerFooter>
          <DrawerClose asChild>
            <Button>close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
