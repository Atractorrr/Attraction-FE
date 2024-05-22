import { UserProfile } from '@/entities/profile'

const fetchUserProfile = async (userId: string): Promise<UserProfile> => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/member/${userId}`,
    {
      cache: 'no-store',
    },
  ).then((res) => res.json())
  const { user } = data
  return user
}

export default fetchUserProfile
