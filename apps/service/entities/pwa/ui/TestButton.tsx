'use client'

import { useEffect } from 'react'
import { requestNotificationPermission, sendPushNotification } from '../lib'

export default function TestAlarmButton() {
  const clickPushHandler = () => {
    sendPushNotification('테스트 알림 2', '알림 가나요?')
  }

  useEffect(() => {
    requestNotificationPermission()
    sendPushNotification('테스트 알림', '테스트 알림입니다.')
  }, [])

  return (
    <button type="button" onClick={clickPushHandler}>
      알림 보내기
    </button>
  )
}
