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
  const prevBtnHandler = () => {
    setActiveBtn(false)
    setCheckError(false)
    setActiveIndex((pre) => pre - 1)
  }

  useEffect(() => {
    if (activeBtn) {
      setCheckError(true)
    }
  }, [activeBtn])

  useEffect(() => {
    if (
      checkError &&
      !Object.keys(errors).includes(signUpFieldArr[activeIndex].type) &&
      activeIndex < signUpFieldArr.length - 1
    ) {
      setActiveIndex((pre) => pre + 1)
      setActiveBtn(false)
      setCheckError(false)
    }
  }, [activeIndex, checkError, errors, signUpFieldArr, signUpFieldArr.length])

  return { activeIndex, setActiveBtn, prevBtnHandler }
}

export default useSignUpFunnel
