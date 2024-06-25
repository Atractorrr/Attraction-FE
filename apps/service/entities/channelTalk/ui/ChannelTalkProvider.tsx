'use client'

import { PropsWithChildren, useEffect } from 'react'
import ChannelTalk from './ChannelTalk'

export default function ChannelTalkProvider({ children }: PropsWithChildren) {
  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') {
      const CT = new ChannelTalk()

      CT.boot({ pluginKey: process.env.NEXT_PUBLIC_CHANNEL_TALK_KEY! })

      return () => {
        CT.shutdown()
      }
    }
  }, [])

  return <div>{children}</div>
}
