import { useFieldArray, useFormContext, useWatch } from 'react-hook-form'
import { useEffect } from 'react'
import { ExclamationCircleOutline } from '@attraction/icons'
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
    <div className="rounded-lg border border-gray-100 p-5 dark:border-gray-700">
      <div className="mb-2 flex justify-between border-b border-b-gray-100 pb-4 dark:border-gray-700">
        <p>모두 동의</p>
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
      </div>
      {fields.map((item, i) => {
        return (
          <div key={item.id} className="flex justify-between gap-2 py-4">
            <p className="">
              (필수) 서비스 이용약관 동의{' '}
              <a href="/" className="text-sm">
                전문보기
              </a>
            </p>
            <SignUpCheckBox
              inputId={`checkbox-${item.type}`}
              activeCheckbox={policesValue[i].value}
              register={register(`policies.${i}.value`)}
            />
          </div>
        )
      })}
      {errors.selectPolicyAll?.message && (
        <p className="mt-2 flex items-center gap-1 text-sm text-red-500">
          <ExclamationCircleOutline />
          {errors.selectPolicyAll.message}
        </p>
      )}
    </div>
  )
}
