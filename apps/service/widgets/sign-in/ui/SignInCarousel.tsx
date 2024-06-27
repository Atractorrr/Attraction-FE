import { EmblaOptionsType } from 'embla-carousel'
import { Carousel } from '@/shared/ui'
import SignInSlide from './SignInSlide'

export default function SignInCarousel() {
  const carouselSlides = [
    <SignInSlide
      key={1}
      index={1}
      description={
        <>
          쏟아지는 뉴스레터로 인해 메일함 정리가 힘드셨나요?{' '}
          <br className="hidden sm:block" />
          오직 뉴스레터에만 집중할 수 있도록 <br className="hidden sm:block" />
          어트랙션이 정리해드려요!
        </>
      }
    />,
    <SignInSlide
      key={2}
      index={2}
      description={
        <>
          힘들게 찾아다닐 필요 없이 <br className="hidden sm:block" />
          오직 뉴스레터에만 집중할 수 있도록 <br className="hidden sm:block" />
          어트랙션이 맞춤으로 추천해드려요!
        </>
      }
    />,
    <SignInSlide
      key={3}
      index={3}
      description={
        <>
          함께할 준비가 되셨나요? <br />
          뉴스레터의 모든 것 <br className="hidden sm:block" />
          어트랙션에서 쉽고 간편하게 즐겨보세요!
        </>
      }
    />,
  ]

  const options: EmblaOptionsType = {
    align: 'center',
    slidesToScroll: 1,
  }

  return (
    <section className="h-full overflow-x-auto">
      <Carousel options={options} slides={carouselSlides} showDots />
    </section>
  )
}
