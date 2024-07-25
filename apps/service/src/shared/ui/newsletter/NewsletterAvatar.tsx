import Link from 'next/link'
import ThumbnailImage from '../ThumbnailImage'

const newsletterAvatarSize = {
  md: 'size-7',
  lg: 'size-8',
}

interface NewsletterAvatarProps {
  url: string
  name: string
  id?: number
  size?: keyof typeof newsletterAvatarSize
}

export default function NewsletterAvatar({
  id,
  name,
  url,
  size = 'md',
}: NewsletterAvatarProps) {
  if (id === undefined) {
    return (
      <div
        className={`block ${newsletterAvatarSize[size]} overflow-hidden rounded-full border border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-700`}>
        <ThumbnailImage
          src={url}
          alt={`뉴스레터 썸네일 이미지: ${name}`}
          type="profile"
        />
      </div>
    )
  }

  return (
    <Link
      href={`/newsletter/${id}`}
      title={`뉴스레터 상세 보기: ${name}`}
      className={`block ${newsletterAvatarSize[size]} overflow-hidden rounded-full border border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-700`}>
      <ThumbnailImage
        src={url}
        alt={`뉴스레터 썸네일 이미지: ${name}`}
        type="profile"
      />
    </Link>
  )
}
