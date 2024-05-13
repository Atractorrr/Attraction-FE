import React from 'react'
import * as Features from '@/features'

type Props = {}

export default function Page({}: Props) {
  return (
    <div className="h-full bg-[#F4F6F8] px-40 py-10">
      <Features.Profile.UI />
    </div>
  )
}
