import { CalendarElementType } from '../../model/types'

export const calculateLevel = (
  calendarElements: CalendarElementType[],
  maxLevel: number = 4,
) => {
  const calendarData = calendarElements.map((el) => {
    if (el.count >= maxLevel) {
      const elementWithLevel = { ...el, level: maxLevel }

      return elementWithLevel
    }
    const elementWithLevel = { ...el, level: el.count }

    return elementWithLevel
  })

  return calendarData
}
