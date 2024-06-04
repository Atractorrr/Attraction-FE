/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useMemo, useRef, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import {
  CheckOutline,
  ComputerEmoji,
  ExclamationCircleOutline,
} from '@attraction/icons'
import { NEWSLETTER_CATEGORY } from '@/shared/constant'
import { getCategorySVG } from '@/entities/profile'
import { NewsletterCategory } from '@/shared/type'
import { SignUpFormType } from '../model'
import { useDisabledBtn } from '../lib'

interface UserPreferTagType {
  categoryKey: keyof typeof NEWSLETTER_CATEGORY
  disabledTag: boolean
  setPreferTagList: React.Dispatch<
    React.SetStateAction<(keyof typeof NEWSLETTER_CATEGORY)[]>
  >
}

function UserPreferTag({
  categoryKey,
  disabledTag,
  setPreferTagList,
}: UserPreferTagType) {
  const checkboxRef = useRef<HTMLInputElement>(null)
  const [isActive, setIsActive] = useState(false)
  const {
    clearErrors,
    formState: { errors },
  } = useFormContext<SignUpFormType>()
  // TODO: 이모티콘 깜박임 문제 해결하기 (필수!!!)
  const CategoryEmoji = useMemo(
    () => getCategorySVG(NEWSLETTER_CATEGORY[categoryKey]),
    [categoryKey],
  )
  const checkboxChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.checked) {
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
        <input
          id={categoryKey}
          type="checkbox"
          className="peer sr-only"
          ref={checkboxRef}
          onChange={checkboxChangeHandler}
          disabled={disabledTag && !isActive}
        />
        <CheckOutline className="invisible size-full rounded-md font-bold text-white peer-checked:visible dark:text-gray-700" />
      </label>
      <button
        type="button"
        className={`flex w-full flex-col items-center self-center justify-self-center
        rounded-lg border-2 py-8 dark:bg-gray-700 ${isActive ? 'border-gray-700 dark:border-gray-100' : 'border-gray-100 dark:border-gray-700'}`}
        disabled={disabledTag && !isActive}
        onClick={() => {
          checkboxRef.current?.click()
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
  const [preferTagList, setPreferTagList] = useState<
    (keyof typeof NEWSLETTER_CATEGORY)[]
  >([])
  const {
    setValue,
    formState: { errors },
  } = useFormContext<SignUpFormType>()

  const { disabledTag } = useDisabledBtn(preferTagList)

  useEffect(() => {
    if (preferTagList.length) {
      setValue('interest', [...preferTagList])
    }
  }, [preferTagList, setValue])

  return (
    <fieldset className="h-[calc(100%-240px)]">
      <div className="">
        <legend className="mb-4 text-2xl font-bold ">
          마지막으로, <br />
          관심사를 선택해 주세요
        </legend>
        <p className="mb-12 break-keep text-sm text-gray-500">
          선택하신 관심사를 바탕으로 뉴스레터를 추천해드려요 <br />
          관심사는 언제든지 수정할 수 있어요
        </p>
      </div>
      <div className="h-full overflow-y-auto">
        <div className="xs:grid xs:grid-cols-2 xs:content-center xs:justify-center flex flex-col gap-5">
          {Object.keys(NEWSLETTER_CATEGORY).map((categoryKey) => (
            <UserPreferTag
              key={categoryKey}
              disabledTag={disabledTag}
              setPreferTagList={setPreferTagList}
              categoryKey={categoryKey as NewsletterCategory}
            />
          ))}
        </div>
      </div>
      {errors.interest?.message && (
        <p className="mt-2 flex items-center gap-1 text-sm text-red-400">
          <ExclamationCircleOutline />
          {errors.interest.message}
        </p>
      )}
    </fieldset>
  )
}
