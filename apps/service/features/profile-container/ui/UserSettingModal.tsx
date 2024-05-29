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
      <div className="fixed left-0 top-0 z-50 flex  size-full items-center justify-center">
        <div
          role="presentation"
          className="absolute -z-10 size-full bg-gray-400 opacity-70 "
          onClick={() => {
            setModal(false)
          }}
        />
        <div className="absolute flex h-fit max-w-[540px] flex-col justify-between rounded-3xl bg-white p-6 ">
          <p className="mb-9 text-xl font-bold text-gray-700">개인설정</p>
          <form>
            <div className="flex h-[450px] flex-col gap-9 overflow-y-scroll">
              <UserSettingName />
              <UserSettingExpiration />
              <UserPreferTagField />
              <UserSettingJob />
            </div>
            <Button
              type="submit"
              disabled={!!Object.keys(formMethod.formState.errors).length}
              className={`mt-14 w-full rounded-xl bg-gray-700 py-5 font-medium text-white ${Object.keys(formMethod.formState.errors).length ? 'opacity-40' : 'opacity-100'}`}>
              변경사항 저장하기
            </Button>
          </form>
        </div>
      </div>
    </FormProvider>
  )
}
