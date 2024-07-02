import { WarnTxt } from '@/shared/ui'
import { useCheckDuplicateName } from '../../lib'

interface UserInfoNicknameInputType {
  initialValue: string
  setModalValue: React.Dispatch<React.SetStateAction<unknown>>
}

export default function UserInfoNicknameInput({
  initialValue,
  setModalValue,
}: UserInfoNicknameInputType) {
  const { nickname, nicknameChangeHandler, alert, valid } =
    useCheckDuplicateName(initialValue, setModalValue)

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
          nicknameChangeHandler(e.target.value)
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
