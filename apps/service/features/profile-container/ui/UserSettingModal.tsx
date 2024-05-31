import { FormProvider, useForm } from 'react-hook-form'
import { Button } from '@attraction/design-system'
import { useEffect } from 'react'
import { NEWSLETTER_CATEGORY } from '@/shared/constant'
import UserPreferTagField from './UserTag'
import UserSettingJob from './UserSettingJob'
import UserSettingExpiration from './UserSettingExpiration'
import { SettingForm } from '../model'
import UserSettingName from './UserSettingName'

interface UserSettingProps {
  setModal: React.Dispatch<React.SetStateAction<boolean>>
  nickname: string
  occupation: string
  interest: (keyof typeof NEWSLETTER_CATEGORY)[]
  userExpiration: number
}

export default function UserSettingModal({
  setModal,
  nickname,
  occupation,
  interest,
  userExpiration,
}: UserSettingProps) {
  const formMethod = useForm<SettingForm>({
    defaultValues: {
      nickname,
      interest,
      isNickNameChecked: false,
      userExpiration,
      occupation,
    },
  })

  // const hi = (data) => {
  //   console.log(data)
  // }

  useEffect(() => {
    const height = window.scrollY

    document.body.style.cssText = `
      position: fixed;
      top: -${height}px;
      overflow-y: scroll;
      width: 100%;
    `
    return () => {
      const scrollY = document.body.style.top
      document.body.style.cssText = ''
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1)
    }
  }, [])

  return (
    <FormProvider {...formMethod}>
      <div className="fixed left-0 top-0 z-50 flex size-full min-h-screen items-center justify-center">
        <div
          role="presentation"
          className="absolute -z-10 hidden size-full bg-gray-400 opacity-70 md:block"
          onClick={() => {
            setModal(false)
          }}
        />
        <div className="flex size-full flex-col justify-evenly bg-white p-6 md:h-fit md:max-w-[540px] md:rounded-3xl dark:bg-gray-800 ">
          <p className="text-xl font-bold md:mb-9">개인설정</p>
          <form>
            <div className="flex h-[calc(100vh-18rem)] flex-col gap-9 overflow-y-scroll md:h-[450px]">
              <UserSettingName />
              <UserSettingExpiration />
              <UserPreferTagField />
              <UserSettingJob />
            </div>
            <div className="flex gap-2">
              <Button
                type="button"
                className="mt-14 w-2/3 rounded-lg bg-gray-50 py-3 font-medium dark:bg-gray-700"
                onClick={() => setModal(false)}>
                취소하기
              </Button>
              <Button
                type="submit"
                onClick={() => {
                  if (formMethod.getValues('interest').length === 0) {
                    formMethod.setError('interest', {
                      message: '최소 1개 이상 카테고리를 선택해야 합니다.',
                    })
                  }
                }}
                disabled={!!Object.keys(formMethod.formState.errors).length}
                className={`mt-14 w-full rounded-lg bg-gray-700 py-3 font-medium text-white dark:bg-gray-50 dark:text-gray-700 ${Object.keys(formMethod.formState.errors).length ? 'opacity-40' : 'opacity-100'}`}>
                변경사항 저장하기
              </Button>
            </div>
          </form>
        </div>
      </div>
    </FormProvider>
  )
}
