import { PropsWithChildren } from 'react'
import { ContentContainer, ContentTitle, ThumbnailImage } from '@/shared/ui'
import CardThumbnail from './CardThumbnail'

function CardMain({ children }: PropsWithChildren) {
  return <div className="w-80">{children}</div>
}
const NewsCard = Object.assign(CardMain, {
  Thumbnail: CardThumbnail,
  Content: ContentContainer,
  Title: ContentTitle,
  Profile: ThumbnailImage,
})

export default NewsCard
