'use client'

import { Button } from '@attraction/design-system'
import { useAuth } from '@/entities/auth'
import { subscribeNewsletter } from '../api'

interface NewsletterSubscribeButtonProps {
  newsletterId: string
  subscribeLink: string
}

export default function NewsletterSubscribeButton({
  newsletterId,
  subscribeLink,
}: NewsletterSubscribeButtonProps) {
  const { userEmail } = useAuth()
  const handleSubscribe = () => {
    window.open(subscribeLink, '_blank', 'noopener,noreferrer')

    if (userEmail) {
      subscribeNewsletter(userEmail, newsletterId)
    }
  }

  return (
    <Button
      className="mt-1 h-[40px] w-full rounded-lg bg-gray-700 py-2 text-center text-white md:mt-0 dark:bg-white dark:text-gray-700"
      onClick={() => handleSubscribe()}>
      구독하기
    </Button>
  )
}
