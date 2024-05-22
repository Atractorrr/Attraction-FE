import React, { ReactNode } from 'react'
import CardThumbnail from './CardThumbnail'
import { ContentContainer, ContentTitle, ImageBox } from '@/shared/ui'

type Props = {
  children: ReactNode
}

function CardMain({ children }: Props) {
  return <div className="size-full space-y-2">{children}</div>
}
const NewsCard = Object.assign(CardMain, {
  Thumbnail: CardThumbnail,
  Content: ContentContainer,
  Title: ContentTitle,
  Profile: ImageBox,
})

export default NewsCard
