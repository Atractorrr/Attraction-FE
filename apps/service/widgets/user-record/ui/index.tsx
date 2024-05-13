import * as Features from '@/features'

type Props = {}

export default function UserRecord({}: Props) {
  return (
    <>
      <Features.Calender.UI />
      <Features.Graph.UI />
    </>
  )
}
