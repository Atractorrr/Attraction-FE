'use client'

import { UserProfile } from '@/entities/profile'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { postImgUrl } from '../../api'

const useOptimisticPostImgUrl = (
  email: string,
  type: 'profile' | 'background',
) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: postImgUrl,
    onMutate: async (postImgArg) => {
      await queryClient.cancelQueries({ queryKey: ['profile', email] })
      const previousData = queryClient.getQueryData<UserProfile>([
        'profile',
        email,
      ])

      queryClient.setQueryData<UserProfile>(['profile', email], (old) => {
        if (old) {
          const imgUrl =
            type === 'profile'
              ? { profileImg: postImgArg.fileImgSrc }
              : { backgroundImg: postImgArg.fileImgSrc }
          return { ...old, ...imgUrl }
        }
        return old
      })

      return { previousData }
    },
    onSuccess: (res, postImgArg, context) => {
      fetch('/api/s3-upload', {
        body: JSON.stringify({
          deleteS3ImgUrl: `${type === 'profile' ? context.previousData?.profileImg : context.previousData?.backgroundImg}`,
        }),
        method: 'DELETE',
      })
    },
    onError: (err, postImgArg, context) => {
      queryClient.setQueryData(['profile', email], context?.previousData)
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['profile', email] })
    },
  })
}

export default useOptimisticPostImgUrl
