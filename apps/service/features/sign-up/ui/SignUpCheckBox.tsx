import { CheckOutline } from '@attraction/icons'
import React from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

type Props = {
  inputId: string
  register?: UseFormRegisterReturn
  activeCheckbox: boolean
}

export default function SignUpCheckBox({
  register,
  inputId,
  activeCheckbox,
}: Props) {
  return (
    <label
      htmlFor={inputId}
      className={` flex size-5 shrink-0 items-center justify-center rounded-md p-1  ${activeCheckbox ? 'bg-gray-700 dark:bg-gray-100' : 'border-2 border-gray-100 dark:border-gray-700'} focus:border-none `}>
      <input
        id={inputId}
        type="checkbox"
        className="peer"
        hidden
        {...register}
      />
      <CheckOutline className="invisible size-full rounded-md font-bold text-white peer-checked:visible dark:text-gray-700" />
    </label>
  )
}
