import { Metadata } from 'next'
import { NewsletterIntroduce } from '@/widgets/newsletter-introduce'

export const metadata: Metadata = {
  title: '뉴스레터 소개',
}

export const revalidate = 1800

interface NewsletterPageProps {
  params: { newsletterId: string }
}

export default function NewsletterPage({ params }: NewsletterPageProps) {
  const newsletterId = Number(params.newsletterId)

  if (Number.isNaN(newsletterId)) {
    throw new Error('잘못된 접근이에요')
  }

  return <NewsletterIntroduce newsletterId={newsletterId} />
}
