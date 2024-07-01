import type { PropsWithChildren } from 'react'

export default async function AuthLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex h-auto min-h-dvh w-full items-center justify-center lg:p-12">
      {children}
    </div>
  )
}
