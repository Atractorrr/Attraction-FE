import { useMutation } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { useDebounce } from '@/shared/lib'
import { WarnTxt } from '@/shared/ui'
import { postDuplicateName } from '../../api'
import { checkUserSettingInputError } from '../../lib'
import { ModalComponentPropType } from '../../model'
import UserSettingModal from './UserSettingModal'

interface UserInfoNicknameInputType {
  initialValue: string
  setModalValue: React.Dispatch<React.SetStateAction<unknown>>
}

function UserInfoNicknameInput({
  initialValue,
  setModalValue,
}: UserInfoNicknameInputType) {
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
    if (nickname.length === 0) {
      setModalValue(undefined)
    }

    if (alert.length > 0) {
      setModalValue(undefined)
    }
  }, [alert.length, nickname.length, setModalValue])

  return (
    <div className="mb-6 block">
      <label htmlFor="nickName" className="mb-2 block px-1 text-sm">
        닉네임
      </label>
      <input
        autoComplete="off"
        value={nickname}
        id="nickName"
        className="block h-12 w-full rounded-lg border border-gray-100 px-3 py-2 text-base outline-none transition-colors focus:border-blue-400 dark:border-gray-700 dark:bg-gray-700 dark:focus:bg-gray-800"
        placeholder="서비스에서 사용할 닉네임을 입력해 주세요"
        onChange={(e) => {
          setNickname(e.target.value)
          setIsValid(false)
        }}
      />
      {!!alert.length && <WarnTxt content={alert} color="red" />}
      {valid && (
        <p className="mt-3 px-1 text-green-500 dark:text-green-300">
          멋진 닉네임이에요! 👍
        </p>
      )}
    </div>
  )
}

export default function UserSettingNicknameModal({
  onSubmit,
  onClose,
  initialValue,
}: ModalComponentPropType) {
  return (
    <UserSettingModal
      title="닉네임 변경"
      postUserSetting={(value: unknown) => {
        onSubmit(value)
      }}
      closeHandler={() => {
        if (onClose) {
          onClose()
        }
      }}
      renderItem={(setPostValue) => (
        <UserInfoNicknameInput
          setModalValue={setPostValue}
          initialValue={initialValue as string}
        />
      )}
    />
  )
}
