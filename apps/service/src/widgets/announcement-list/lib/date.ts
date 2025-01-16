import dayjs from 'dayjs'
import 'dayjs/locale/ko'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)
dayjs.locale('ko')

export function isInDateRange(date: string, range = 3) {
  const inputDate = dayjs(date).format('YYYY-MM-DD')
  const today = dayjs()

  const diffInDays = Math.abs(today.diff(inputDate, 'day'))

  return diffInDays <= range
}

export function formatDateFromNow(date: dayjs.ConfigType) {
  return dayjs(date).fromNow()
}
