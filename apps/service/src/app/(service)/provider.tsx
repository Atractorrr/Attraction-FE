/* eslint-disable react/jsx-key */

import { AuthProvider, DefaultAuthState } from '@/entities/auth'
import { ChannelTalkProvider } from '@/entities/channel-talk'
import { ModalProvider } from '@/entities/modal'
import { PWAProvider } from '@/entities/pwa'
import { ThemeProvider } from '@/entities/theme'
import { ToastUIProvider } from '@/entities/toast-ui'

import { DeviceProvider, QueryProvider } from '@/shared/lib'
import { PropsWithChildren, ReactElement, cloneElement } from 'react'

interface MultiProviderProps {
  providers: ReactElement[]
}

function MultiProvider({
  providers,
  children,
}: PropsWithChildren<MultiProviderProps>) {
  return (
    <>
      {providers.reduceRight((accProvider, provider) => {
        return cloneElement(provider, undefined, accProvider)
      }, children)}
    </>
  )
}

export default function Provider({
  children,
  ...authProps
}: PropsWithChildren<DefaultAuthState>) {
  return (
    <MultiProvider
      providers={[
        <ChannelTalkProvider />,
        <PWAProvider />,
        <AuthProvider {...authProps} />,
        <QueryProvider />,
        <ThemeProvider />,
        <DeviceProvider />,
        <ModalProvider />,
        <ToastUIProvider />,
      ]}>
      {children}
    </MultiProvider>
  )
}
