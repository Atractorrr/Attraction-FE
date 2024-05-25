import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { SignUpFormType } from '../model'

const JOB = ['교직', '전문직', '관리직', '사무직', '자영업', '판매직', '무직']

export default function UserJobField() {
  // TODO: 오류 나중에 한번에 잡기
  const [isActiveIndex, setIsActiveIndex] = useState<number>()

  const {
    setValue,
    formState: { errors },
    clearErrors,
  } = useFormContext<SignUpFormType>()

  return (
    <fieldset className="">
      <legend className="mb-4 text-2xl font-bold text-gray-700">
        어떤일을 하시나요
      </legend>
      <p className="mb-12 text-gray-500">
        현재 몸담고 계시는 산업 분야를 알려주세요
      </p>
      <p className="mb-5 text-sm text-gray-700">산업분야</p>
      <div className="mb-60 flex flex-wrap gap-2">
        {JOB.map((item, index) => (
          <button
            type="button"
            className={`rounded-full px-7 py-4 ${isActiveIndex === index ? 'bg-gray-700 text-white' : 'bg-gray-50 text-black'}`}
            key={item}
            onClick={() => {
              setIsActiveIndex(index)
              setValue('occupation', item)
              if (Object.keys(errors).length) {
                clearErrors('occupation')
              }
            }}>
            {item}
          </button>
        ))}
      </div>
      {errors.occupation?.message && (
        <p className="mt-2 text-red-500">{errors.occupation.message}</p>
      )}
    </fieldset>
  )
}
