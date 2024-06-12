'use client'

import * as React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'

import { cn } from '../utils'

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      'ds-inline-flex ds-h-10 ds-items-center ds-justify-center ds-rounded-md ds-bg-gray-100 ds-p-1 ds-text-gray-500 dark:ds-bg-gray-800 dark:ds-text-gray-400',
      className,
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'ds-inline-flex ds-items-center ds-justify-center ds-whitespace-nowrap ds-rounded-sm ds-px-3 ds-py-1.5 ds-text-sm ds-font-medium ds-ring-offset-white ds-transition-all focus-visible:ds-outline-none focus-visible:ds-ring-2 focus-visible:ds-ring-gray-950 focus-visible:ds-ring-offset-2 disabled:ds-pointer-events-none disabled:ds-opacity-50 data-[state=active]:ds-bg-white data-[state=active]:ds-text-gray-950 data-[state=active]:ds-shadow-sm dark:ds-ring-offset-gray-950 dark:focus-visible:ds-ring-gray-300 dark:data-[state=active]:ds-bg-gray-950 dark:data-[state=active]:ds-text-gray-50',
      className,
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      'ds-mt-2 ds-ring-offset-white focus-visible:ds-outline-none focus-visible:ds-ring-2 focus-visible:ds-ring-gray-950 focus-visible:ds-ring-offset-2 dark:ds-ring-offset-gray-950 dark:focus-visible:ds-ring-gray-300',
      className,
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
