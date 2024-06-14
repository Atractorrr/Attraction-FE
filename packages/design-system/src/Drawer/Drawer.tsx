'use client'

import * as React from 'react'
import { Drawer as DrawerPrimitive } from 'vaul'
import { DialogDescriptionProps } from '@radix-ui/react-dialog'

import { cn } from '../utils'

function Drawer({
  shouldScaleBackground = true,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>): React.JSX.Element {
  return (
    <DrawerPrimitive.Root
      shouldScaleBackground={shouldScaleBackground}
      {...props}
    />
  )
}
Drawer.displayName = 'Drawer'

const DrawerTrigger: typeof DrawerPrimitive.Trigger = DrawerPrimitive.Trigger

const DrawerPortal: typeof DrawerPrimitive.Portal = DrawerPrimitive.Portal

const DrawerClose: typeof DrawerPrimitive.Close = DrawerPrimitive.Close

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={cn(
      'ds-fixed ds-inset-0 ds-z-50 ds-bg-black/30 dark:ds-bg-white/20',
      className,
    )}
    {...props}
  />
))
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={cn(
        'ds-fixed ds-inset-x-0 ds-bottom-0 ds-z-50 ds-mt-24 ds-flex ds-h-auto ds-flex-col ds-rounded-t-2xl ds-border ds-border-gray-100 ds-bg-white dark:ds-border-gray-800 dark:ds-bg-gray-800',
        className,
      )}
      {...props}>
      <div className="ds-mx-auto ds-mb-2 ds-mt-4 ds-h-2 ds-w-24 ds-rounded-full ds-bg-gray-100 dark:ds-bg-gray-700" />
      {children}
    </DrawerPrimitive.Content>
  </DrawerPortal>
))
DrawerContent.displayName = 'DrawerContent'

function DrawerHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element {
  return (
    <div
      className={cn('ds-p-5 ds-text-center sm:ds-text-left', className)}
      {...props}
    />
  )
}
DrawerHeader.displayName = 'DrawerHeader'

function DrawerFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element {
  return (
    <div
      className={cn(
        'ds-mt-auto ds-flex ds-flex-col ds-gap-2 ds-p-5',
        className,
      )}
      {...props}
    />
  )
}
DrawerFooter.displayName = 'DrawerFooter'

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn(
      'ds-text-lg ds-font-bold ds-leading-none ds-tracking-tight',
      className,
    )}
    {...props}
  />
))
DrawerTitle.displayName = DrawerPrimitive.Title.displayName

const DrawerDescription: React.ForwardRefExoticComponent<
  Omit<
    DialogDescriptionProps & React.RefAttributes<HTMLParagraphElement>,
    'ref'
  > &
    React.RefAttributes<HTMLParagraphElement>
> = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={cn(
      'ds-mt-2 ds-text-sm ds-text-gray-500 dark:ds-text-gray-400',
      className,
    )}
    {...props}
  />
))
DrawerDescription.displayName = DrawerPrimitive.Description.displayName

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
}
