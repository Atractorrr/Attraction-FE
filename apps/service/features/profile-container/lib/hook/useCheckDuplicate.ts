'use client'

import { useMutation } from '@tanstack/react-query'
import { postDuplicateName } from '../../api'

interface UseCheckDuplicateArgType {
  successHandler: () => void
  errorHandler: () => void
}

const useCheckDuplicate = ({
  successHandler,
  errorHandler,
}: UseCheckDuplicateArgType) => {
  return useMutation({
    mutationFn: postDuplicateName,
    onSuccess: () => {
      successHandler()
    },
    onError: () => {
      errorHandler()
    },
  })
}

export default useCheckDuplicate
