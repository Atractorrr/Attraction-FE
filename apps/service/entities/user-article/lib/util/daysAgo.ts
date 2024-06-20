export default function daysAgo(targetDate: string) {
  const today = new Date().getTime()
  const diff = Math.abs(today - new Date(targetDate).getTime())

  return Math.ceil(diff / (1000 * 60 * 60 * 24))
}
