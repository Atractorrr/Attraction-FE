import Image from 'next/image'

export default function MainAds() {
  return (
    <Image
      src="/images/ads.jpg"
      width={1500}
      height={1100}
      className="h-fit w-full rounded-2xl object-cover"
      alt="ads"
    />
  )
}
