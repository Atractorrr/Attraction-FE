'use client'

import dynamic from 'next/dynamic'
import React from 'react'

type Props = {}

const ActivityCalendarNoSSR = dynamic(() => import('react-activity-calendar'), {
  ssr: false,
})

export default function Calendar({}: Props) {
  return (
    <div className="w-full rounded-lg bg-white p-5 md:w-2/3">
      <ActivityCalendarNoSSR
        data={[
          { date: '2024-01-01', level: 4, count: 10 },
          { date: '2024-12-30', level: 4, count: 10 },
        ]}
        blockSize={10}
        showWeekdayLabels={true}
        hideMonthLabels={false}
      />
    </div>
  )
}
