import * as React from 'react'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { CheckOutline, ChevronRightOutline } from '@attraction/icons'

import { cn } from '../utils'

const DropdownMenu = DropdownMenuPrimitive.Root

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

const DropdownMenuGroup = DropdownMenuPrimitive.Group

const DropdownMenuPortal = DropdownMenuPrimitive.Portal

const DropdownMenuSub = DropdownMenuPrimitive.Sub

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      'ds-flex ds-cursor-pointer ds-select-none ds-items-center ds-rounded ds-px-3 ds-py-2 ds-outline-none focus:ds-bg-gray-50 data-[state=open]:ds-bg-gray-50 dark:focus:ds-bg-gray-600 dark:data-[state=open]:ds-bg-gray-700',
      inset && 'ds-pl-8',
      className,
    )}
    {...props}>
    {children}
    <ChevronRightOutline className="ds-ml-auto ds-h-4 ds-w-4" />
  </DropdownMenuPrimitive.SubTrigger>
))
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      'ds-z-50 ds-min-w-[8rem] ds-overflow-hidden ds-rounded-lg ds-border ds-border-gray-100 ds-bg-white ds-p-2 ds-text-gray-700 ds-shadow-lg data-[state=open]:ds-animate-in data-[state=closed]:ds-animate-out data-[state=closed]:ds-fade-out-0 data-[state=open]:ds-fade-in-0 data-[state=closed]:ds-zoom-out-95 data-[state=open]:ds-zoom-in-95 data-[side=bottom]:ds-slide-in-from-top-2 data-[side=left]:ds-slide-in-from-right-2 data-[side=right]:ds-slide-in-from-left-2 data-[side=top]:ds-slide-in-from-bottom-2 dark:ds-border-gray-700 dark:ds-bg-gray-800 dark:ds-text-gray-50',
      className,
    )}
    {...props}
  />
))
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        'ds-z-50 ds-min-w-[8rem] ds-overflow-hidden ds-rounded-lg ds-border ds-border-gray-100 ds-bg-white ds-p-2 ds-text-gray-700 ds-shadow-md data-[state=open]:ds-animate-in data-[state=closed]:ds-animate-out data-[state=closed]:ds-fade-out-0 data-[state=open]:ds-fade-in-0 data-[state=closed]:ds-zoom-out-95 data-[state=open]:ds-zoom-in-95 data-[side=bottom]:ds-slide-in-from-top-2 data-[side=left]:ds-slide-in-from-right-2 data-[side=right]:ds-slide-in-from-left-2 data-[side=top]:ds-slide-in-from-bottom-2 dark:ds-border-gray-700 dark:ds-bg-gray-800 dark:ds-text-gray-50',
        className,
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
))
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      'ds-relative ds-flex ds-cursor-pointer ds-select-none ds-items-center ds-rounded ds-bg-white ds-px-3 ds-py-2 ds-text-gray-700 ds-outline-none ds-transition-colors focus:ds-bg-gray-50 focus:ds-text-gray-700 data-[disabled]:ds-pointer-events-none data-[disabled]:ds-opacity-50 dark:ds-bg-gray-800 dark:ds-text-gray-50 dark:focus:ds-bg-gray-700 dark:focus:ds-text-gray-50',
      inset && 'ds-pl-8',
      className,
    )}
    {...props}
  />
))
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      'ds-relative ds-flex ds-cursor-pointer ds-select-none ds-items-center ds-rounded ds-bg-white ds-py-2 ds-pl-9 ds-pr-3 ds-text-gray-700 ds-outline-none ds-transition-colors focus:ds-bg-gray-50 focus:ds-text-gray-700 data-[disabled]:ds-pointer-events-none data-[disabled]:ds-opacity-50 dark:ds-bg-gray-800 dark:ds-text-gray-50 dark:focus:ds-bg-gray-700 dark:focus:ds-text-gray-50',
      className,
    )}
    checked={checked}
    {...props}>
    <span className="ds-absolute ds-left-3 ds-flex ds-size-4 ds-items-center ds-justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <CheckOutline className="ds-fill-current ds-text-lg" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
))
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      'ds-relative ds-flex ds-cursor-pointer ds-select-none ds-items-center ds-rounded ds-bg-white ds-py-2 ds-pl-9 ds-pr-3 ds-text-gray-700 ds-outline-none ds-transition-colors focus:ds-bg-gray-50 focus:ds-text-gray-700 data-[disabled]:ds-pointer-events-none data-[disabled]:ds-opacity-50 dark:ds-bg-gray-800 dark:ds-text-gray-50 dark:focus:ds-bg-gray-700 dark:focus:ds-text-gray-50',
      className,
    )}
    {...props}>
    <span className="ds-absolute ds-left-3 ds-flex ds-size-4 ds-items-center ds-justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <CheckOutline className="ds-fill-current ds-text-lg" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
))
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      'ds-px-1 ds-pb-2 ds-pt-1 ds-text-sm ds-font-medium ds-text-gray-500 dark:ds-text-gray-400',
      inset && 'ds-pl-8',
      className,
    )}
    {...props}
  />
))
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn(
      'ds-mx-1 ds-my-2 ds-h-px ds-bg-gray-50 dark:ds-bg-gray-700',
      className,
    )}
    {...props}
  />
))
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

function DropdownMenuShortcut({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        'ds-ml-auto ds-text-sm ds-tracking-widest ds-text-gray-500 dark:ds-text-gray-400',
        className,
      )}
      {...props}
    />
  )
}
DropdownMenuShortcut.displayName = 'DropdownMenuShortcut'

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
}
