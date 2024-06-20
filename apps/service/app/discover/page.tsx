import { Metadata } from 'next'
import DiscoverLayout from '@/widgets/discover/ui/DiscoverLayout'

export const metadata: Metadata = {
  title: '뉴스레터 탐색',
}

export default function DiscoverPage() {
  return <DiscoverLayout />
}
