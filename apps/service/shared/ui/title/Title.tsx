import { ReactNode } from 'react'

interface TitleProps {
  icon: ReactNode
  text: string
}

export default function Title({ icon, text }: TitleProps) {
  return (
    <section className="flex items-center gap-x-2">
      {icon}
      <h2 className="whitespace-nowrap text-lg font-bold">{text}</h2>
    </section>
  )
}
