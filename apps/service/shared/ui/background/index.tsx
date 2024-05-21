import { ReactNode } from 'react'

interface BackgroundProps {
  children: ReactNode
}

export default function Background({ children }: BackgroundProps) {
  return (
    <section className="grid w-full justify-items-center border-gray-100 bg-white p-5 md:rounded-2xl md:border">
      {children}
    </section>
  )
}
