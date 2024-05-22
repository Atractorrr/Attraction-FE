import { ThemeInput } from 'react-activity-calendar'

export const labels = {
  months: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ],
  weekdays: [
    '일', // Sunday first!
    '월',
    '화',
    '수',
    '목',
    '금',
    '토',
  ],
  totalCount: '{{count}} activities in {{year}}',
  legend: {
    less: 'Less',
    more: 'More',
  },
}

export const calendarTheme: ThemeInput = {
  // light: ['#f0f0f0', '#c4edde', '#7ac7c4', '#f73859', '#384259'],
  dark: ['#EBEDEF', '#B0E4B8', '#70BD7F', '#5A9C67', '#3D6A48'],
}
