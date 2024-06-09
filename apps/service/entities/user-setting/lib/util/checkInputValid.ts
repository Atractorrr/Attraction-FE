import { FieldValues, UseFormSetError } from 'react-hook-form'
import {
  ENGLISH_LIMIT_REGEX,
  ENGLISH_REGEX,
  KOREAN_LIMIT_REGEX,
  KOREAN_ONLY_REGEX,
  NUMBER_ONLY_REGEX,
  SPECIAL_CHARACTER_REGEX,
} from '../../constant'

const checkInputValid = (
  nickname: string,
  setError: UseFormSetError<FieldValues>,
) => {
  if (KOREAN_ONLY_REGEX.test(nickname) && !KOREAN_LIMIT_REGEX.test(nickname)) {
    setError('nickname', { message: '한글은 2글자에서 20글자입니다.' })
    return false
  }

  if (ENGLISH_REGEX.test(nickname) && !ENGLISH_LIMIT_REGEX.test(nickname)) {
    setError('nickname', { message: '영어는 4글자에서 20글자입니다.' })
    return false
  }

  if (SPECIAL_CHARACTER_REGEX.test(nickname)) {
    setError('nickname', { message: '특수문자가 포함되어 있습니다.' })
    return false
  }

  if (NUMBER_ONLY_REGEX.test(nickname)) {
    setError('nickname', { message: '숫자만 입력하셨습니다.' })
    return false
  }

  return true
}

export default checkInputValid
