import { useFieldArray, useFormContext, useWatch } from 'react-hook-form'
import { useEffect } from 'react'
import { SignUpFormType } from '../model'

export default function UserAgreement() {
  const {
    register,
    control,
    setValue,
    formState: { errors },
    clearErrors,
    setError,
  } = useFormContext<SignUpFormType>()
  const { fields } = useFieldArray({ control, name: 'policies' })
  const policesValue = useWatch({ control, name: 'policies' })

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
    }

    if (policesValue.some((el) => !el.value)) {
      setValue('selectPolicyAll', false)
    }
  }, [clearErrors, policesValue, setError, setValue])

  return (
    <div className="rounded-lg border border-gray-100 p-5">
      <div className="mb-2 flex justify-between border-b border-b-gray-100 pb-4">
        <p className="">모두 동의</p>
        <input
          type="checkbox"
          {...register('selectPolicyAll', {
            validate: () => {
              if (policesValue.some((el) => !el.value)) {
                return '필수 약관에 동의해주세요'
              }
              return true
            },
          })}
          onChange={handleSelectAll}
        />
      </div>
      {fields.map((item, i) => {
        return (
          <div key={item.id} className="flex justify-between py-2">
            <p className="">
              (필수) 서비스 이용약관 동의{' '}
              <a href="/" className="text-sm">
                전문보기
              </a>
            </p>
            <input type="checkbox" {...register(`policies.${i}.value`)} />
          </div>
        )
      })}
      {errors.selectPolicyAll?.message && (
        <p className="mt-2 text-red-500">{errors.selectPolicyAll.message}</p>
      )}
    </div>
  )
}
