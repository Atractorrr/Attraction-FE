import { useAuth } from '@/entities/auth'
import { UserProfile } from '@/entities/profile'
import {
  UseMutateFunction,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query'
import { fetchUserProfile, postUserSettingInfo } from '../../api'

const useUserSetting = (): {
  userProfile: UserProfile
  mutate: UseMutateFunction<
    any,
    Error,
    {
      value: unknown
      type: 'interest' | 'nickname' | 'occupation' | 'expiration'
      email: string
    },
    unknown
  >
  userEmail: string
} => {
  const { userEmail } = useAuth()

  const queryClient = useQueryClient()

  // TODO: Susepense 있을 때 랑 그냥 query 썻을때 쿠키에 헤더가 실리고 안실린다.
  const { data: userProfile } = useQuery({
    queryKey: ['profile', userEmail],
    queryFn: () => fetchUserProfile(userEmail as string),
  })

  const { mutate } = useMutation({
    mutationFn: ({
      value,
      type,
      email,
    }: {
      value: unknown
      type: 'interest' | 'nickname' | 'occupation' | 'expiration'
      email: string
    }) => {
      return postUserSettingInfo(value, type, email)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profile', userEmail!] })
    },
  })

  return {
    userProfile: userProfile as UserProfile,
    mutate,
    userEmail: userEmail as string,
  }
}

export default useUserSetting
