/* eslint-disable import/no-extraneous-dependencies */
import { useEffect, useMemo, useRef, useState } from 'react'
import {
  FieldArrayWithId,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  useFieldArray,
  useFormContext,
} from 'react-hook-form'
import { SettingForm } from '../model'

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
        className={`rounded-full ${isActive ? 'bg-gray-700 text-white dark:bg-gray-50  dark:text-gray-700' : 'bg-gray-50 dark:bg-gray-700'} px-6 py-2 `}
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
  const [alertActive, setAlertActive] = useState(false)
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'preferTag',
  })
  const [disabledTag, setDisabledTag] = useState(false)

  useEffect(() => {
    if (fields.length >= 4) {
      setDisabledTag(true)
      setAlertActive(false)
    } else {
      setAlertActive(true)
      setDisabledTag(false)
    }
  }, [fields, setAlertActive])

  return (
    <fieldset>
      <div className="flex gap-1">
        <legend className="mb-4 inline text-sm font-medium">관심사</legend>
        <span className="text-sm text-gray-500">{fields.length}/4</span>
      </div>
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
      {alertActive && (
        <p className="mt-2 text-sm text-red-500">
          관심사는 최대 4개까지 선택할 수 있어요
        </p>
      )}
    </fieldset>
  )
}
