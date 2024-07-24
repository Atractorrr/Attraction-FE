'use client'

import React from 'react'
import ActivityCalendar from 'react-activity-calendar'
import { ErrorBoundary } from 'react-error-boundary'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import { useTheme } from '@/entities/theme'
import { GuideTxt } from '@/shared/ui'
import { CALENDAR_LABELS, CALENDAR_THEME } from '../constant'
import { CalendarElement } from '../model'

interface CalendarProps {
  calendarData: (CalendarElement & { level: number })[]
}

export default function Calendar({ calendarData }: CalendarProps) {
  const { realTheme } = useTheme()

  return (
    <ErrorBoundary
      fallback={
        <GuideTxt
          title="캘린더를 불러오는데 실패했어요"
          sub="동일한 현상이 지속될 경우 문의 부탁드려요"
          className="pb-3"
        />
      }>
      <ActivityCalendar
        data={calendarData}
        labels={CALENDAR_LABELS}
        colorScheme={realTheme}
        theme={CALENDAR_THEME}
        blockSize={10}
        showWeekdayLabels
        hideMonthLabels={false}
        renderBlock={(block, activity) => {
          const message = activity.count
            ? `${activity.date}에 ${activity.count}개의 아티클을 읽었어요 🎉`
            : `${activity.date}에는 아티클을 읽지 못했어요 🥲`

          return React.cloneElement(block, {
            'data-tooltip-id': 'react-tooltip',
            'data-tooltip-html': message,
          })
        }}
      />
      <ReactTooltip id="react-tooltip" />
    </ErrorBoundary>
  )
}
