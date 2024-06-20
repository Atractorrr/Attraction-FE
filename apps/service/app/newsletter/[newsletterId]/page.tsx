import { Metadata } from 'next'
import { NewsletterIntroduce } from '@/widgets/newsletter-introduce'

export const metadata: Metadata = {
  title: '뉴스레터 소개',
}

export default function NewsletterPage({
  params,
}: {
  params: { newsletterId: string }
}) {
  return <NewsletterIntroduce newsletterId={params.newsletterId} />
}
