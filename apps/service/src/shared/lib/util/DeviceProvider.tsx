'use client'

import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { VISITED_KEY } from '@/shared/constant'
import { checkIOSPWA, checkMobile, checkViewport } from './checkMobile'

interface DefaultDeviceState {
  isMobileView: boolean
  isMobile: boolean
  isIOSPWA: boolean
  isVisited: boolean
  setVisited: () => void
}

const DeviceContext = createContext<DefaultDeviceState>({
  isMobileView: false,
  isMobile: true,
  isIOSPWA: false,
  isVisited: false,
  setVisited: () => {},
})

export const useCheckDevice = () => useContext(DeviceContext)

export default function DeviceProvider({ children }: PropsWithChildren) {
  const [isMobile, setDevice] = useState(true)
  const [isMobileView, setView] = useState(false)
  const [isIOSPWA, setIOSPWA] = useState(false)

  const [isVisited, setVisitedState] = useState(false)
  const setVisited = useCallback(() => {
    setVisitedState(true)
    window.localStorage.setItem(VISITED_KEY, 'true')
  }, [])

  const deviceInfo: DefaultDeviceState = useMemo(
    () => ({ isMobile, isMobileView, isIOSPWA, isVisited, setVisited }),
    [isMobile, isMobileView, isIOSPWA, isVisited, setVisited],
  )

  useEffect(() => {
    setVisitedState(window.localStorage.getItem(VISITED_KEY) === 'true')
  }, [])

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
