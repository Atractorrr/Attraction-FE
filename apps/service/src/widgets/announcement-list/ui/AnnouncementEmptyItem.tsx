import Image from 'next/image'

export interface AnnouncementEmptyItemProps {
  comment?: string
  render?: boolean
}

export function AnnouncementEmptyItem({
  comment = '공지사항이 없어요',
  render: isRender = false,
}: AnnouncementEmptyItemProps) {
  if (!isRender) {
    return null
  }

  return (
    <tr className="block w-full md:table-row md:w-auto">
      <td colSpan={3} className="block w-full md:table-cell md:w-auto">
        <p className="flex w-full flex-col items-center justify-center space-y-8 pb-28 pt-20">
          <span className="rounded-full bg-gray-50 p-6 dark:bg-gray-700">
            <Image
              src="/images/not-found-icon.png"
              alt="빈 폴더"
              width={80}
              height={80}
            />
          </span>
          <span className=" break-keep text-center xs:text-lg">{comment}</span>
        </p>
      </td>
    </tr>
  )
}
