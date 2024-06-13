/* eslint-disable jsx-a11y/label-has-associated-control */
import { getCategorySVG } from '@/entities/profile'
import { NEWSLETTER_CATEGORY } from '@/shared/constant'
import { NewsletterCategory } from '@/shared/type'
import {
  CheckOutline,
  ComputerEmoji,
  ExclamationCircleOutline,
} from '@attraction/icons'
import { useEffect, useMemo, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { useDisabledBtn } from '../lib'
import { SignUpFormType } from '../model'

interface UserPreferTagType {
  categoryKey: keyof typeof NEWSLETTER_CATEGORY
  disabledTag: boolean
  preferTagList: (keyof typeof NEWSLETTER_CATEGORY)[]
  setPreferTagList: React.Dispatch<
    React.SetStateAction<(keyof typeof NEWSLETTER_CATEGORY)[]>
  >
}

function UserPreferTag({
  categoryKey,
  disabledTag,
  setPreferTagList,
  preferTagList,
}: UserPreferTagType) {
  const [isActive, setIsActive] = useState(preferTagList.includes(categoryKey))
  const {
    clearErrors,
    formState: { errors },
  } = useFormContext<SignUpFormType>()
  // TODO: 이모티콘 깜박임 문제 해결하기 (필수!!!)
  const CategoryEmoji = useMemo(
    () => getCategorySVG(NEWSLETTER_CATEGORY[categoryKey]),
    [categoryKey],
  )
  const checkboxChangeHandler = () => {
    if (!isActive) {
      setPreferTagList((pre) => [...pre, categoryKey])
    } else {
      setPreferTagList((pre) =>
        pre.filter((category) => category !== categoryKey),
      )
    }

    if (errors.interest?.message) {
      clearErrors('interest')
    }

    setIsActive((pre) => !pre)
  }

  return (
    <div
      className={`relative ${disabledTag && !isActive ? 'opacity-40' : 'opacity-100'}`}>
      <label
        htmlFor={categoryKey}
        className={`absolute right-3 top-3 flex size-5 items-center justify-center rounded-full p-1  ${isActive ? 'bg-gray-700 dark:bg-gray-100' : 'border-2 border-gray-100 dark:border-gray-600'} focus:border-none`}>
        <CheckOutline
          className={` size-full rounded-md font-bold text-white ${isActive ? 'visible' : 'invisible'} dark:text-gray-700`}
        />
      </label>
      <button
        type="button"
        className={`flex w-full flex-col items-center self-center justify-self-center
        rounded-lg border-2 py-8 dark:bg-gray-700 ${isActive ? 'border-gray-700 dark:border-gray-100' : 'border-gray-100 dark:border-gray-700'}`}
        disabled={disabledTag && !isActive}
        onClick={() => {
          checkboxChangeHandler()
        }}>
        {CategoryEmoji ? (
          <CategoryEmoji className="size-12" />
        ) : (
          <ComputerEmoji className="size-12" />
        )}
        <span className="mt-3">{NEWSLETTER_CATEGORY[categoryKey]}</span>
      </button>
    </div>
  )
}

export default function UserPreferTagField() {
  const {
    setValue,
    formState: { errors },
    getValues,
  } = useFormContext<SignUpFormType>()
  const [preferTagList, setPreferTagList] = useState<
    (keyof typeof NEWSLETTER_CATEGORY)[]
  >(getValues('interest'))

  const { disabledTag } = useDisabledBtn(preferTagList)

  useEffect(() => {
    setValue('interest', [...preferTagList])
  }, [preferTagList, setValue])

  return (
    <fieldset className="h-[calc(100%-200px)]">
      <legend className="mb-4 text-2xl font-bold ">
        마지막으로, <br />
        관심사를 선택해 주세요
      </legend>
      <div className="mb-12 flex justify-between">
        <p className=" break-keep text-sm text-gray-500">
          선택하신 관심사를 바탕으로 뉴스레터를 추천해드려요 <br />
          관심사는 언제든지 수정할 수 있어요
        </p>
        <span className="self-end rounded-2xl bg-[#F1F4F9] px-3 py-1 text-sm text-blue-500">
          {preferTagList.length}/4
        </span>
      </div>
      <div className="h-full overflow-y-auto">
        <div className="flex flex-col gap-5 xs:grid xs:grid-cols-2 xs:content-center xs:justify-center">
          {Object.keys(NEWSLETTER_CATEGORY).map((categoryKey) => (
            <UserPreferTag
              key={categoryKey}
              disabledTag={disabledTag}
              setPreferTagList={setPreferTagList}
              preferTagList={preferTagList}
              categoryKey={categoryKey as NewsletterCategory}
            />
          ))}
        </div>
      </div>
      {errors.interest?.message && (
        <p className="mt-4 flex items-center gap-1 text-sm text-red-400">
          <ExclamationCircleOutline />
          {errors.interest.message}
        </p>
      )}
    </fieldset>
  )
}
