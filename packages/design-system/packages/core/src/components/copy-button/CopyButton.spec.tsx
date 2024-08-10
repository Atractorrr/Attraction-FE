import { ComponentProps } from 'react'
import { describe, expect, test, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import CopyButton from './CopyButton'

const DEFAULT_DELAY = 50
const SUCCESS_TXT = 'success!!!'
const DEFAULT_TXT = 'copy button'

function ExampleButton(
  props: Pick<ComponentProps<typeof CopyButton>, 'onSuccess' | 'onFailed'>,
) {
  return (
    <CopyButton value="example" delay={DEFAULT_DELAY} {...props}>
      {({ status, copy }) => (
        <button type="button" disabled={status} onClick={copy}>
          {status ? SUCCESS_TXT : DEFAULT_TXT}
        </button>
      )}
    </CopyButton>
  )
}

describe('CopyButton.tsx', () => {
  test('copy 버튼을 클릭했을 때 status 값이 올바르게 변경됨', async () => {
    const onSuccess = vi.fn()
    const onFailed = vi.fn()

    render(<ExampleButton {...{ onSuccess, onFailed }} />)

    const user = userEvent.setup()
    const button = screen.getByRole('button', { name: DEFAULT_TXT })

    user.click(button)
    user.click(button)
    user.click(button)

    expect(button.textContent).toBe(DEFAULT_TXT)

    await waitFor(() => expect(button.textContent).toBe(SUCCESS_TXT))

    await waitFor(() => expect(button.textContent).toBe(DEFAULT_TXT), {
      timeout: DEFAULT_DELAY + 10,
    })

    expect(onSuccess).toHaveBeenCalledOnce()
    expect(onFailed).not.toHaveBeenCalled()
  })
  test('복사에 성공했을 시 onSuccess 함수가 실행됨', async () => {
    const onSuccess = vi.fn()
    const onFailed = vi.fn()

    render(<ExampleButton {...{ onSuccess, onFailed }} />)

    const user = userEvent.setup()
    const button = screen.getByRole('button', { name: DEFAULT_TXT })

    user.click(button)
    user.click(button)
    user.click(button)

    expect(button.textContent).toBe(DEFAULT_TXT)

    await waitFor(() => expect(onSuccess).toHaveBeenCalled())

    expect(button.textContent).toBe(SUCCESS_TXT)

    await waitFor(() => expect(button.textContent).toBe(DEFAULT_TXT), {
      timeout: DEFAULT_DELAY + 10,
    })

    expect(onSuccess).toHaveBeenCalledOnce()
    expect(onFailed).not.toHaveBeenCalled()
  })
  test('복사에 실패했을 시 onFailed 함수가 실행됨', async () => {
    Object.defineProperty(navigator.clipboard, 'writeText', {
      writable: false,
      value: () => {
        throw new Error('error for test')
      },
    })

    const onSuccess = vi.fn()
    const onFailed = vi.fn()

    render(<ExampleButton {...{ onSuccess, onFailed }} />)

    const user = userEvent.setup()
    const button = screen.getByRole('button', { name: DEFAULT_TXT })

    user.click(button)

    await waitFor(() => expect(onFailed).toHaveBeenCalled())

    expect(onSuccess).not.toHaveBeenCalled()
    expect(onFailed).toHaveBeenCalledOnce()
  })
})
