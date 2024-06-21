'use server'

import { Container, GuideTxt, ThumbnailImage, Title } from '@/shared/ui'
import { DocumentListOutline } from '@attraction/icons'
import { cookies } from 'next/headers'
import Link from 'next/link'
import { fetchSubscribeList } from '../api'
import { SubscribeItem } from '../model'

export default async function SubscribeList() {
  const email = cookies().get('email')?.value as string
  const subscribeList: SubscribeItem[] = await fetchSubscribeList(email)

  return (
    <Container className="h-full xl:h-auto xl:min-h-full">
      <div className="h-full pb-6">
        <div className="p-5 pb-4">
          <Title
            icon={<DocumentListOutline className="text-2xl" />}
            text="구독한 뉴스레터"
          />
        </div>
        {subscribeList.length !== 0 ? (
          <ul className="flex flex-col justify-start overflow-y-auto px-3 xl:max-h-[calc(100%-64px)]">
            {subscribeList.map((newsletter) => (
              <li key={newsletter.id} className="peer peer-[]:mt-1">
                <Link
                  href={`/newsletter/${newsletter.id}`}
                  className="flex items-center justify-start gap-3 overflow-hidden rounded-lg p-2 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700">
                  <div className="size-8">
                    <ThumbnailImage
                      src={newsletter.thumbnailUrl}
                      alt="썸네일 이미지"
                      type="profile"
                    />
                  </div>
                  <span className="w-[calc(100%-4rem)] truncate font-medium">
                    {newsletter.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div className="pb-32 pt-20">
            <GuideTxt
              title="구독한 뉴스레터가 없습니다"
              sub="지금 뉴스레터를 구독해보세요"
            />
          </div>
        )}
      </div>
    </Container>
  )
}
