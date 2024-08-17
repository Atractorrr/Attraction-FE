/* eslint-disable import/no-extraneous-dependencies */
import { describe, expect, test } from 'vitest'
import { act, renderHook } from '@testing-library/react'
import useScrollProgress from './useScrollProgress'

describe('@/use-scroll-progress', () => {
  test('progress 초기 값이 0으로 출력됨', () => {
    const { result } = renderHook(() => useScrollProgress())

    expect(result.current.progress).toBe(0)
  })
  test('스크롤 시 progress 값이 올바르게 계산됨', () => {
    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      configurable: true,
      value: 1000,
    })
    Object.defineProperty(document.body, 'scrollHeight', {
      writable: true,
      configurable: true,
      value: 3000,
    })
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      configurable: true,
      value: 0,
    })

    const { result, unmount } = renderHook(() => useScrollProgress())

    expect(result.current.progress).toBe(0)

    act(() => {
      window.scrollY = 500
      window.dispatchEvent(new Event('scroll'))
    })

    expect(result.current.progress).toBe(25)

    act(() => {
      window.scrollY = 1000
      window.dispatchEvent(new Event('scroll'))
    })

    expect(result.current.progress).toBe(50)

    act(() => {
      window.scrollY = 1500
      window.dispatchEvent(new Event('scroll'))
    })

    expect(result.current.progress).toBe(75)

    act(() => {
      window.scrollY = 2000
      window.dispatchEvent(new Event('scroll'))
    })

    expect(result.current.progress).toBe(100)

    unmount()

    act(() => {
      window.scrollY = 1000
      window.dispatchEvent(new Event('scroll'))
    })

    expect(result.current.progress).toBe(100)
  })
})
