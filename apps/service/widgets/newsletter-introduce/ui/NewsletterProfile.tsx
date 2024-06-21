import { Container, ThumbnailImage } from '@/shared/ui'
import { HouseOutline } from '@attraction/icons'
import NewsletterSubscribeButton from './NewsletterSubscribeButton'
import { fetchNewsletterProfile } from '../api'

interface NewsletterProfileProps {
  newsletterId: string
}

export default async function NewsletterProfile({
  newsletterId,
}: NewsletterProfileProps) {
  const { data } = await fetchNewsletterProfile(newsletterId)

  return (
    <Container>
      <div className="flex w-full justify-start gap-x-6">
        <div className="flex w-full flex-col gap-y-4 p-5 md:gap-y-2">
          <div className="flex gap-x-6">
            <div className="h-[150px] w-[180px] shrink-0 overflow-hidden rounded-md bg-gray-100 md:h-40 dark:bg-gray-700">
              <ThumbnailImage
                src={data.thumbnailUrl}
                alt={`뉴스레터 이름 : ${data.name}`}
                type="profile"
                logoType="text"
              />
            </div>
            <div className="flex flex-col gap-y-3 break-keep">
              <h3 className="text-2xl font-bold">{data.name}</h3>
              <div className="flex flex-col gap-3 text-gray-500 md:flex-row dark:text-gray-400">
                <p>{data.uploadDays}</p>
                <a
                  href={data.subscribeLink}
                  className="flex gap-x-1 text-blue-400"
                  target="_blank"
                  rel="noopener noreferrer">
                  <HouseOutline className="size-5" />
                  <span>공식 홈페이지</span>
                </a>
              </div>
              <p className="hidden break-keep text-gray-500 md:block dark:text-gray-400">
                {data.description}
              </p>
            </div>
          </div>
          <p className="break-keep text-gray-500 md:hidden dark:text-gray-400">
            {data.description}
          </p>
          <NewsletterSubscribeButton
            newsletterId={newsletterId}
            subscribeLink={data.subscribeLink}
          />
        </div>
      </div>
    </Container>
  )
}
