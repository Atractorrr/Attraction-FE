import { ReactNode } from 'react'
import { QueryProvider, DeviceProvider } from '@/shared/lib'
import { ThemeProvider } from '@/entities/theme'

interface ProviderProps {
  children: ReactNode
}

export default function Provider({ children }: ProviderProps) {
  return (
    <QueryProvider>
      <ThemeProvider>
        <DeviceProvider>{children}</DeviceProvider>
      </ThemeProvider>
    </QueryProvider>
  )
}
