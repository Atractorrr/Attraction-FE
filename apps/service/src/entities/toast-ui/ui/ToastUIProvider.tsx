/* eslint-disable react/no-unstable-nested-components */

'use client'

import {
  XOutline,
  CheckCircleSolid,
  ExclamationCircleSolid,
  InformationCircleSolid,
} from '@attraction/icons'
import { PropsWithChildren } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const toastIcon = {
  success: (
    <CheckCircleSolid className="m-auto text-xl text-green-400 dark:text-green-300" />
  ),
  info: (
    <InformationCircleSolid className="m-auto text-xl text-blue-400 dark:text-blue-300" />
  ),
  warning: (
    <ExclamationCircleSolid className="m-auto text-xl text-yellow-400 dark:text-yellow-300" />
  ),
  error: (
    <ExclamationCircleSolid className="m-auto text-xl text-red-400 dark:text-red-300" />
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
