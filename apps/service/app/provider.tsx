/* eslint-disable react/jsx-key */

import { AuthProvider, DefaultAuthState } from '@/entities/auth'
import { ChannelTalkProvider } from '@/entities/channelTalk'
import { PWAProvider } from '@/entities/pwa'
import { ThemeProvider } from '@/entities/theme'
import { ModalProvider } from '@/features/user-setting/model'
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
  ...props
}: PropsWithChildren<DefaultAuthState>) {
  return (
    <MultiProvider
      providers={[
        <ChannelTalkProvider />,
        <PWAProvider />,
        <AuthProvider {...props} />,
        <QueryProvider />,
        <ThemeProvider />,
        <DeviceProvider />,
        <ModalProvider />,
      ]}>
      {children}
    </MultiProvider>
  )
}
