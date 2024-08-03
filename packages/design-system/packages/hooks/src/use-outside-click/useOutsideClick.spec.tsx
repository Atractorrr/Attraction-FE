/* eslint-disable import/no-extraneous-dependencies */
import { describe, expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import React from 'react'
import useOutsideClick from './useOutsideClick'

const WRAPPER_EL = 'inside'
const INSIDE_BUTTON = 'inside'
const OUTSIDE_BUTTON = 'outside'

function TestComponent({ callback }: { callback: () => void }) {
  const ref = useOutsideClick<HTMLDivElement>(callback)
  return (
    <div>
      <div ref={ref} data-testid={WRAPPER_EL}>
        <button type="button">{INSIDE_BUTTON}</button>
      </div>
      <button type="button">{OUTSIDE_BUTTON}</button>
    </div>
  )
}

describe('@/use-outside-click', () => {
  test('target node를 클릭한 경우 콜백 함수가 실행되지 않음', async () => {
    const callback = vi.fn()
    const user = userEvent.setup()

    render(<TestComponent callback={callback} />)

    const wrapper = screen.getByTestId(WRAPPER_EL)

    await user.click(wrapper)
    await user.click(wrapper)
    await user.click(wrapper)

    const button = screen.getByText(INSIDE_BUTTON)

    await user.click(button)
    await user.click(button)
    await user.click(button)

    expect(callback).not.toHaveBeenCalled()
  })
  test('target node 바깥의 node를 클릭한 경우 콜백 함수가 실행됨', async () => {
    const callback = vi.fn()
    const user = userEvent.setup()

    render(<TestComponent callback={callback} />)

    const button = screen.getByText(OUTSIDE_BUTTON)

    await user.click(button)
    await user.click(button)
    await user.click(button)

    expect(callback).toHaveBeenCalledTimes(3)
  })
  test('컴포넌트가 unmount 됐을 때 target node 바깥의 node를 클릭한 경우 콜백 함수가 실행되지 않음', async () => {
    const callback = vi.fn()
    const user = userEvent.setup()

    const { unmount } = render(<TestComponent callback={callback} />)

    const button = screen.getByText(OUTSIDE_BUTTON)

    await user.click(button)

    unmount()

    await user.click(button)
    await user.click(button)
    await user.click(button)

    expect(callback).toHaveBeenCalledOnce()
  })
})
