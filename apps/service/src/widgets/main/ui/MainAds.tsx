import Image from 'next/image'

export default function MainAds() {
  return (
    <div className="px-5 md:px-0">
      <Image
        src="/images/beta-service-banner.jpg"
        width={1680}
        height={640}
        className="h-auto w-full rounded-2xl object-cover"
        alt="ads"
      />
    </div>
  )
}
