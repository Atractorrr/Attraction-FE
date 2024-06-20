'use client'

import Image from 'next/image'
import { useState } from 'react'
import MainTextLogoSVG, { MainLogoSVG } from './MainLogoSVG'

interface ThumbnailImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  type: 'article' | 'profile'
  iconType?: 'text' | 'icon'
}

export default function ThumbnailImage({
  src,
  alt,
  width,
  height,
  type,
  iconType,
}: ThumbnailImageProps) {
  const [isError, setError] = useState(false)

  if (!isError) {
    return (
      <Image
        src={src}
        alt={alt}
        width={type === 'profile' ? width ?? 300 : width ?? 720}
        height={type === 'profile' ? height ?? 300 : height ?? 480}
        className="block size-full object-cover"
        onError={() => setError(true)}
      />
    )
  }
  return (
    <p className="relative flex size-full items-center justify-center bg-gray-200 dark:bg-gray-700">
      {(!iconType && iconType === 'icon') ||
      (!iconType && type === 'profile') ? (
        <MainLogoSVG className="block h-auto w-1/3 text-gray-100 dark:text-gray-600" />
      ) : (
        <MainTextLogoSVG className="block h-auto w-1/3 text-gray-100 dark:text-gray-600" />
      )}
      <span className="blind">대체 이미지: {alt}</span>
    </p>
  )
}
