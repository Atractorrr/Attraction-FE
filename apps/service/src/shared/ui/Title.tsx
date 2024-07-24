import { ReactNode } from 'react'

interface TitleProps {
  icon?: ReactNode
  text: string
}

export default function Title({ icon, text }: TitleProps) {
  return (
    <div className="flex items-center gap-x-2">
      {icon}
      <h3 className="whitespace-nowrap text-lg font-bold">{text}</h3>
    </div>
  )
}
