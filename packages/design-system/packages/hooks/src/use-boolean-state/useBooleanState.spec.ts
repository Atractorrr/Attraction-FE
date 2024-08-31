import { describe, expect, test } from 'vitest'
import { act, renderHook } from '@testing-library/react'
import useBooleanState from './useBooleanState'

describe('@/use-boolean-state', () => {
  test('초기값을 지정하지 않았을 경우의 초기값은 false가 출력됨', () => {
    const { result } = renderHook(() => useBooleanState())
    expect(result.current[0]).toBe(false)
  })
  test('초기값을 true로 지정한 경우의 초기값은 true가 출력됨', () => {
    const { result } = renderHook(() => useBooleanState(true))
    expect(result.current[0]).toBe(true)
  })
  test('setTrue 함수를 실행한 경우 true가 출력됨', () => {
    const { result } = renderHook(() => useBooleanState())
    expect(result.current[0]).toBe(false)

    act(() => result.current[1].setTrue())
    expect(result.current[0]).toBe(true)
  })
  test('setFalse 함수를 실행한 경우 false가 출력됨', () => {
    const { result } = renderHook(() => useBooleanState(true))
    expect(result.current[0]).toBe(true)

    act(() => result.current[1].setFalse())
    expect(result.current[0]).toBe(false)
  })
  test('toggle 함수를 실행한 경우 state가 알맞게 변경됨', () => {
    const { result } = renderHook(() => useBooleanState())
    expect(result.current[0]).toBe(false)

    act(() => result.current[1].toggle())
    expect(result.current[0]).toBe(true)

    act(() => result.current[1].toggle())
    expect(result.current[0]).toBe(false)
  })
})
