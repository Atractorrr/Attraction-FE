'use client'

import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import checkMobile, { checkViewport } from './checkMobile'

interface DefaultDeviceState {
  isMobileView: boolean
  isMobile: boolean
}

const DeviceContext = createContext<DefaultDeviceState>({
  isMobileView: false,
  isMobile: true,
})

export const useCheckDevice = () => useContext(DeviceContext)

export default function DeviceProvider({ children }: PropsWithChildren) {
  const [isMobile, setDevice] = useState(true)
  const [isMobileView, setView] = useState(false)

  useEffect(() => {
    const resizeHandler = () => {
      setDevice(checkMobile())
      setView(checkViewport())
    }

    window.addEventListener('resize', resizeHandler)
    setDevice(checkMobile())
    setView(checkViewport())

    return () => {
      window.addEventListener('resize', resizeHandler)
    }
  }, [])

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <DeviceContext.Provider value={{ isMobile, isMobileView }}>
      {children}
    </DeviceContext.Provider>
  )
}
