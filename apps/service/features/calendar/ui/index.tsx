'use client'

import dynamic from 'next/dynamic'
import React from 'react'
import { calendarTheme, labels } from '../libs/constant'
import { CalendarElementType } from '../model/types'

type Props = {
  calendarData: (CalendarElementType & { level: number })[]
}

const ActivityCalendarNoSSR = dynamic(() => import('react-activity-calendar'), {
  ssr: false,
})

export default function Calendar({ calendarData }: Props) {
  return (
    <div className="w-full rounded-2xl border border-gray-100 bg-white p-5 md:w-2/3">
      <ActivityCalendarNoSSR
        // TODO: 처음부터 끝까지 보여줄 로직 구상하기
        data={[
          ...calendarData,
          { date: '2024-01-01', count: 10, level: 4 },
          { date: '2024-12-30', count: 2, level: 2 },
        ]}
        labels={labels}
        blockSize={10}
        showWeekdayLabels
        hideMonthLabels={false}
        theme={calendarTheme}
      />
    </div>
  )
}
