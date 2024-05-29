import { NewsletterIntroduce } from '@/widgets/newsletter-introduce'

export default function NewsletterPage({
  params,
}: {
  params: { newsletterId: string }
}) {
  return <NewsletterIntroduce newsletterId={params.newsletterId} />
}
