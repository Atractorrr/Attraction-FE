import { TrendNewsletterResponse } from '../model'
import TrendNewsletterItem from './TrendNewsletterItem'

interface TrendNewsletterListProps {
  content: TrendNewsletterResponse['content']
}

export default function TrendNewsletterList({
  content,
}: TrendNewsletterListProps) {
  return (
    <section className="grid gap-4 xl:grid-cols-2">
      {content.newsletters.map((newsletter) => (
        <TrendNewsletterItem key={newsletter.id} newsletter={newsletter} />
      ))}
    </section>
  )
}
