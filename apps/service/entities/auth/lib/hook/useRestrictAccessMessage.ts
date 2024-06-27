'use client'

import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { ACCESS_PARAMS_KEY, ACCESS_MESSAGE } from '../../constant'

export default function useRestrictAccessMessage() {
  const pathname = usePathname()
  const router = useRouter()
  const params = useSearchParams()
  const accessType = params.get(ACCESS_PARAMS_KEY)

  useEffect(() => {
    if (accessType) {
      const { type, message } = ACCESS_MESSAGE[accessType]

      toast?.[type]?.(message)
      router.replace(pathname)
    }
  }, [accessType, router, pathname])
}
