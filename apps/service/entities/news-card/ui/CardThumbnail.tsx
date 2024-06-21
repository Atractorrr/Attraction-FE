import { ThumbnailImage } from '@/shared/ui'

interface CardThumbnailProps {
  imgSrc: string
  alt: string
  readPercentage: number
  readingTime: number
}

export default function CardThumbnail({
  imgSrc,
  alt,
  readPercentage,
  readingTime,
}: CardThumbnailProps) {
  // TODO: clsx cva 적용 필수

  return (
    <div className="relative justify-end overflow-hidden rounded-lg">
      <div className="h-48 max-h-60 min-h-40 w-full shrink-0 overflow-hidden">
        <ThumbnailImage type="article" src={imgSrc} alt={alt} />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gray-200">
        <span
          className="absolute inset-y-0 bg-blue-400"
          style={{ width: `${readPercentage}%` }}
        />
      </div>
      <div className="absolute bottom-2 right-2 w-fit self-end rounded-md bg-black/60 p-1 text-xs text-white ">
        약 {readingTime}분
      </div>
    </div>
  )
}
