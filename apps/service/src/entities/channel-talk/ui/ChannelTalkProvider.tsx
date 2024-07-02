import { PropsWithChildren } from 'react'
import ChannelTalkWrapper from './ChannelTalkWrapper'

export default function ChannelTalkProvider({ children }: PropsWithChildren) {
  const pluginKey = process.env.CHANNEL_TALK_PLUGIN_KEY!

  return (
    <ChannelTalkWrapper pluginKey={pluginKey}>{children}</ChannelTalkWrapper>
  )
}
