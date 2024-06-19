'use client'

import { Button } from '@attraction/design-system'
import { subscribeNewsletter } from '../api'

interface NewsletterSubscribeButtonProps {
  email: string | undefined
  newsletterId: string
  subscribeLink: string
}

export default function NewsletterSubscribeButton({
  email,
  newsletterId,
  subscribeLink,
}: NewsletterSubscribeButtonProps) {
  const handleSubscribe = () => {
    window.open(subscribeLink, '_blank', 'noopener,noreferrer')

    if (email) {
      subscribeNewsletter(email, newsletterId)
    }
  }

  return (
    <Button
      className="h-[40px] w-full rounded-lg bg-gray-700 py-2 text-center text-white md:w-[180px] dark:bg-white dark:text-gray-700"
      onClick={() => handleSubscribe()}>
      구독하기
    </Button>
  )
}
