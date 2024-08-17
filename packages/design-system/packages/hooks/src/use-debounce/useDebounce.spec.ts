import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'
import { act, renderHook } from '@testing-library/react'
import useDebounce from './useDebounce'

describe('@/use-debounce', () => {
  const delay = 500
  const initialValue = 'initial value'
  const changedValue = 'changed value'

  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  test('지연된 후에 값이 올바르게 변경됨', () => {
    const { result, rerender } = renderHook(
      ({ value }) => useDebounce(value, delay),
      { initialProps: { value: initialValue } },
    )

    expect(result.current).toBe(initialValue)

    rerender({ value: changedValue })

    expect(result.current).toBe(initialValue)

    act(() => vi.advanceTimersByTime(delay * 2))

    expect(result.current).toBe(changedValue)
  })

  test('unmount 됐을 때 실행 중이던 debounce가 취소됨', () => {
    const { result, rerender, unmount } = renderHook(
      ({ value }) => useDebounce(value, delay),
      { initialProps: { value: initialValue } },
    )

    expect(result.current).toBe(initialValue)

    rerender({ value: changedValue })

    expect(result.current).toBe(initialValue)

    act(() => vi.advanceTimersByTime(delay / 2))

    unmount()

    act(() => vi.advanceTimersByTime(delay))

    expect(result.current).toBe(initialValue)
  })
})
