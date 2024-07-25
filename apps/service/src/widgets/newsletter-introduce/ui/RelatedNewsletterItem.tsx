'use client'

import { NewsletterItem } from '@/shared/ui'
import type { RelatedNewsletter } from '../model'

export default function RelatedNewsletterItem({
  id,
  name,
  thumbnailUrl,
  description,
}: RelatedNewsletter) {
  return (
    <NewsletterItem id={id} name={name}>
      <NewsletterItem.Thumbnail url={thumbnailUrl} />
      <NewsletterItem.Content>
        <NewsletterItem.Description>{description}</NewsletterItem.Description>
      </NewsletterItem.Content>
    </NewsletterItem>
  )
}
