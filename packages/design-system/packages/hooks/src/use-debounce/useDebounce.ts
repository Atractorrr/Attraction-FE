import React from 'react'
import { useTimeout } from '../use-timeout'

export default function useDebounce<T>(value: T, delay: number) {
  const { start } = useTimeout()
  const [debouncedValue, setDebouncedValue] = React.useState<T>(value)

  React.useEffect(() => {
    start(() => setDebouncedValue(value), delay)
  }, [value, delay])

  return debouncedValue
}
