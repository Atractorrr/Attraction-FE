/* eslint-disable jsx-a11y/label-has-associated-control */
import { getCategorySVG } from '@/entities/profile'
import { NEWSLETTER_CATEGORY } from '@/shared/constant'
import { NewsletterCategory } from '@/shared/type'
import { CheckOutline, ComputerEmoji } from '@attraction/icons'
import { useEffect, useMemo, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { WarnTxt } from '@/shared/ui'
import { Badge } from '@attraction/design-system/dist'
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
      <div className="px-5 sm:px-10">
        <legend className="mb-4 text-2xl font-bold ">
          마지막으로, <br />
          관심사를 선택해 주세요
        </legend>
        <div className="mb-8 flex items-end justify-between">
          <p className="break-keep text-gray-500 dark:text-gray-400">
            선택하신 관심사를 바탕으로 뉴스레터를 추천해드려요 <br />
            관심사는 언제든지 수정할 수 있어요
          </p>
          <Badge variant="blue">{preferTagList.length}/4</Badge>
        </div>
      </div>
      <div className="relative before:absolute before:inset-x-5 before:top-0 before:z-10 before:h-6 before:bg-gradient-to-b before:from-white before:to-transparent after:absolute after:inset-x-5 after:bottom-0 after:z-10 after:h-6 after:bg-gradient-to-t after:from-white after:to-transparent sm:px-5 dark:before:from-gray-800 dark:after:from-gray-800">
        <div className="max-h-[calc(100dvh-360px)] min-h-64 overflow-y-auto p-5 sm:max-h-[calc(100dvh-450px)]">
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
      </div>
      {errors.interest?.message && (
        <div className="mt-4 px-5 sm:px-10">
          <WarnTxt content={errors.interest.message} color="red" />
        </div>
      )}
    </fieldset>
  )
}
