import { ThumbnailImage } from '@/shared/ui'

interface ProfileImageProps {
  imgSrc: string
}

export default function ProfileImage({ imgSrc }: ProfileImageProps) {
  return (
    <div className="relative size-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700">
      <ThumbnailImage src={imgSrc} alt="썸네일 이미지" type="profile" />
    </div>
  )
}
