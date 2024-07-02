import dayjs from 'dayjs'
import 'dayjs/locale/ko'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)
dayjs.locale('ko')

export default function getTimeFromNow(date: string | Date) {
  return dayjs(date).fromNow()
}
