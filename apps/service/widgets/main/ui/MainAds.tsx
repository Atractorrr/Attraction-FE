import Image from 'next/image'

export default function MainAds() {
  return (
    <div className="px-5 md:px-0">
      <Image
        src="/images/ads.jpg"
        width={1500}
        height={1100}
        className="h-auto w-full rounded-2xl object-cover"
        alt="ads"
      />
    </div>
  )
}
