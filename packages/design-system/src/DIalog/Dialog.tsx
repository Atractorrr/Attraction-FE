'use client'

import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { cn } from '../utils'

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      'ds- ds-fixed ds-inset-0 ds-z-50 ds-bg-black/30 data-[state=open]:ds-animate-in data-[state=closed]:ds-animate-out data-[state=closed]:ds-fade-out-0 data-[state=open]:ds-fade-in-0 dark:ds-bg-white/20',
      className,
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        'ds-fixed ds-left-[50%] ds-top-[50%] ds-z-50 ds-grid ds-w-full ds-max-w-[100vw-2.5rem] ds-translate-x-[-50%] ds-translate-y-[-50%] ds-gap-4 ds-rounded-xl ds-border ds-border-gray-100 ds-bg-white ds-p-6 ds-shadow-lg ds-duration-200 data-[state=open]:ds-animate-in data-[state=closed]:ds-animate-out data-[state=closed]:ds-fade-out-0 data-[state=open]:ds-fade-in-0 data-[state=closed]:ds-zoom-out-95 data-[state=open]:ds-zoom-in-95 data-[state=closed]:ds-slide-out-to-left-1/2 data-[state=closed]:ds-slide-out-to-top-[48%] data-[state=open]:ds-slide-in-from-left-1/2 data-[state=open]:ds-slide-in-from-top-[48%] sm:ds-max-w-lg dark:ds-border-gray-800 dark:ds-bg-gray-800',
        className,
      )}
      {...props}>
      {children}
      <DialogPrimitive.Close className="ds-absolute -ds-right-3 -ds-top-3 ds-inline-flex ds-size-9 ds-items-center ds-justify-center ds-rounded-full ds-border ds-border-gray-100 ds-bg-white ds-transition-colors hover:ds-bg-gray-50 dark:ds-border-gray-700 dark:ds-bg-gray-800 dark:hover:ds-bg-gray-700">
        <X className="ds-size-5 ds-text-gray-700 dark:ds-text-gray-50" />
        <span className="ds-sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

function DialogHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('ds-flex ds-flex-col ds-space-y-2 ds-text-left', className)}
      {...props}
    />
  )
}
DialogHeader.displayName = 'DialogHeader'

function DialogFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'ds-flex ds-flex-col-reverse sm:ds-flex-row sm:ds-justify-end sm:ds-space-x-2',
        className,
      )}
      {...props}
    />
  )
}
DialogFooter.displayName = 'DialogFooter'

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      'ds-text-lg ds-font-bold ds-leading-none ds-tracking-tight',
      className,
    )}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn(
      'ds-break-keep ds-text-sm ds-text-gray-500 dark:ds-text-gray-400',
      className,
    )}
    {...props}
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}
