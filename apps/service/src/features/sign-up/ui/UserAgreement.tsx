'use client'

import { useModal } from '@/features/user-setting/lib'
import Modals from '@/features/user-setting/ui/modal/Modals'
import { WarnTxt } from '@/shared/ui'
import { Checkbox } from '@attraction/design-system/dist'
import { useEffect } from 'react'
import { useFieldArray, useFormContext, useWatch } from 'react-hook-form'
import { SignUpFormType } from '../model'
import UserAgreementModal from './modal/UserAgreementModal'

export default function UserAgreement() {
  const {
    register,
    control,
    setValue,
    formState: { errors },
    clearErrors,
    getValues,
  } = useFormContext<SignUpFormType>()
  const { fields } = useFieldArray({
    control,
    name: 'policies',
  })
  const policesValue = useWatch({ control, name: 'policies' })
  const { openModal, closeModal } = useModal()

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
    const mandatoryPolicies = policesValue.filter((el) =>
      el.type.includes('mandatory'),
    )

    if (mandatoryPolicies.every((el) => el.value)) {
      setValue('selectMandatoryPolicyAll', true)
      clearErrors('selectMandatoryPolicyAll')
    } else {
      setValue('selectMandatoryPolicyAll', false)
    }

    if (policesValue.every((el) => el.value)) {
      setValue('selectPolicyAll', true)
    } else {
      setValue('selectPolicyAll', false)
    }
  }, [clearErrors, policesValue, setValue])

  return (
    <fieldset className="block px-5 sm:px-10">
      <legend className="mb-4 block break-keep text-2xl font-bold">
        어트랙션에 오신 걸{' '}
        <span className="whitespace-nowrap">환영해요! 🎉</span>
      </legend>
      <p className="mb-12 break-keep text-gray-500 dark:text-gray-400">
        서비스 이용약관에 동의해주세요
      </p>
      <div className="mb-2 flex items-center gap-2 border-b border-b-gray-100 px-2 pb-4 dark:border-gray-700">
        <Checkbox
          id="checkAll"
          label="모두 동의"
          {...register('selectMandatoryPolicyAll', {
            validate: () => {
              if (!getValues('selectMandatoryPolicyAll')) {
                return '필수 약관에 동의해주세요'
              }
              return true
            },
            onChange: handleSelectAll,
          })}
        />
      </div>
      {fields.map((item, i) => {
        return (
          <div
            key={item.id}
            className="flex items-center justify-between gap-2 px-2 py-4">
            <div className="flex items-center gap-2">
              <Checkbox
                id={`checkbox-${item.type}`}
                label={item.text}
                {...register(`policies.${i}.value`)}
              />
            </div>
            <button
              type="button"
              onClick={() => {
                openModal(UserAgreementModal, {
                  onSubmit: () => {
                    closeModal(UserAgreementModal)
                  },
                  initialValue:
                    item.type === 'mandatory1' ? 'service' : 'privacy',
                })
              }}
              className="ml-2 whitespace-nowrap text-sm text-gray-500 underline dark:text-gray-400">
              전문보기
            </button>
          </div>
        )
      })}

      {errors.selectMandatoryPolicyAll?.message && (
        <div className="mt-6">
          <WarnTxt
            content={errors.selectMandatoryPolicyAll.message}
            color="red"
          />
        </div>
      )}
      <Modals />
    </fieldset>
  )
}
