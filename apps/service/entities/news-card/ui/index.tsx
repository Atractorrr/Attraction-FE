import React, { ReactNode } from 'react'
import CardThumbnail from './CardThumbnail'
import * as Shared from '@/shared'

type Props = {
  children: ReactNode
}

function CardMain({ children }: Props) {
  return <div className="size-full space-y-2">{children}</div>
}
const NewsCard = Object.assign(CardMain, {
  Thumbnail: CardThumbnail,
  Content: Shared.ContentContainer,
  Title: Shared.ContentTitle,
  Profile: Shared.ImageBox,
})

export default NewsCard
