import { ThumbnailImage } from '@/shared/ui'

interface ProfileImageProps {
  imgSrc: string
}

export default function ProfileImage({ imgSrc }: ProfileImageProps) {
  return (
    <div className="relative h-[48vw] max-h-60 min-h-40 w-full overflow-hidden bg-gray-100 sm:h-64 md:rounded-lg dark:bg-gray-700">
      <ThumbnailImage src={imgSrc} alt="배경사진" type="article" />
    </div>
  )
}
