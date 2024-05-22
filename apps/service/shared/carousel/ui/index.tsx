// /* eslint-disable react/require-default-props */

// 'use client'

// import React, { ReactNode, useCallback } from 'react'
// import { EmblaOptionsType } from 'embla-carousel'
// import useEmblaCarousel from 'embla-carousel-react'
// import './embla.css'
// import { ChevronLeftOutline, ChevronRightOutline } from '@attraction/icons'

// interface CarouselProps<T> {
//   slides: T[]
//   slideRenderer: (slide: T) => ReactNode
//   options?: EmblaOptionsType
//   showBlur?: 'both' | 'left' | 'right' | 'none'
//   showButton?: 'both' | 'left' | 'right' | 'none'
// }

// export default function EmblaCarousel<T>({
//   slides,
//   slideRenderer,
//   options,
//   showBlur = 'none',
//   showButton = 'none',
// }: CarouselProps<T>) {
//   const [emblaRef, emblaApi] = useEmblaCarousel(options)

//   const scrollPrev = useCallback(() => {
//     if (emblaApi) emblaApi.scrollPrev()
//   }, [emblaApi])

//   const scrollNext = useCallback(() => {
//     if (emblaApi) emblaApi.scrollNext()
//   }, [emblaApi])

//   return (
//     <section className="embla">
//       <div className="embla__viewport" ref={emblaRef}>
//         <div className="embla__container">
//           {slides.map((value, idx) => (
//             <div key={idx} className="embla__slide">
//               {slideRenderer(value)}
//             </div>
//           ))}
//         </div>
//       </div>
//       {showBlur === 'both' || showBlur === 'left' ? (
//         <div className="embla__blur__left" />
//       ) : (
//         <></>
//       )}
//       {showBlur === 'both' || showBlur === 'right' ? (
//         <div className="embla__blur__right" />
//       ) : (
//         <></>
//       )}
//       {showButton === 'both' || showButton === 'left' ? (
//         <button
//           className="embla__left__button"
//           type="button"
//           onClick={scrollPrev}>
//           <ChevronLeftOutline className="size-6" />
//         </button>
//       ) : (
//         <></>
//       )}
//       {showButton === 'both' || showButton === 'right' ? (
//         <button
//           className="embla__right__button"
//           type="button"
//           onClick={scrollNext}>
//           <ChevronRightOutline className="size-6" />
//         </button>
//       ) : (
//         <></>
//       )}
//     </section>
//   )
// }
