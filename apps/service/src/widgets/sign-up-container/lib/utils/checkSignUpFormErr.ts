import { SignUpFormType } from '@/features/sign-up'
import { checkInputValid } from '@/features/user-setting/lib'
import { UseFormGetValues, UseFormSetError } from 'react-hook-form'

export const checkSignUpFormErr = (
  type: string,
  getValues: UseFormGetValues<SignUpFormType>,
  setError: UseFormSetError<SignUpFormType>,
) => {
  if (type === 'occupation' && getValues('occupation') === '') {
    setError('occupation', {
      message: '직업을 선택 해주세요',
    })
  }
  if (type === 'nickname') {
    checkInputValid(getValues('nickname'), setError)
  }
  if (type === 'interest' && getValues('interest').length === 0) {
    setError('interest', {
      message: '최소 1개 이상 카테고리를 선택해야 합니다.',
    })
  }
}
