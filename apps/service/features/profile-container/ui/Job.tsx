/* eslint-disable import/no-extraneous-dependencies */

import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import type { SettingForm } from './UserSettingModal'

const JOB = ['교직', '전문직', '관리직', '사무직', '자영업', '판매직', '무직']

export default function UserInfoJob() {
  const [activeKey, setActiveKey] = useState('6개월')
  const { setValue } = useFormContext<SettingForm>()

  return (
    <label
      htmlFor="expirationDate"
      aria-label="개인정보 수집 유효기간"
      className="mb-5 block">
      <p className="mb-2 text-sm text-gray-700">산업분야</p>
      <div className="flex flex-row flex-wrap gap-4">
        {JOB.map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => {
              setValue('occupation', key)
              setActiveKey(key)
            }}
            className={`rounded-2xl ${activeKey === key ? 'bg-gray-700 text-white' : 'bg-gray-50 text-gray-700'} px-6 py-2`}>
            {key}
          </button>
        ))}
      </div>
    </label>
  )
}
