'use client'

import React, { ReactNode, useCallback, useEffect, useState } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import './embla.css'
import EmblaBlur from './EmblaBlur'
import EmblaButton from './EmblaButton'

interface CarouselProps {
  slides: ReactNode[]
  options?: EmblaOptionsType
  showButton?: boolean
  slideSpacing?: string
}

export default function EmblaCarousel({
  slides,
  options,
  showButton = false,
  slideSpacing = '1.0',
}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const [showLeftBlur, setShowLeftBlur] = useState(false)
  const [showRightBlur, setShowRightBlur] = useState(!showButton)
  const [showLeftButton, setShowLeftButton] = useState(false)
  const [showRightButton, setShowRightButton] = useState(showButton)

  useEffect(() => {
    if (emblaApi) {
      const updateUI = () => {
        const canScrollPrev = emblaApi.canScrollPrev()
        const canScrollNext = emblaApi.canScrollNext()

        setShowLeftBlur(canScrollPrev && !showButton)
        setShowRightBlur(canScrollNext && !showButton)
        setShowLeftButton(canScrollPrev && showButton)
        setShowRightButton(canScrollNext && showButton)
      }

      emblaApi.on('select', updateUI)
    }
  }, [emblaApi, showButton])

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev()
    }
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext()
    }
  }, [emblaApi])

  return (
    <section
      className="embla"
      style={
        { '--slide-spacing': `${slideSpacing}rem` } as React.CSSProperties
      }>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide: ReactNode, idx) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={idx} className="embla__slide">
              {slide}
            </div>
          ))}
        </div>
        <EmblaBlur direction="left" show={showLeftBlur} />
        <EmblaBlur direction="right" show={showRightBlur} />
        <EmblaButton
          direction="left"
          showButton={showLeftButton}
          onClick={scrollPrev}
        />
        <EmblaButton
          direction="right"
          showButton={showRightButton}
          onClick={scrollNext}
        />
      </div>
    </section>
  )
}
