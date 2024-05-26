import './embla.css'

interface EmblaBlurProps {
  direction: 'left' | 'right'
  show: boolean
}

export default function EmblaBlur({ direction, show }: EmblaBlurProps) {
  const className =
    direction === 'left' ? 'embla__blur__left' : 'embla__blur__right'

  return show ? <div className={className} /> : null
}
