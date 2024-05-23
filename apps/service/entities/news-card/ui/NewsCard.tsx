import React, { ReactNode } from 'react'
import { ContentContainer, ContentTitle, ImageBox } from '@/shared/ui'
import CardThumbnail from './CardThumbnail'

interface CardMainProps {
  children: ReactNode
}

function CardMain({ children }: CardMainProps) {
  return <div className="size-full space-y-2">{children}</div>
}
const NewsCard = Object.assign(CardMain, {
  Thumbnail: CardThumbnail,
  Content: ContentContainer,
  Title: ContentTitle,
  Profile: ImageBox,
})

export default NewsCard
