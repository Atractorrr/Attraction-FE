'use client'

import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { ACCESS_PARAMS_KEY } from '../../constant'

export default function useRestrictAccessMessage() {
  const pathname = usePathname()
  const router = useRouter()
  const params = useSearchParams()
  const accessType = params.get(ACCESS_PARAMS_KEY)

  useEffect(() => {
    if (!accessType) return
    if (accessType === 'register') {
      toast.error('회원가입을 마저 진행해주세요')
    }
    if (accessType === 'logout') {
      toast.success('로그아웃에 성공했어요!')
    }
    if (accessType === 'login') {
      toast.info('이미 로그인을 마치셨어요')
    }
    router.replace(pathname)
  }, [accessType, router, pathname])
}
