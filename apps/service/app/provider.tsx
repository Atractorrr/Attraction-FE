import { ReactNode } from 'react'
import { QueryProvider } from '@/shared/lib'

interface ProviderProps {
  children: ReactNode
}

export default function Provider({ children }: ProviderProps) {
  return <QueryProvider>{children}</QueryProvider>
}
