import { CalendarElement } from '../model'

const fetchUserRecord = async (userId: string): Promise<CalendarElement[]> => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/${userId}/calendar`,
    { cache: 'no-store' },
  ).then((res) => res.json())

  const { calendarData } = data

  return calendarData
}
export default fetchUserRecord
