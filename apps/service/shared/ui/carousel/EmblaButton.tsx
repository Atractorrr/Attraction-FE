import { ChevronLeftOutline, ChevronRightOutline } from '@attraction/icons'

interface EmblaButtonProps {
  direction: 'left' | 'right'
  showButton: boolean
  onClick: () => void
}

const LEFT = {
  icon: <ChevronLeftOutline className="size-5" />,
  ariaLabel: 'Previous',
  className: 'embla__left__button',
}

const RIGHT = {
  icon: <ChevronRightOutline className="size-5" />,
  ariaLabel: 'Next',
  className: 'embla__right__button',
}

export default function EmblaButton({
  direction,
  showButton,
  onClick,
}: EmblaButtonProps) {
  const { ariaLabel, className, icon } = direction === 'left' ? LEFT : RIGHT

  return showButton ? (
    <div className="relative">
      <button
        aria-label={ariaLabel}
        className={className}
        type="button"
        onClick={onClick}>
        {icon}
      </button>
    </div>
  ) : null
}
