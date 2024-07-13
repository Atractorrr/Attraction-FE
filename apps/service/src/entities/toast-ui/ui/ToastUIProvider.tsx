/* eslint-disable react/no-unstable-nested-components */

'use client'

import { XOutline } from '@attraction/icons'
import { PropsWithChildren } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const toastIcon = {
  success: (
    <svg
      // TODO: 아이콘 패키치 추가
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      className="m-auto text-xl text-green-400 dark:text-green-300"
      viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-5.97-3.03a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0"
        clipRule="evenodd"
      />
    </svg>
  ),
  info: (
    <svg
      // TODO: 아이콘 패키치 추가
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      className="m-auto text-xl text-blue-400 dark:text-blue-300"
      viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-10 5.75a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75M12 7a1 1 0 1 1 0 2a1 1 0 0 1 0-2"
        clipRule="evenodd"
      />
    </svg>
  ),
  warning: (
    <svg
      // TODO: 아이콘 패키치 추가
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      className="m-auto text-xl text-yellow-400 dark:text-yellow-300"
      viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10s10-4.477 10-10M12 6.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75M12 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2"
        clipRule="evenodd"
      />
    </svg>
  ),
  error: (
    <svg
      // TODO: 아이콘 패키치 추가
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      className="m-auto text-xl text-red-400 dark:text-red-300"
      viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10s10-4.477 10-10M12 6.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75M12 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2"
        clipRule="evenodd"
      />
    </svg>
  ),
  default: null,
}

export default function ToastUIProvider({ children }: PropsWithChildren) {
  return (
    <>
      {children}
      <ToastContainer
        toastClassName={() =>
          'mx-auto mt-2 flex min-w-[272px] max-w-[calc(100vw-1rem)] items-center justify-between rounded-xl border border-gray-100 bg-white p-2 pl-3 dark:border-gray-700 dark:bg-gray-800'
        }
        bodyClassName={(context) =>
          `${
            context?.type === 'default' ? 'pl-1' : ''
          } flex items-center justify-start break-keep text-gray-700 dark:text-white`
        }
        closeButton={(props) => (
          <button
            type="button"
            title="닫기"
            className="relative rounded-full p-2 text-xl text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-50"
            onClick={props.closeToast}>
            <XOutline />
            <span className="blind">닫기</span>
          </button>
        )}
        hideProgressBar
        icon={(props) => toastIcon[props?.type || 'default']}
        position="top-center"
        autoClose={3000}
      />
    </>
  )
}
