import { ExclamationCircleOutline } from '@attraction/icons'
import { useEffect } from 'react'
import { useFieldArray, useFormContext, useWatch } from 'react-hook-form'
import { SignUpFormType } from '../model'
import SignUpCheckBox from './SignUpCheckBox'

export default function UserAgreement() {
  const {
    register,
    control,
    setValue,
    formState: { errors },
    clearErrors,
    setError,
    getValues,
  } = useFormContext<SignUpFormType>()
  const { fields } = useFieldArray({ control, name: 'policies' })
  const policesValue = useWatch({ control, name: 'policies' })
  const policesSelectAll = useWatch({ control, name: 'selectPolicyAll' })

  const handleSelectAll = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.checked) {
      fields.forEach((_, i) => {
        setValue(`policies.${i}.value`, true) // 모든 체크박스의 value를 true로
      })
    } else {
      fields.forEach((_, i) => {
        setValue(`policies.${i}.value`, false) // 모든 체크박스의 value를 false로
      })
    }
  }

  useEffect(() => {
    if (policesValue.every((el) => el.value)) {
      setValue('selectPolicyAll', true)
      clearErrors('selectPolicyAll')
    } else {
      setValue('selectPolicyAll', false)
    }
  }, [clearErrors, policesValue, setError, setValue])

  return (
    <fieldset className="rounded-lg">
      <legend className="mb-4 text-2xl font-bold">
        어트랙션에 오신 걸 환영해요! 🎉
      </legend>
      <p className="mb-10 text-gray-500">서비스 이용약관에 동의해주세요</p>
      <div className="mb-2 flex items-center gap-2 border-b border-b-gray-100 px-2 pb-4 dark:border-gray-700">
        <SignUpCheckBox
          inputId="checkAll"
          register={register('selectPolicyAll', {
            validate: () => {
              if (!getValues('selectPolicyAll')) {
                return '필수 약관에 동의해주세요'
              }
              return true
            },
            onChange: handleSelectAll,
          })}
          activeCheckbox={policesSelectAll}
        />
        <p>모두 동의</p>
      </div>
      {fields.map((item, i) => {
        return (
          <div key={item.id} className="flex justify-between gap-2 px-2 py-4">
            <div className="flex items-center gap-2">
              <SignUpCheckBox
                inputId={`checkbox-${item.type}`}
                activeCheckbox={policesValue[i].value}
                register={register(`policies.${i}.value`)}
              />
              <p>(필수) 서비스 이용약관 동의 </p>
            </div>
            <a
              href="/"
              className="ml-2 text-sm text-gray-500 underline dark:text-gray-400">
              전문보기
            </a>
          </div>
        )
      })}
      {errors.selectPolicyAll?.message && (
        <p className="mt-2 flex items-center gap-1 text-sm text-red-400">
          <ExclamationCircleOutline />
          {errors.selectPolicyAll.message}
        </p>
      )}
    </fieldset>
  )
}
