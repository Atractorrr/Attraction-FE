/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import { NEWSLETTER_CATEGORY } from '@/shared/constant'
import { NewsletterCategory } from '@/shared/type'
import { WarnTxt } from '@/shared/ui'
import { useRef, useState } from 'react'
import { useUserInterestTag } from '../../lib'

interface UserPreferTagType {
  categoryKey: NewsletterCategory
  setPreferTagList: React.Dispatch<React.SetStateAction<NewsletterCategory[]>>
  disabledTag: boolean
  preferTagList: NewsletterCategory[]
}
interface UserSettingInterestType {
  setModalValue: React.Dispatch<React.SetStateAction<unknown>>
  initialValue: NewsletterCategory[]
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
    <div className="relative">
      <input
        type="checkbox"
        value={categoryKey}
        checked={isActive}
        className="peer absolute right-3 top-3"
        ref={checkboxRef}
        hidden
        onChange={checkboxChangeHandler}
        disabled={disabledTag && !isActive}
      />
      <label
        htmlFor={categoryKey}
        title={`카테고리 선택: ${NEWSLETTER_CATEGORY[categoryKey]}`}
        className={`block cursor-pointer rounded-full px-6 py-2 transition-colors peer-disabled:cursor-auto peer-disabled:!bg-gray-50 peer-disabled:!text-gray-400 dark:peer-disabled:!bg-gray-700 dark:peer-disabled:!text-gray-500 ${
          isActive
            ? 'bg-gray-700 text-white dark:bg-gray-50  dark:text-gray-700'
            : 'bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600'
        }`}
        onClick={() => {
          checkboxRef.current?.click()
        }}>
        <span className="mt-3">{NEWSLETTER_CATEGORY[categoryKey]}</span>
      </label>
    </div>
  )
}

export default function UserSettingInterest({
  setModalValue,
  initialValue,
}: UserSettingInterestType) {
  const { preferTagList, setPreferTagList, alertActive, disabledTag } =
    useUserInterestTag(initialValue, setModalValue)

  return (
    <fieldset>
      <div className="mb-4 flex gap-1 px-1">
        <legend className="inline text-sm font-medium">관심사</legend>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {preferTagList.length}/4
        </span>
      </div>
      <div className=" flex flex-wrap gap-x-2 gap-y-3">
        {Object.keys(NEWSLETTER_CATEGORY).map((categoryKey) => (
          <UserInterestTag
            key={categoryKey}
            preferTagList={preferTagList}
            disabledTag={disabledTag}
            categoryKey={categoryKey as NewsletterCategory}
            setPreferTagList={setPreferTagList}
          />
        ))}
      </div>
      {alertActive && (
        <div className="mt-5">
          <WarnTxt content="최소 1개 이상은 선택해주세요" color="red" />
        </div>
      )}
    </fieldset>
  )
}
