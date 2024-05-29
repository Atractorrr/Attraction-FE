import { EmblaOptionsType } from 'embla-carousel'
import { Carousel } from '@/shared/ui'
import { SignInSlide } from '@/entities/sign-in-slide'
import { SIGN_IN_CAROUSEL_INTRODUCE } from '../constant/introduce'

export default function SignInCarousel() {
  const carouselSlides = SIGN_IN_CAROUSEL_INTRODUCE.map((item) => (
    <SignInSlide
      key={item.key}
      image={item.image}
      description={item.description}
    />
  ))

  const options: EmblaOptionsType = {
    align: 'center',
    slidesToScroll: 1,
  }

  return (
    <section className="h-full overflow-x-auto">
      <Carousel options={options} slides={carouselSlides} />
    </section>
  )
}
