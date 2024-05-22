import { CalendarElement } from '../../model'

const calculateLevel = (
  calendarElements: CalendarElement[],
  maxLevel: number = 4,
) => {
  const calendarData = calendarElements.map((el) => {
    if (el.count >= maxLevel) {
      const elementWithLevel = {
        ...el,
        level: maxLevel,
      }

      return elementWithLevel
    }
    const elementWithLevel = {
      ...el,
      level: el.count,
    }

    return elementWithLevel
  })

  return calendarData
}

export default calculateLevel
