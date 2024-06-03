import { SignUpFormType } from '@/features/sign-up'
import { useEffect, useState } from 'react'
import { FieldErrors } from 'react-hook-form'

const useSignUpFunnel = ({
  errors,
  signUpFieldArr,
}: {
  errors: FieldErrors<SignUpFormType>
  signUpFieldArr: {
    activeComponent: React.JSX.Element
    type: string
  }[]
}) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [activeBtn, setActiveBtn] = useState(false)
  const [checkError, setCheckError] = useState(false)

  useEffect(() => {
    if (activeBtn) {
      setCheckError(true)
    }
  }, [activeBtn])

  useEffect(() => {
    if (
      checkError &&
      !Object.keys(errors).length &&
      activeIndex < signUpFieldArr.length - 1
    ) {
      setActiveIndex((pre) => pre + 1)
      setActiveBtn(false)
      setCheckError(false)
    }
  }, [activeIndex, checkError, errors, signUpFieldArr.length])

  return { activeIndex, setActiveBtn }
}

export default useSignUpFunnel
