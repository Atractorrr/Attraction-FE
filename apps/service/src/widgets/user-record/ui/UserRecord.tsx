'use client'

import { skipToken, useQuery } from '@tanstack/react-query'
import { useAuth } from '@/entities/auth'
import { Calendar, calculateLevel, fetchUserRecord } from '@/features/calendar'
import { Graph } from '@/features/graph'
import { Container } from '@/shared/ui'

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
        <Container className="flex h-full items-center justify-center p-5 pt-7">
          {calendarDataWithLevel ? (
            <Calendar calendarData={calendarDataWithLevel} />
          ) : (
            ''
          )}
        </Container>
      </div>
      <div className="h-auto w-full xl:w-1/2">
        <Graph />
      </div>
    </div>
  )
}
