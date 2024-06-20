/* eslint-disable react/jsx-key */

import { PropsWithChildren, ReactElement, cloneElement } from 'react'
import { AuthProvider, DefaultAuthState } from '@/entities/auth'
import { ThemeProvider } from '@/entities/theme'
import { QueryProvider, DeviceProvider } from '@/shared/lib'
import { PWAProvider } from '@/entities/pwa'

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
        <PWAProvider />,
        <AuthProvider {...props} />,
        <QueryProvider />,
        <ThemeProvider />,
        <DeviceProvider />,
      ]}>
      {children}
    </MultiProvider>
  )
}
