import React, { ReactNode } from 'react'
import { ContentContainer, ContentTitle, ImageBox } from '@/shared/ui'
import CardThumbnail from './CardThumbnail'

interface CardMainProps {
  children: ReactNode
}

function CardMain({ children }: CardMainProps) {
  return <div className="w-80">{children}</div>
}
const NewsCard = Object.assign(CardMain, {
  Thumbnail: CardThumbnail,
  Content: ContentContainer,
  Title: ContentTitle,
  Profile: ImageBox,
})

export default NewsCard
