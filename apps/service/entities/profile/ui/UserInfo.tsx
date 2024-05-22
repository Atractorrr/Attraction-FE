import React from 'react'

type Props = {
  userName: string
  userEmail: string
}

export default function UserInfo({ userName, userEmail }: Props) {
  return (
    <div className="mb-6 space-y-2">
      <p className="text-2xl font-bold">{userName}</p>
      <p className="text-base font-medium text-[#6F7A86]">{userEmail}</p>
    </div>
  )
}
