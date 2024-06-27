import React from 'react'
import { toast } from 'react-toastify'
import { SubscribeButtonProps, useCheckSubscribeStateQuery } from '../model'
import AutoSubscribeConfirm from './AutoSubscribeConfirm'
import DefaultButton from './DefaultButton'
import ManualSubscribeConfirm from './ManualSubscribeConfirm'

export default function UserSubscribeButton({
  ...buttonProps
}: SubscribeButtonProps) {
  const { isLoading, data, isError } = useCheckSubscribeStateQuery({
    newsletterId: buttonProps.newsletterId,
  })

  if (data) {
    return (
      <DefaultButton
        title={`구독취소: ${buttonProps.newsletterName}`}
        disabled={isLoading || isError}
        onClick={() => toast.info('서비스 준비 중 이에요')}>
        구독취소
      </DefaultButton>
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
