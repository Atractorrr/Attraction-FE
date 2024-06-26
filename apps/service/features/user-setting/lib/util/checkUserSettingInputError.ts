import {
  ENGLISH_LIMIT_REGEX,
  ENGLISH_REGEX,
  KOREAN_LIMIT_REGEX,
  KOREAN_ONLY_REGEX,
  NUMBER_ONLY_REGEX,
  SPECIAL_CHARACTER_REGEX,
} from '../../constant'

const checkUserSettingInputError = (
  nickname: string,
  setError: React.Dispatch<React.SetStateAction<string>>,
) => {
  if (KOREAN_ONLY_REGEX.test(nickname) && !KOREAN_LIMIT_REGEX.test(nickname)) {
    setError('한글은 2글자에서 20글자까지 입력할 수 있어요')
    return false
  }

  if (ENGLISH_REGEX.test(nickname) && !ENGLISH_LIMIT_REGEX.test(nickname)) {
    setError('영어는 4글자에서 20글자까지 입력할 수 있어요')
    return false
  }

  if (SPECIAL_CHARACTER_REGEX.test(nickname)) {
    setError('특수문자가 포함되어 있어요')
    return false
  }

  if (NUMBER_ONLY_REGEX.test(nickname)) {
    setError('숫자만 입력하셨어요')
    return false
  }

  if (nickname.length === 0) {
    return false
  }

  return true
}

export default checkUserSettingInputError
