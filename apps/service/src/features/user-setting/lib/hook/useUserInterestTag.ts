import { NewsletterCategory } from '@/shared/type'
import { Dispatch, useEffect, useState } from 'react'

const useUserInterestTag = (
  initialValue: NewsletterCategory[],
  setModalValue: Dispatch<unknown>,
) => {
  const [preferTagList, setPreferTagList] =
    useState<NewsletterCategory[]>(initialValue)

  const [alertActive, setAlertActive] = useState(false)
  const [disabledTag, setDisabledTag] = useState(false)

  useEffect(() => {
    if (preferTagList.length >= 4) {
      setDisabledTag(true)
    } else {
      setDisabledTag(false)
    }

    if (preferTagList.length === 0) {
      setAlertActive(true)
    } else {
      setAlertActive(false)
    }
  }, [preferTagList])

  useEffect(() => {
    if (alertActive) {
      setModalValue(undefined)
    } else {
      setModalValue({ interest: preferTagList })
    }
  }, [alertActive, preferTagList, setModalValue])

  return {
    preferTagList,
    disabledTag,
    alertActive,
    setPreferTagList,
  }
}

export default useUserInterestTag
