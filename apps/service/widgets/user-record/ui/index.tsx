import * as Features from '@/features'

type Props = {}

export default function UserRecord({}: Props) {
  return (
    <div className="mt-8 flex w-full flex-col gap-6 md:flex-row">
      <Features.Calendar />
      <Features.Graph />
    </div>
  )
}
