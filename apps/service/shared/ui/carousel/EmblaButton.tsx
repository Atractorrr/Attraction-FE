import { ChevronLeftOutline, ChevronRightOutline } from '@attraction/icons'

interface EmblaButtonProps {
  direction: 'left' | 'right'
  showButton: boolean
  onClick: () => void
}

const LEFT = {
  icon: (
    <div className="size-9 rounded-full p-1 transition-all hover:bg-gray-50 dark:hover:bg-gray-700">
      <ChevronLeftOutline className="size-full" />
    </div>
  ),
  ariaLabel: 'Previous',
  className: 'embla__left__button',
}

const RIGHT = {
  icon: (
    <div className="size-9 rounded-full p-1 transition-all hover:bg-gray-50 dark:hover:bg-gray-700">
      <ChevronRightOutline className="size-full" />
    </div>
  ),
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
