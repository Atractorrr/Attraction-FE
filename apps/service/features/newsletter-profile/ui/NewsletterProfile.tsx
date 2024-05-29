'use client'

import { Background, LoadingSpinner } from '@/shared/ui'
import { Button } from '@attraction/design-system'
import Image from 'next/image'
import Link from 'next/link'
import { HouseOutline } from '@attraction/icons'
import { UPLOAD_DAYS } from '@/shared/constant'
import { useNewsletterProfile } from '../lib'

interface NewsletterProfileProps {
  newsletterId: string
}

export default function NewsletterProfile({
  newsletterId,
}: NewsletterProfileProps) {
  const { data, isPending } = useNewsletterProfile(newsletterId)

  return (
    <Background>
      <div className="flex w-full justify-start gap-x-6">
        {isPending || !data ? (
          <LoadingSpinner />
        ) : (
          <div className="flex w-full flex-col gap-y-4 md:gap-y-2">
            <div className="flex gap-x-6">
              <Image
                className="size-full h-[150px] max-w-[180px] rounded-md object-cover md:h-40"
                src={data.thumbnail}
                width={500}
                height={500}
                alt={data.name}
              />
              <div className="flex flex-col gap-y-3">
                <h3 className="text-2xl font-bold">{data.name}</h3>
                <div className="flex flex-col gap-3 text-gray-500 md:flex-row dark:text-gray-400">
                  <p>
                    매주{' '}
                    {data.uploadDays
                      .map((day) => UPLOAD_DAYS[day])
                      .join(', ')
                      .trim()}
                  </p>
                  <Link
                    className="flex gap-x-1 text-blue-400"
                    href={data.mainLink}>
                    <HouseOutline className="size-5" />
                    <p>공식 홈페이지</p>
                  </Link>
                </div>
                <p className="hidden text-gray-500 md:block dark:text-gray-400">
                  {data.description}
                </p>
              </div>
            </div>
            <p className="text-gray-500 md:hidden dark:text-gray-400">
              {data.description}
            </p>
            <Button className="h-[40px] w-full rounded-lg bg-gray-700 py-2 text-white md:max-w-[180px]">
              구독하기
            </Button>
          </div>
        )}
      </div>
    </Background>
  )
}
