import { DiscoverLayout, DiscoverResultLayout } from '@/widgets/discover'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '뉴스레터 탐색',
}

export const revalidate = 300

export default function DiscoverPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined }
}) {
  const keyword = searchParams?.q ? decodeURIComponent(searchParams?.q) : null

  return keyword ? (
    <DiscoverResultLayout keyword={keyword} />
  ) : (
    <DiscoverLayout />
  )
}
