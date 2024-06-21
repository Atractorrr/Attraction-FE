import { Metadata } from 'next'
import { DiscoverResultLayout } from '@/widgets/discover'

export const metadata: Metadata = {
  title: '검색 결과',
}

export const revalidate = 3600

export default function DiscoverResultPage({
  params,
}: {
  params: { result: string }
}) {
  const keyword = decodeURI(params.result)

  return <DiscoverResultLayout keyword={keyword} />
}
