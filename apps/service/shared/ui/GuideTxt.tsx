interface GuideTxtProps {
  title: string
  sub?: string
}

export default function GuideTxt({ title, sub }: GuideTxtProps) {
  return (
    <p>
      <strong className="block break-keep text-center text-base font-medium md:text-lg">
        {title}
      </strong>
      {sub && (
        <span className="mt-2 block break-keep text-center text-sm text-gray-500 md:text-base dark:text-gray-400">
          {sub}
        </span>
      )}
    </p>
  )
}
