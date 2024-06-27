'use client'

import { InduceLoginConfirm, useAuth } from '@/entities/auth'
import { SubscribeButtonProps } from '../model'
import DefaultButton from './DefaultButton'
import UserSubscribeButton from './UserSubscribeButton'

interface ButtonProps extends SubscribeButtonProps {
  className?: string
}

export default function SubscribeButton({
  className,
  ...buttonProps
}: ButtonProps) {
  const { isLogin } = useAuth()

  return (
    <div className={className}>
      {isLogin ? (
        <UserSubscribeButton {...buttonProps} />
      ) : (
        <InduceLoginConfirm>
          <DefaultButton title={`구독하기: ${buttonProps.newsletterName}`} />
        </InduceLoginConfirm>
      )}
    </div>
  )
}
