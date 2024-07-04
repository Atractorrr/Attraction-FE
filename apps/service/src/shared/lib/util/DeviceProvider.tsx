'use client'

import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { checkIOSPWA, checkMobile, checkViewport } from './checkMobile'

interface DefaultDeviceState {
  isMobileView: boolean
  isMobile: boolean
  isIOSPWA: boolean
}

const DeviceContext = createContext<DefaultDeviceState>({
  isMobileView: false,
  isMobile: true,
  isIOSPWA: false,
})

export const useCheckDevice = () => useContext(DeviceContext)

export default function DeviceProvider({ children }: PropsWithChildren) {
  const [isMobile, setDevice] = useState(true)
  const [isMobileView, setView] = useState(false)
  const [isIOSPWA, setIOSPWA] = useState(false)

  const deviceInfo: DefaultDeviceState = useMemo(
    () => ({ isMobile, isMobileView, isIOSPWA }),
    [isMobile, isMobileView, isIOSPWA],
  )

  useEffect(() => {
    const resizeHandler = () => {
      setDevice(checkMobile())
      setView(checkViewport())
      setIOSPWA(checkIOSPWA())
    }

    setDevice(checkMobile())
    setView(checkViewport())
    setIOSPWA(checkIOSPWA())

    window.addEventListener('resize', resizeHandler)
    return () => {
      window.addEventListener('resize', resizeHandler)
    }
  }, [])

  return (
    <DeviceContext.Provider value={deviceInfo}>
      {children}
    </DeviceContext.Provider>
  )
}
