import { UserProfile } from '@/entities/profile'

const fetchUserProfile = async (userEmail?: string): Promise<UserProfile> => {
  if (!userEmail) {
    throw new Error('프로필을 가져올 수 없어요')
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/${userEmail}`,
  )
  const data = await res.json()
  const { user } = data

  return user
}

export default fetchUserProfile
