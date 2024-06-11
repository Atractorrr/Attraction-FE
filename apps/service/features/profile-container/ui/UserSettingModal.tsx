import { FormProvider, useForm } from 'react-hook-form'
import { Button } from '@attraction/design-system/dist'
import { useEffect } from 'react'
import { UserProfile } from '@/entities/profile'
import UserSettingJob from './UserSettingJob'
import UserSettingExpiration from './UserSettingExpiration'
import { SettingForm } from '../model'
import UserSettingName from './UserSettingName'
import {
  getChangeSettingFormProperty,
  useOptimisticProfileUpdate,
} from '../lib'
import UserSettingInterest from './UserSettingInterest'

interface UserSettingProps {
  userId: string
  setModal: React.Dispatch<React.SetStateAction<boolean>>
  userProfile: UserProfile
}

export default function UserSettingModal({
  userId,
  setModal,
  userProfile,
}: UserSettingProps) {
  const formMethod = useForm<SettingForm>({
    defaultValues: {
      nickname: userProfile.nickname,
      interest: userProfile.interest,
      isNicknameChecked: false,
      userExpiration: userProfile.userExpiration,
      occupation: userProfile.occupation,
    },
  })
  const { mutate } = useOptimisticProfileUpdate(userId)

  const submitSettingFormHandler = (submitFormData: SettingForm) => {
    const originSettingFormData: Omit<SettingForm, 'isNicknameChecked'> = {
      nickname: userProfile.nickname,
      interest: userProfile.interest,
      userExpiration: userProfile.userExpiration,
      occupation: userProfile.occupation,
    }
    const { isNicknameChecked, ...changeSettingFormData } = submitFormData

    const changeSettingFormProperty = getChangeSettingFormProperty(
      originSettingFormData,
      changeSettingFormData,
    )

    if (changeSettingFormProperty !== null) {
      mutate({ formData: changeSettingFormProperty, email: userProfile.email })
    }

    setModal(false)
  }

  // 모달창 띄울 시 스크롤 방지
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
          <form onSubmit={formMethod.handleSubmit(submitSettingFormHandler)}>
            <div className="flex h-[calc(100vh-18rem)] flex-col gap-9 overflow-y-scroll md:h-[450px]">
              <UserSettingName nickname={userProfile.nickname} />
              <UserSettingExpiration />
              <UserSettingInterest />
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
