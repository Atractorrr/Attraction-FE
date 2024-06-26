'use client'

import { PropsWithChildren } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function ToastUIProvider({ children }: PropsWithChildren) {
  // const contextClass = {
  //   success: 'bg-blue-600',
  //   error: 'bg-red-600',
  //   info: 'bg-gray-600',
  //   warning: 'bg-orange-400',
  //   default: 'bg-indigo-600',
  //   dark: 'bg-white-600 font-gray-300',
  // }

  return (
    <>
      {children}
      <ToastContainer
        // toastClassName={(context) =>
        //   `${
        //     contextClass[context?.type || 'default']
        //   } relative flex p-1 h-30 rounded-md justify-between overflow-hidden cursor-pointer`
        // }
        // bodyClassName={() => 'flex text-sm font-white p-3 items-center'}
        position="top-right"
        autoClose={3000}
      />
    </>
  )
}
