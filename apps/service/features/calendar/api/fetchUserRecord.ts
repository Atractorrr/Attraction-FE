import { CalendarElementType } from '../model/types'

const fetchUserRecord = async (
  userId: string,
): Promise<CalendarElementType[]> => {
  const data = await fetch(
    `${process.env.API_URL}/api/v1/member/${userId}/calendar`,
  ).then((res) => res.json())

  const { calendarData } = data

  return calendarData
}
export { fetchUserRecord }
