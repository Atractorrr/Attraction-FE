import { NEWSLETTER_CATEGORY } from '@/shared/constant'
import { Button } from '@attraction/design-system/dist'
import { ExclamationCircleOutline } from '@attraction/icons'
import { useEffect, useRef, useState } from 'react'

interface UserPreferTagType {
  categoryKey: keyof typeof NEWSLETTER_CATEGORY
  setPreferTagList: React.Dispatch<
    React.SetStateAction<(keyof typeof NEWSLETTER_CATEGORY)[]>
  >
  disabledTag: boolean
  preferTagList: (keyof typeof NEWSLETTER_CATEGORY)[]
}
interface UserSettingInterestType {
  setModalValue: React.Dispatch<React.SetStateAction<unknown>>
  initialValue: (keyof typeof NEWSLETTER_CATEGORY)[]
}

function UserInterestTag({
  categoryKey,
  setPreferTagList,
  preferTagList,
  disabledTag,
}: UserPreferTagType) {
  const checkboxRef = useRef<HTMLInputElement>(null)
  const [isActive, setIsActive] = useState(preferTagList.includes(categoryKey))
  const checkboxChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.checked) {
      setPreferTagList((pre) => [...pre, categoryKey])
    } else {
      setPreferTagList((pre) =>
        pre.filter((category) => category !== categoryKey),
      )
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

export default function UserSettingInterest({
  setModalValue,
  initialValue,
}: UserSettingInterestType) {
  const [preferTagList, setPreferTagList] =
    useState<(keyof typeof NEWSLETTER_CATEGORY)[]>(initialValue)

  const [alertActive, setAlertActive] = useState(false)
  const [disabledTag, setDisabledTag] = useState(false)

  useEffect(() => {
    if (preferTagList.length >= 4) {
      setDisabledTag(true)
    } else {
      setDisabledTag(false)
    }

    if (preferTagList.length === 0) {
      setAlertActive(true)
    } else {
      setAlertActive(false)
    }
  }, [preferTagList])

  useEffect(() => {
    if (alertActive) {
      setModalValue(undefined)
    } else {
      setModalValue({ interest: preferTagList })
    }
  }, [alertActive, preferTagList, setModalValue])

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
      {alertActive && (
        <p className="mt-2 flex items-center gap-1 text-sm text-red-500">
          <ExclamationCircleOutline />
          관심사는 최소 1개 이상은 선택하셔야 합니다
        </p>
      )}
    </fieldset>
  )
}