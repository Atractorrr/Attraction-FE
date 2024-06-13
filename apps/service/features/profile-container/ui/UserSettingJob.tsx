import { USER_INFO_OCCUPATION, UserSettingList } from '@/features/user-setting'
import { useFormContext } from 'react-hook-form'
import { SettingForm } from '../model'

export default function UserSettingJob() {
  const { setValue, getValues } = useFormContext<SettingForm>()
  const setUserSettingOccupation = (keyItem: string) => {
    setValue('occupation', keyItem)
  }

  return (
    <fieldset>
      <legend className="mb-4 text-sm font-medium">직업분야</legend>
      <UserSettingList
        listData={USER_INFO_OCCUPATION}
        wrap
        btnClickHandler={setUserSettingOccupation}
        initialItem={getValues('occupation')}
      />
    </fieldset>
  )
}
