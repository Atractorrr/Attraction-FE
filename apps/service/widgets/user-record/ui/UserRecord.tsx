import { Calendar, fetchUserRecord, calculateLevel } from '@/features/calendar'
import { Graph } from '@/features/graph'

type Props = {
  userId: string
}

export default async function UserRecord({ userId }: Props) {
  const calendarData = await fetchUserRecord(userId)
  const calendarDataWithLevel = calculateLevel(calendarData)

  return (
    <div className="mt-8 flex w-full flex-col gap-6 md:flex-row">
      <Calendar calendarData={calendarDataWithLevel} />
      <Graph />
    </div>
  )
}
