import Image from 'next/image'

interface ImageBoxProps {
  imgSrc: string
  alt: string
  rounded: string
  width: string
  height: string
}

export default function ImageBox({
  imgSrc,
  alt,
  rounded,
  width,
  height,
}: ImageBoxProps) {
  return (
    <div
      className={`relative ${height} ${width} ${rounded} shrink-0 overflow-hidden `}>
      <Image
        src={imgSrc || '/images/default-1x1.jpg'}
        alt={alt}
        fill
        className="object-cover"
      />
    </div>
  )
}
