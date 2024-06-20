import { cookies } from 'next/headers'
import { Calendar, fetchUserRecord, calculateLevel } from '@/features/calendar'
import { Graph } from '@/features/graph'

export default async function UserRecord() {
  const email = cookies().get('email')?.value as string
  const calendarData = await fetchUserRecord(email)
  const calendarDataWithLevel = calculateLevel(calendarData)

  return (
    <div className="mt-6 flex w-full flex-col items-stretch justify-start gap-6 xl:flex-row xl:justify-between">
      <div className="h-auto w-full xl:w-2/3">
        <Calendar calendarData={calendarDataWithLevel} />
      </div>
      <div className="h-auto w-full xl:w-1/2">
        <Graph />
      </div>
    </div>
  )
}
