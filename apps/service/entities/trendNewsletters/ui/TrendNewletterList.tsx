import { TrendNewsletterResponse } from '@/widgets/trendNewsletters'
import TrendNewsletterItem from './TrendNewsletterItem'

interface TrendNewletterListProps {
  content: TrendNewsletterResponse['content']
}

export default function TrendNewsletterList({
  content,
}: TrendNewletterListProps) {
  return (
    <section className="grid gap-4 xl:grid-cols-2">
      {content.newsletters.map((newsletter) => (
        // eslint-disable-next-line react/jsx-key
        <TrendNewsletterItem newsletter={newsletter} />
      ))}
    </section>
  )
}
