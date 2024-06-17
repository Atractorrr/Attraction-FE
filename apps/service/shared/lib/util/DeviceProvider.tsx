'use client'

import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import checkMobile from './checkMobile'

const DeviceContext = createContext<boolean>(true)

export const useCheckDevice = () => useContext(DeviceContext)

export default function DeviceProvider({ children }: PropsWithChildren) {
  const [isMobile, setDeviceType] = useState(true)

  useEffect(() => {
    const resizeHandler = () => setDeviceType(checkMobile())

    window.addEventListener('resize', resizeHandler)
    setDeviceType(checkMobile())

    return () => {
      window.addEventListener('resize', resizeHandler)
    }
  }, [])

  return (
    <DeviceContext.Provider value={isMobile}>{children}</DeviceContext.Provider>
  )
}
