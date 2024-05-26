import { useEffect, useMemo, useRef, useState } from 'react'
import {
  FieldArrayWithId,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  useFieldArray,
  useFormContext,
} from 'react-hook-form'
import { ComputerEmoji } from '@attraction/icons'
import { NEWSLETTER_CATEGORY } from '@/shared/constant'
import { getCategorySVG } from '@/entities/profile'
import { SignUpFormType } from '../model'

interface UserPreferTagType {
  categoryKey: keyof typeof NEWSLETTER_CATEGORY
  append: UseFieldArrayAppend<SignUpFormType, 'interest'>
  fields: FieldArrayWithId<SignUpFormType, 'interest', 'id'>[]
  remove: UseFieldArrayRemove
  disabledTag: boolean
}

function UserPreferTag({
  categoryKey,
  append,
  fields,
  remove,
  disabledTag,
}: UserPreferTagType) {
  const checkboxRef = useRef<HTMLInputElement>(null)
  const [isActive, setIsActive] = useState(false)
  // TODO: 이모티콘 깜박임 문제 해결하기 (필수!!!)
  const CategoryEmoji = useMemo(
    () => getCategorySVG(NEWSLETTER_CATEGORY[categoryKey]),
    [categoryKey],
  )
  const categoryIndex = useMemo(
    () => fields.findIndex((el) => el.value === categoryKey),
    [categoryKey, fields],
  )

  const checkboxChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.checked) {
      setIsActive((pre) => !pre)
      append({ value: categoryKey })
    } else {
      remove(categoryIndex)
      setIsActive((pre) => !pre)
    }
  }

  return (
    <div
      className={`relative ${disabledTag && !isActive ? 'opacity-40' : 'opacity-100'}`}>
      <input
        type="checkbox"
        className="absolute right-3 top-3"
        ref={checkboxRef}
        onChange={checkboxChangeHandler}
        disabled={disabledTag && !isActive}
      />
      <button
        type="button"
        className={`flex w-full flex-col items-center self-center justify-self-center
        rounded-lg border py-8 ${isActive ? 'border-gray-700' : 'border-gray-100'} `}
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
  const { control } = useFormContext<SignUpFormType>()
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'interest',
  })
  const [disabledTag, setDisabledTag] = useState(false)

  useEffect(() => {
    if (fields.length >= 4) {
      setDisabledTag(true)
    } else {
      setDisabledTag(false)
    }
  }, [fields])

  return (
    <fieldset>
      <legend className="mb-4 text-2xl font-bold text-gray-700">
        마지막으로, 관심사를 선택해 주세요
      </legend>
      <p className="mb-12 text-gray-500">
        선택하신 관심사를 바탕으로 뉴스레터를 추천해드려요 관심사는 언제든지
        수정할 수 있어요
      </p>
      <div className="h-[30rem] overflow-y-auto">
        <div className="xs:grid xs:content-center xs:justify-center xs:grid-cols-2 flex flex-col gap-5">
          {Object.keys(NEWSLETTER_CATEGORY).map((categoryKey) => (
            <UserPreferTag
              key={categoryKey}
              disabledTag={disabledTag}
              categoryKey={categoryKey as keyof typeof NEWSLETTER_CATEGORY}
              append={append}
              fields={fields}
              remove={remove}
            />
          ))}
        </div>
      </div>
    </fieldset>
  )
}
