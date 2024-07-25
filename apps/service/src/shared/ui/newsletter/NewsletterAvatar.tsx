import Link from 'next/link'
import React, { createElement } from 'react'
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
  return createElement(
    id !== undefined ? Link : 'div',
    {
      className: `block ${newsletterAvatarSize[size]} overflow-hidden rounded-full border border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-700`,
      ...(id !== undefined
        ? { href: `/newsletter/${id}`, title: `뉴스레터 상세 보기: ${name}` }
        : {}),
    } as { href: string; title: string; className: string },
    <ThumbnailImage
      src={url}
      alt={`뉴스레터 썸네일 이미지: ${url}`}
      type="profile"
    />,
  )
}
