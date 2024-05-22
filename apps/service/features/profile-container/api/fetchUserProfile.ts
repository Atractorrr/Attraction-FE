import { UserProfileType } from '@/entities'

export const fetchUserProfile = async (
  userId: string,
): Promise<UserProfileType> => {
  const data = await fetch(`${process.env.API_URL}/api/v1/member/${userId}`, {
    cache: 'no-store',
  }).then((res) => res.json())
  const { user } = data
  return user
}
