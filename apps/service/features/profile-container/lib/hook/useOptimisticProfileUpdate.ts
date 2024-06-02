'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { UserProfile } from '@/entities/profile'
import { postUserSettingForm } from '../../api'

const useOptimisticProfileUpdate = (userId: string) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: postUserSettingForm,
    onMutate: async (changeFormData) => {
      await queryClient.cancelQueries({ queryKey: ['profile', userId] })

      const previousData = queryClient.getQueryData<UserProfile>([
        'profile',
        userId,
      ])

      queryClient.setQueryData<UserProfile>(
        ['profile', userId],
        (originFormData) => {
          if (originFormData) {
            return {
              ...originFormData,
              ...changeFormData.formData,
            }
          }
          return originFormData
        },
      )

      return { previousData }
    },

    onError: (_, __, context) => {
      queryClient.setQueryData(['profile', userId], context?.previousData)
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['profile', userId] })
    },
  })
}

export default useOptimisticProfileUpdate
