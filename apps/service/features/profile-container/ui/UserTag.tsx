/* eslint-disable import/no-extraneous-dependencies */
import { useEffect, useRef, useState } from 'react'
import { useFormContext } from 'react-hook-form'
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
  setPreferTagList: React.Dispatch<
    React.SetStateAction<(keyof typeof NEWSLETTER_CATEGORY)[]>
  >
  disabledTag: boolean
  preferTagList: (keyof typeof NEWSLETTER_CATEGORY)[]
}

function UserPreferTag({
  categoryKey,
  setPreferTagList,
  preferTagList,
  disabledTag,
}: UserPreferTagType) {
  const checkboxRef = useRef<HTMLInputElement>(null)
  const [isActive, setIsActive] = useState(preferTagList.includes(categoryKey))
  const {
    clearErrors,
    formState: { errors },
  } = useFormContext<SettingForm>()
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
  const {
    setValue,
    formState: { errors },
    getValues,
  } = useFormContext<SettingForm>()
  const [preferTagList, setPreferTagList] = useState<
    (keyof typeof NEWSLETTER_CATEGORY)[]
  >(getValues('interest') ?? [])

  const [alertActive, setAlertActive] = useState(false)
  const [disabledTag, setDisabledTag] = useState(false)

  useEffect(() => {
    if (preferTagList.length >= 4) {
      setDisabledTag(true)
      setAlertActive(false)
    } else {
      setDisabledTag(false)
      setAlertActive(true)
    }
  }, [preferTagList])

  useEffect(() => {
    if (preferTagList.length > 0) {
      setValue('interest', [...preferTagList])
    }
  }, [preferTagList, setValue])

  return (
    <fieldset>
      <div className="flex gap-1">
        <legend className="mb-4 inline text-sm font-medium">관심사</legend>
        <span className="text-sm text-gray-500">{preferTagList.length}/4</span>
      </div>
      <div className=" flex flex-wrap gap-4">
        {Object.keys(NEWSLETTER_CATEGORY).map((categoryKey) => (
          <UserPreferTag
            key={categoryKey}
            preferTagList={preferTagList}
            disabledTag={disabledTag}
            categoryKey={categoryKey as keyof typeof NEWSLETTER_CATEGORY}
            setPreferTagList={setPreferTagList}
          />
        ))}
      </div>
      {alertActive && (
        <p className="mt-2 text-sm text-red-500">
          관심사는 최대 4개까지 선택할 수 있어요
        </p>
      )}
      {errors.interest?.message && (
        <p className="mt-2 text-sm text-red-500">
          관심사는 최소 1개 이상은 선택하셔야 합니다
        </p>
      )}
    </fieldset>
  )
}
