import { UserRankingInfoType } from '../model'

const getUserRanking = async (type: 'article' | 'strict') => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/rank/${type}`,
  )

  if (!res.ok) {
    throw new Error('잘못된 데이터 입니다.')
  }

  // TODO: 받아오는 키 값에따라 데이터 분류하기 타입스크립트 관련

  return res.json() as Promise<UserRankingInfoType>
}
export default getUserRanking
