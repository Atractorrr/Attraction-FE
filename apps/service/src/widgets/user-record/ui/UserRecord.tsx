'use client'

import { useAuth } from '@/entities/auth'
import { Calendar, calculateLevel, fetchUserRecord } from '@/features/calendar'
import { Graph } from '@/features/graph'
import { skipToken, useQuery } from '@tanstack/react-query'

export default function UserRecord() {
  const { userEmail } = useAuth()
  const { data: calendarDataWithLevel } = useQuery({
    queryKey: ['userCalendar', userEmail],
    queryFn: userEmail ? () => fetchUserRecord(userEmail) : skipToken,
    select: (data) => calculateLevel(data),
  })

  return (
    <div className="mt-6 flex w-full flex-col items-stretch justify-start gap-6 xl:flex-row xl:justify-between">
      <div className="h-auto w-full xl:w-2/3">
        {calendarDataWithLevel ? (
          <Calendar calendarData={calendarDataWithLevel} />
        ) : (
          ''
        )}
      </div>
      <div className="h-auto w-full xl:w-1/2">
        <Graph />
      </div>
    </div>
  )
}
