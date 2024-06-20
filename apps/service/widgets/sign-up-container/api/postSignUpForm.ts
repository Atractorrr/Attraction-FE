import { SignUpFormType } from '@/features/sign-up'

const postSignUpForm = async (
  signUpFormData: Omit<
    SignUpFormType,
    | 'isNickNameChecked'
    | 'selectMandatoryPolicyAll'
    | 'policies'
    | 'selectPolicyAll'
  >,
) => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/join`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(signUpFormData),
    },
  ).then((res) => {
    if (!res.ok) {
      throw new Error('중복확인을 해주세요')
    }
    return res.json()
  })

  return data
}

export default postSignUpForm
