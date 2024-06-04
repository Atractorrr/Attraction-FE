import { NewsletterIntroduce } from '@/widgets/newsletter-introduce'
import { cookies } from 'next/headers'

export default function NewsletterPage({
  params,
}: {
  params: { newsletterId: string }
}) {
  const email = cookies().get('email')?.value

  return (
    <NewsletterIntroduce email={email} newsletterId={params.newsletterId} />
  )
}
