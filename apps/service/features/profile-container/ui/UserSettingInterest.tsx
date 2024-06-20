import { useEffect, useRef, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { NEWSLETTER_CATEGORY } from '@/shared/constant'
import { Button } from '@attraction/design-system/dist'
import { ExclamationCircleOutline } from '@attraction/icons'
import { SettingForm } from '../model'
import { useLimitCheckBtn } from '../lib'

interface UserPreferTagType {
  categoryKey: keyof typeof NEWSLETTER_CATEGORY
  setPreferTagList: React.Dispatch<
    React.SetStateAction<(keyof typeof NEWSLETTER_CATEGORY)[]>
  >
  disabledTag: boolean
  preferTagList: (keyof typeof NEWSLETTER_CATEGORY)[]
}

function UserInterestTag({
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
        checked={isActive}
        className="absolute right-3 top-3"
        ref={checkboxRef}
        hidden
        onChange={checkboxChangeHandler}
        disabled={disabledTag && !isActive}
      />
      <Button
        type="button"
        className={`rounded-full ${isActive ? 'bg-gray-700 text-white dark:bg-gray-50  dark:text-gray-700' : 'bg-gray-50 dark:bg-gray-700'} px-6 py-2 `}
        disabled={disabledTag && !isActive}
        onClick={() => {
          checkboxRef.current?.click()
        }}>
        <span className="mt-3">{NEWSLETTER_CATEGORY[categoryKey]}</span>
      </Button>
    </div>
  )
}

export default function UserSettingInterest() {
  const {
    setValue,
    formState: { errors },
    getValues,
    setError,
  } = useFormContext<SettingForm>()
  const [preferTagList, setPreferTagList] = useState<
    (keyof typeof NEWSLETTER_CATEGORY)[]
  >(getValues('interest') ?? [])
  const { alertActive, disabledTag } = useLimitCheckBtn(preferTagList.length)

  useEffect(() => {
    if (preferTagList.length !== 0) {
      setValue('interest', [...preferTagList])
    } else {
      setError('interest', {
        message: '관심사는 최소 1개 이상은 선택하셔야 합니다',
      })
    }
  }, [preferTagList, setError, setValue])

  return (
    <fieldset>
      <div className="flex gap-1">
        <legend className="mb-4 inline text-sm font-medium">관심사</legend>
        <span className="text-sm text-gray-500">{preferTagList.length}/4</span>
      </div>
      <div className=" flex flex-wrap gap-4">
        {Object.keys(NEWSLETTER_CATEGORY).map((categoryKey) => (
          <UserInterestTag
            key={categoryKey}
            preferTagList={preferTagList}
            disabledTag={disabledTag}
            categoryKey={categoryKey as keyof typeof NEWSLETTER_CATEGORY}
            setPreferTagList={setPreferTagList}
          />
        ))}
      </div>
      {alertActive && !errors.interest?.message && (
        <p className="mt-2 flex items-center gap-1 text-sm text-red-500">
          <ExclamationCircleOutline />
          관심사는 최대 4개까지 선택할 수 있어요
        </p>
      )}
      {errors.interest?.message && (
        <p className="mt-2 flex items-center gap-1 text-sm text-red-500">
          <ExclamationCircleOutline />
          관심사는 최소 1개 이상은 선택하셔야 합니다
        </p>
      )}
    </fieldset>
  )
}
