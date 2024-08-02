import { useEffect, useMemo, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { CheckOutline, ComputerEmoji } from '@attraction/icons'
import { Badge } from '@attraction/design-system/dist'
import { twcn } from '@attraction/utils'
import { getCategorySVG } from '@/entities/profile'
import { NEWSLETTER_CATEGORY } from '@/shared/constant'
import type { NewsletterCategory } from '@/shared/type'
import { WarnTxt } from '@/shared/ui'
import { useDisabledBtn } from '../lib'
import { SignUpFormType } from '../model'

interface UserPreferTagType {
  categoryKey: NewsletterCategory
  disabledTag: boolean
  preferTagList: NewsletterCategory[]
  setPreferTagList: React.Dispatch<React.SetStateAction<NewsletterCategory[]>>
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
    <li
      className={twcn(
        'relative',
        disabledTag && !isActive ? 'opacity-40' : 'opacity-100',
      )}>
      <label
        htmlFor={categoryKey}
        className={twcn(
          'flex w-full flex-col items-center self-center justify-self-center rounded-lg border-2 py-8 dark:bg-gray-700',
          (!disabledTag || isActive) && 'cursor-pointer',
          isActive
            ? 'border-gray-700 dark:border-gray-100'
            : 'border-gray-100 dark:border-gray-700',
        )}>
        <span
          className={twcn(
            'absolute right-3 top-3 flex size-5 items-center justify-center rounded-full p-1 focus:border-none',
            isActive
              ? 'bg-gray-700 dark:bg-gray-100'
              : 'border-2 border-gray-100 dark:border-gray-600',
          )}>
          <input
            id={categoryKey}
            type="checkbox"
            className={twcn(
              'absolute inset-0 appearance-none rounded-full',
              (!disabledTag || isActive) && 'cursor-pointer',
            )}
            disabled={disabledTag && !isActive}
            onChange={() => checkboxChangeHandler()}
          />
          <CheckOutline
            className={twcn(
              'size-full rounded-md font-bold text-white dark:text-gray-700',
              isActive ? 'visible' : 'invisible',
            )}
          />
        </span>
        {CategoryEmoji ? (
          <CategoryEmoji className="size-12" />
        ) : (
          <ComputerEmoji className="size-12" />
        )}
        <span className="mt-3">{NEWSLETTER_CATEGORY[categoryKey]}</span>
      </label>
    </li>
  )
}

export default function UserPreferTagField() {
  const {
    setValue,
    formState: { errors },
    getValues,
  } = useFormContext<SignUpFormType>()
  const [preferTagList, setPreferTagList] = useState<NewsletterCategory[]>(
    getValues('interest'),
  )

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
          <ul className="flex flex-col gap-5 xs:grid xs:grid-cols-2 xs:content-center xs:justify-center">
            {Object.keys(NEWSLETTER_CATEGORY).map((categoryKey) => (
              <UserPreferTag
                key={categoryKey}
                disabledTag={disabledTag}
                setPreferTagList={setPreferTagList}
                preferTagList={preferTagList}
                categoryKey={categoryKey as NewsletterCategory}
              />
            ))}
          </ul>
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
