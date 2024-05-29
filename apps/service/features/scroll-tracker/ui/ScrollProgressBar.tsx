interface ScrollProgressBarProps {
  progress: number
}

export default function ScrollProgressBar({
  progress,
}: ScrollProgressBarProps) {
  return (
    <p className="fixed inset-x-0 top-0 z-10 h-2 overflow-hidden bg-gray-200 md:left-20 2xl:left-72 dark:bg-gray-600">
      <span
        className="absolute inset-0 bg-blue-400"
        style={{ width: `${progress}%` }}
      />
    </p>
  )
}
