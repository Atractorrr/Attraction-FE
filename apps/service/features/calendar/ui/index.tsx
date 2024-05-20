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
    <div className="w-full rounded-lg bg-white p-5 md:w-2/3">
      <ActivityCalendarNoSSR
        data={calendarData}
        labels={labels}
        blockSize={10}
        showWeekdayLabels
        hideMonthLabels={false}
        theme={calendarTheme}
      />
    </div>
  )
}
