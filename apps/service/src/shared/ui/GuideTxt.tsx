interface GuideTxtProps {
  title: string
  sub?: string
  className?: string
}

export default function GuideTxt({ title, sub, className }: GuideTxtProps) {
  return (
    <p className={className}>
      <strong className="block break-keep text-center text-base font-medium md:text-lg">
        {title}
      </strong>
      {sub ? (
        <span className="mt-2 block break-keep text-center text-sm text-gray-500 md:text-base dark:text-gray-400">
          {sub}
        </span>
      ) : null}
    </p>
  )
}
