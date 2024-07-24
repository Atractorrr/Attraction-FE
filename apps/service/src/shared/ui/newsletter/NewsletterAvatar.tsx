import Link from 'next/link'
import React from 'react'
import ThumbnailImage from '../ThumbnailImage'

const newsletterAvatarSize = {
  md: 'size-7',
  lg: 'size-8',
}

interface NewsletterAvatarProps {
  id?: number
  name: string
  url: string
  size?: keyof typeof newsletterAvatarSize
}

export default function NewsletterAvatar({
  id,
  name,
  url,
  size = 'md',
}: NewsletterAvatarProps) {
  const Component = id !== undefined ? Link : 'div'

  return (
    <Component
      href={`/newsletter/${id}`}
      title={id !== undefined ? `뉴스레터 상세 보기: ${name}` : undefined}
      className={`mr-2 block ${newsletterAvatarSize[size]} overflow-hidden rounded-full border border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-700`}>
      <ThumbnailImage
        src={url}
        alt={`뉴스레터 썸네일 이미지: ${url}`}
        type="profile"
      />
    </Component>
  )
}
