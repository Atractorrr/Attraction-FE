'use client'

import React, { ReactNode, useCallback } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import './embla.css'
import { ChevronLeftOutline, ChevronRightOutline } from '@attraction/icons'

interface CarouselProps {
  slides: ReactNode[]
  options?: EmblaOptionsType
  showBlur?: 'both' | 'left' | 'right' | 'none'
  showButton?: 'both' | 'left' | 'right' | 'none'
}

export default function EmblaCarousel({
  slides,
  options,
  showBlur = 'none',
  showButton = 'none',
}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide: ReactNode, idx) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={idx} className="embla__slide">
              {slide}
            </div>
          ))}
        </div>
      </div>
      {showBlur === 'both' || showBlur === 'left' ? (
        <div className="embla__blur__left" />
      ) : null}
      {showBlur === 'both' || showBlur === 'right' ? (
        <div className="embla__blur__right" />
      ) : null}
      {showButton === 'both' || showButton === 'left' ? (
        <button
          aria-label="Previous"
          className="embla__left__button"
          type="button"
          onClick={scrollPrev}>
          <ChevronLeftOutline className="size-6" />
        </button>
      ) : null}
      {showButton === 'both' || showButton === 'right' ? (
        <button
          aria-label="Next"
          className="embla__right__button"
          type="button"
          onClick={scrollNext}>
          <ChevronRightOutline className="size-6" />
        </button>
      ) : null}
    </section>
  )
}
