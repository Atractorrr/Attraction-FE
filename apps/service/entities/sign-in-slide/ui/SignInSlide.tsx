import Image from 'next/image'

interface SignInSlideProps {
  image: string
  description: string
}

export default function SignInSlide({ image, description }: SignInSlideProps) {
  return (
    <div className="relative size-full overflow-hidden rounded-xl bg-gray-100">
      <Image
        className="h-full object-cover"
        src={image}
        width={900}
        height={900}
        alt="login slide image"
      />
      <p className="absolute bottom-2 right-2">{description}</p>
    </div>
  )
}
