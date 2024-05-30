import { Calendar, fetchUserRecord, calculateLevel } from '@/features/calendar'
import { Graph } from '@/features/graph'

interface UserRecordProps {
  userId: string
}

export default async function UserRecord({ userId }: UserRecordProps) {
  const calendarData = await fetchUserRecord(userId)
  const calendarDataWithLevel = calculateLevel(calendarData)

  return (
    <div className="mt-6 flex w-full flex-col items-stretch justify-start gap-6 lg:flex-row lg:justify-between">
      <div className="h-auto w-full lg:w-1/2">
        <Calendar calendarData={calendarDataWithLevel} />
      </div>
      <div className="h-auto w-full lg:w-1/2">
        <Graph />
      </div>
    </div>
  )
}
