'use client'

import { useEffect, useState } from 'react'
import { MAX_CHECK_LENGTH } from '../../constant'

const useLimitCheckBtn = (listLength: number) => {
  const [alertActive, setAlertActive] = useState(false)
  const [disabledTag, setDisabledTag] = useState(false)

  useEffect(() => {
    if (listLength >= MAX_CHECK_LENGTH) {
      setDisabledTag(true)
      setAlertActive(false)
    } else {
      setDisabledTag(false)
      setAlertActive(true)
    }
  }, [listLength])

  return { alertActive, disabledTag }
}

export default useLimitCheckBtn
