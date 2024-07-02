'use client'

import { ReactNode, useEffect } from 'react'
import ChannelTalk from './ChannelTalk'

interface ChannelTalkWrapperProps {
  pluginKey: string
  children: ReactNode
}

export default function ChannelTalkWrapper({
  pluginKey,
  children,
}: ChannelTalkWrapperProps) {
  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') {
      const CT = new ChannelTalk()

      CT.boot({ pluginKey })

      return () => {
        CT.shutdown()
      }
    }
  }, [pluginKey])

  return <div>{children}</div>
}
