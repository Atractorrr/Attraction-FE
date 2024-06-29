import { Metadata } from 'next'
import { DiscoverLayout, DiscoverResultLayout } from '@/widgets/discover'
import { Header } from '@/widgets/menu'

export const metadata: Metadata = {
  title: '뉴스레터 탐색',
}

export const revalidate = 300

interface DiscoverPageProps {
  searchParams?: { [key: string]: string | undefined }
}

export default function DiscoverPage({ searchParams }: DiscoverPageProps) {
  const queryParam = searchParams?.q
  const keyword = queryParam ? decodeURIComponent(queryParam) : null

  return (
    <>
      <Header title="뉴스레터 탐색" />
      {keyword ? (
        <DiscoverResultLayout keyword={keyword} />
      ) : (
        <DiscoverLayout />
      )}
    </>
  )
}
