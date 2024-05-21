import Image from 'next/image'

type Props = {
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
}: Props) {
  return (
    <div
      className={`relative ${height} ${width} ${rounded} shrink-0 overflow-hidden `}>
      <Image src={imgSrc} alt={alt} fill className="object-cover" />
    </div>
  )
}
