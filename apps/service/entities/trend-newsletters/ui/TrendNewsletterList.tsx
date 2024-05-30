import { TrendNewsletterResponse } from '../model'
import TrendNewsletterItem from './TrendNewsletterItem'

export default function TrendNewsletterList({
  mainPageNewsletters,
}: TrendNewsletterResponse) {
  return (
    <section className="grid gap-4 xl:grid-cols-2">
      {mainPageNewsletters.map((newsletter) => (
        <TrendNewsletterItem key={newsletter.id} newsletter={newsletter} />
      ))}
    </section>
  )
}
