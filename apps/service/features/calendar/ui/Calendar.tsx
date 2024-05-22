'use client'

import dynamic from 'next/dynamic'
import React from 'react'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import { CALENDAR_LABELS, CALENDAR_THEME } from '../constant'
import { CalendarElement } from '../model'

interface CalendarProps {
  calendarData: (CalendarElement & { level: number })[]
}

const ActivityCalendarNoSSR = dynamic(() => import('react-activity-calendar'), {
  ssr: false,
})

export default function Calendar({ calendarData }: CalendarProps) {
  return (
    <section className="w-full rounded-2xl border border-gray-100 bg-white p-5 md:w-2/3">
      <ActivityCalendarNoSSR
        // TODO: 처음부터 끝까지 보여줄 로직 구상하기
        data={[
          { date: '2024-01-01', count: 1, level: 3 },
          ...calendarData,
          { date: '2024-12-31', count: 2, level: 4 },
        ]}
        labels={CALENDAR_LABELS}
        blockSize={10}
        showWeekdayLabels
        hideMonthLabels={false}
        theme={CALENDAR_THEME}
        renderBlock={(block, activity) => {
          const message = activity.count
            ? `${activity.date}에 ${activity.count}개의 상식을 쌓았어요 🎉`
            : `${activity.date}에는 상식을 쌓지 못했어요 🥲`

          return React.cloneElement(block, {
            'data-tooltip-id': 'react-tooltip',
            'data-tooltip-html': message,
          })
        }}
      />
      <ReactTooltip id="react-tooltip" />
    </section>
  )
}
