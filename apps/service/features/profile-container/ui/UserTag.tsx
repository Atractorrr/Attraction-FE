/* eslint-disable import/no-extraneous-dependencies */
import { useEffect, useMemo, useRef, useState } from 'react'
import {
  FieldArrayWithId,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  useFieldArray,
  useFormContext,
} from 'react-hook-form'
import type { SettingForm } from './UserSettingModal'

const NEWSLETTER_CATEGORY = Object.freeze({
  RECOMMEND: '추천', // TODO: 추후 논의 (백엔드에 없는 enum)
  TREND_LIFE: '트렌드/라이프',
  ENTERTAINMENT: '엔터테인먼트',
  BUSINESS_FINANCIAL_TECHNOLOGY: '비즈/재테크',
  LOCAL_TRAVEL: '지역/여행',
  FOOD: '푸드',
  IT_TECH: 'IT/테크',
  DESIGN: '디자인',
  CURRENT_AFFAIRS_SOCIETY: '시사/사회',
  HOBBY_SELF_DEVELOPMENT: '취미/자기개발',
  CULTURE_ART: '문화/예술',
  LIVING_INTERIOR: '리빙/인테리어',
  HEALTH_MEDICINE: '건강/의학',
})

interface UserPreferTagType {
  categoryKey: keyof typeof NEWSLETTER_CATEGORY
  append: UseFieldArrayAppend<SettingForm, 'preferTag'>
  fields: FieldArrayWithId<SettingForm, 'preferTag', 'id'>[]
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
        hidden
        onChange={checkboxChangeHandler}
        disabled={disabledTag && !isActive}
      />
      <button
        type="button"
        className={`rounded-2xl px-4 py-2 ${isActive ? 'bg-gray-700 text-white' : 'bg-gray-50 text-gray-700'} `}
        disabled={disabledTag && !isActive}
        onClick={() => {
          checkboxRef.current?.click()
        }}>
        <span className="mt-3">{NEWSLETTER_CATEGORY[categoryKey]}</span>
      </button>
    </div>
  )
}

export default function UserPreferTagField() {
  const { control } = useFormContext<SettingForm>()
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'preferTag',
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
      <legend className="mb-4 text-sm font-bold text-gray-700">관심사</legend>
      <div className=" flex flex-wrap gap-4">
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
    </fieldset>
  )
}
