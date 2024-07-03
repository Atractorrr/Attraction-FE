import { useDebounce } from '@/shared/lib'
import { useMutation } from '@tanstack/react-query'
import { Dispatch, useEffect, useState } from 'react'
import { postDuplicateName } from '../../api'
import { checkUserSettingInputError } from '../util'

const useCheckDuplicateName = (
  initialValue: string,
  setModalValue: Dispatch<unknown>,
) => {
  const [alert, setAlert] = useState('')
  const [valid, setIsValid] = useState(false)
  const [nickname, setNickname] = useState(initialValue)
  const debounceDuplicateInputValue = useDebounce(nickname, 200)

  const { mutate } = useMutation({
    mutationFn: postDuplicateName,
    onError: (err) => {
      setAlert(err.message)
    },
    onSuccess: () => {
      setAlert('')
      setModalValue({ nickname: debounceDuplicateInputValue })
      setIsValid(true)
    },
  })

  useEffect(() => {
    if (
      debounceDuplicateInputValue !== initialValue &&
      checkUserSettingInputError(debounceDuplicateInputValue, setAlert)
    ) {
      mutate({ nickname: debounceDuplicateInputValue })
    }
  }, [debounceDuplicateInputValue, initialValue, mutate])

  useEffect(() => {
    // 다음과 같은 조건 일때 닉네임 수정이 완료되지 않는다

    if (nickname.length === 0) {
      setModalValue(undefined)
    }

    if (alert.length > 0) {
      setModalValue(undefined)
    }

    if (initialValue === debounceDuplicateInputValue) {
      setModalValue(undefined)
    }
  }, [
    alert.length,
    debounceDuplicateInputValue,
    initialValue,
    nickname.length,
    setModalValue,
  ])

  return {
    nickname,
    alert,
    valid,
    nicknameChangeHandler: (value: string) => {
      setNickname(value)
      setIsValid(false)
    },
  }
}

export default useCheckDuplicateName
