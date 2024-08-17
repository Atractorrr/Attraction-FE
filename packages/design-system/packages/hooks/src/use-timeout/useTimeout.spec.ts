import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'
import { act, renderHook } from '@testing-library/react'
import useTimeout from './useTimeout'

describe('@/use-timeout', () => {
  const delay = 500

  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  test('timeout 후에 콜백 함수가 올바르게 실행됨', () => {
    const { result } = renderHook(() => useTimeout())
    const callback = vi.fn()

    result.current.start(callback, delay)

    expect(callback).not.toHaveBeenCalled()

    act(() => vi.advanceTimersByTime(delay / 2))

    result.current.start(callback, delay)

    expect(callback).not.toHaveBeenCalled()

    act(() => vi.advanceTimersByTime(delay))

    expect(callback).toHaveBeenCalledOnce()
  })

  test('timeout 도중 unmount 됐을 때 콜백 함수가 실행되지 않음', () => {
    const { result, unmount } = renderHook(() => useTimeout())
    const callback = vi.fn()

    result.current.start(callback, delay)

    expect(callback).not.toHaveBeenCalled()

    act(() => vi.advanceTimersByTime(delay / 2))

    unmount()

    act(() => vi.advanceTimersByTime(delay))

    expect(callback).not.toHaveBeenCalled()
  })
})
