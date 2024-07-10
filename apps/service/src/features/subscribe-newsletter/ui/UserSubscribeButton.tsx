import React from 'react'
import { SubscribeButtonProps, useCheckSubscribeStateQuery } from '../model'
import AutoSubscribeConfirm from './AutoSubscribeConfirm'
import DefaultButton from './DefaultButton'
import ManualSubscribeConfirm from './ManualSubscribeConfirm'
import UnsubscribeConfirm from './UnsubscribeConfirm'

export default function UserSubscribeButton({
  ...buttonProps
}: SubscribeButtonProps) {
  const { isLoading, data, isError } = useCheckSubscribeStateQuery({
    newsletterId: buttonProps.newsletterId,
  })

  if (data) {
    return (
      <UnsubscribeConfirm {...buttonProps}>
        <DefaultButton
          title={`구독 중단하기: ${buttonProps.newsletterName}`}
          disabled={isLoading || isError}>
          구독 중단하기
        </DefaultButton>
      </UnsubscribeConfirm>
    )
  }

  if (buttonProps.isAutoSubscribeEnabled) {
    return (
      <AutoSubscribeConfirm {...buttonProps}>
        <DefaultButton
          title={`구독하기: ${buttonProps.newsletterName}`}
          disabled={isLoading || isError}
        />
      </AutoSubscribeConfirm>
    )
  }

  return (
    <ManualSubscribeConfirm {...buttonProps}>
      <DefaultButton
        title={`구독하러 가기: ${buttonProps.newsletterName}`}
        disabled={isLoading || isError}>
        구독하러 가기
      </DefaultButton>
    </ManualSubscribeConfirm>
  )
}
