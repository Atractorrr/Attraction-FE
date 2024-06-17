import { ReactNode } from 'react'
import { AuthProvider, DefaultAuthState } from '@/entities/auth'
import { ThemeProvider } from '@/entities/theme'
import { QueryProvider, DeviceProvider } from '@/shared/lib'

interface ProviderProps extends DefaultAuthState {
  children: ReactNode
}

export default function Provider({ children, ...props }: ProviderProps) {
  return (
    <AuthProvider {...props}>
      <QueryProvider>
        <ThemeProvider>
          <DeviceProvider>{children}</DeviceProvider>
        </ThemeProvider>
      </QueryProvider>
    </AuthProvider>
  )
}
