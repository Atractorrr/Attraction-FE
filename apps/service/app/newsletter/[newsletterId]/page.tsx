import { Metadata } from 'next'
import {
  NewsletterIntroduce,
  fetchNewsletterProfile,
} from '@/widgets/newsletter-introduce'

export const revalidate = 300
interface NewsletterPageProps {
  params: { newsletterId: string }
}

export async function generateMetadata({
  params,
}: NewsletterPageProps): Promise<Metadata> {
  const newsletterId = Number(params.newsletterId)

  if (Number.isNaN(newsletterId)) {
    throw new Error('잘못된 접근이에요')
  }

  const { data } = await fetchNewsletterProfile(newsletterId)

  return {
    title: `[${data?.name ?? ''}] 뉴스레터 소개`,
  }
}

export default function NewsletterPage({ params }: NewsletterPageProps) {
  const newsletterId = Number(params.newsletterId)

  if (Number.isNaN(newsletterId)) {
    throw new Error('잘못된 접근이에요')
  }

  return <NewsletterIntroduce newsletterId={newsletterId} />
}
