import dayjs from 'dayjs'
import 'dayjs/locale/ko'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)
dayjs.locale('ko')

export default function getTimeFromNow(date: string) {
  const now = dayjs().format('YYYY-MM-DD')
  const res = dayjs(date).from(now)

  return now === date ? '오늘' : res
}
