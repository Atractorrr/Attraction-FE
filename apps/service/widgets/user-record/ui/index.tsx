import * as Features from '@/features'

type Props = {
  userId: string
}

export default async function UserRecord({ userId }: Props) {
  const calendarData = await Features.fetchUserRecord(userId)
  const calendarDataWithLevel = Features.calculateLevel(calendarData)

  return (
    <div className="mt-8 flex w-full flex-col gap-6 md:flex-row">
      <Features.Calendar calendarData={calendarDataWithLevel} />
      <Features.Graph />
    </div>
  )
}
