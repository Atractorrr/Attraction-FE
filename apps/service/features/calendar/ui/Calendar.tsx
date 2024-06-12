'use client'

import dynamic from 'next/dynamic'
import React from 'react'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import { ErrorBoundary } from 'react-error-boundary'
import { Background, ErrorGuideTxt } from '@/shared/ui'
import { useTheme } from '@/entities/theme'
import { CALENDAR_LABELS, CALENDAR_THEME } from '../constant'
import { CalendarElement } from '../model'

interface CalendarProps {
  calendarData: (CalendarElement & { level: number })[]
}

const ActivityCalendarNoSSR = dynamic(() => import('react-activity-calendar'), {
  ssr: false,
})

// const theme = typeof window !== 'undefined' ? localStorage.getItem('theme') : ''

export default function Calendar({ calendarData }: CalendarProps) {
  const { realTheme } = useTheme()
  return (
    <Background className="flex h-full justify-center p-6">
      <ErrorBoundary FallbackComponent={ErrorGuideTxt}>
        <ActivityCalendarNoSSR
          data={calendarData}
          labels={CALENDAR_LABELS}
          colorScheme={realTheme}
          theme={CALENDAR_THEME}
          blockSize={10}
          showWeekdayLabels
          hideMonthLabels={false}
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
      </ErrorBoundary>
    </Background>
  )
}
