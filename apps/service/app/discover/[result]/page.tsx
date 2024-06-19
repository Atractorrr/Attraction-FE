import { DiscoverResultLayout } from '@/widgets/discover'

export default function DiscoverResultPage({
  params,
}: {
  params: { result: string }
}) {
  const keyword = decodeURI(params.result)

  return <DiscoverResultLayout keyword={keyword} />
}
