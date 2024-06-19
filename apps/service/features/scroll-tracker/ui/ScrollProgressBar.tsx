interface ScrollProgressBarProps {
  progress: number
}

export default function ScrollProgressBar({
  progress,
}: ScrollProgressBarProps) {
  return (
    <p className="fixed inset-x-0 top-[60px] z-10 h-1 overflow-hidden bg-gray-200 md:left-20 md:top-0 md:h-2 2xl:left-72 dark:bg-gray-600">
      <span
        className="absolute inset-0 bg-blue-400"
        style={{ width: `${progress}%` }}
      />
    </p>
  )
}
