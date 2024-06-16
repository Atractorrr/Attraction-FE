import { UserRankingInfoType } from '../model'

const getUserRanking = async (
  type: 'article' | 'streak',
): Promise<UserRankingInfoType[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/rank/${type}`,
  )

  const data = await res.json()

  if (!res.ok) {
    throw new Error('잘못된 데이터 입니다.')
  }

  if (Object.prototype.hasOwnProperty.call(data, 'userArticleRank')) {
    return data.userArticleRank
  }
  return data.userStreakRank
}
export default getUserRanking
