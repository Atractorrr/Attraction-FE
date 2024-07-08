import { EmblaOptionsType } from 'embla-carousel'
import { Carousel } from '@/shared/ui'
import SignInSlide from './SignInSlide'

export default function SignInCarousel() {
  const carouselSlides = [
    <SignInSlide
      key={1}
      index={1}
      title="뉴스레터 맞춤 추천"
      description={
        <>
          좋은 뉴스레터를 놓치고 싶지 않다면? <br />
          관심사를 기반으로 뉴스레터를 추천해드려요!
        </>
      }
    />,
    <SignInSlide
      key={2}
      index={2}
      title="메일함 자동 정리"
      description={
        <>
          쏟아지는 뉴스레터로 인해 메일함 정리가 힘드셨나요? <br />
          오직 뉴스레터에만 집중할 수 있도록 자동으로 모아드려요!
        </>
      }
    />,
    <SignInSlide
      key={3}
      index={3}
      title="뉴스레터 구독 관리"
      description={
        <>
          귀찮게 하나하나 찾아다닐 필요 없이 <br />
          여러 뉴스레터를 한 곳에서 간편하게 관리해요!
        </>
      }
    />,
  ]

  const options: EmblaOptionsType = {
    align: 'center',
    slidesToScroll: 1,
  }

  return (
    <div className="">
      <Carousel options={options} slides={carouselSlides} showDots />
    </div>
  )
}
