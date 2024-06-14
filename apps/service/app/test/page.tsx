'use client'

import {
  Checkbox,
  Button,
  Drawer,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
} from '@attraction/design-system/dist'

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
        <div className="h-[40vh] w-full px-5 py-2">
          <div className="flex flex-col gap-6">
            <Checkbox id="test1" label="checkbox test default" />
            <Checkbox id="test2" label="checkbox test blue" color="blue" />
            <Checkbox id="test3" label="checkbox test disabled" disabled />
            <Checkbox />
          </div>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button>close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
