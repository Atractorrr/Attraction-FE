import { NEWSLETTER_CATEGORY } from '@/shared/constant'
import { useEffect, useState } from 'react'

const useDisabledBtn = (
  preferTagList: (keyof typeof NEWSLETTER_CATEGORY)[],
) => {
  const [disabledTag, setDisabledTag] = useState(false)
  useEffect(() => {
    if (preferTagList.length >= 4) {
      setDisabledTag(true)
    } else {
      setDisabledTag(false)
    }
  }, [preferTagList])

  return { disabledTag }
}

export default useDisabledBtn
