import { FormProvider, useForm } from 'react-hook-form'
import { Button } from '@attraction/design-system'
import { useEffect } from 'react'
import UserPreferTagField from './UserTag'
import UserSettingJob from './UserSettingJob'
import UserSettingExpiration from './UserSettingExpiration'
import { SettingForm } from '../model'
import UserSettingName from './UserSettingName'

const User = {
  nickName: 'Lee',
  interest: ['IT_TECH', 'CURRENT_AFFAIRS_SOCIETY'],
  birthDate: '20200202',
  userExpiration: 6,
  occupation: '관리직',
}

interface UserSettingProps {
  setModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function UserSettingModal({ setModal }: UserSettingProps) {
  const formMethod = useForm<SettingForm>({
    defaultValues: {
      nickName: User.nickName,
      preferTag: [],
      isNickNameChecked: false,
      userExpiration: User.userExpiration,
      occupation: User.occupation,
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
            <Button
              type="submit"
              disabled={!!Object.keys(formMethod.formState.errors).length}
              className={`mt-14 w-full rounded-xl bg-gray-700 py-5 font-medium text-white dark:bg-gray-50 dark:text-gray-700 ${Object.keys(formMethod.formState.errors).length ? 'opacity-40' : 'opacity-100'}`}>
              변경사항 저장하기
            </Button>
          </form>
        </div>
      </div>
    </FormProvider>
  )
}
