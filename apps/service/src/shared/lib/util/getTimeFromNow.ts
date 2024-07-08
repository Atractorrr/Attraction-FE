import dayjs from 'dayjs'
import 'dayjs/locale/ko'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)
dayjs.locale('ko')

export default function getTimeFromNow(date: string | Date) {
  const now = dayjs().format('YYYY-MM-DD')
  return dayjs(date).from(now)
}
