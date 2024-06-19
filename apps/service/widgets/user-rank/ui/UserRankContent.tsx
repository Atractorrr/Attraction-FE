import { useSuspenseQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { getUserRanking } from '../api'
import UserRankMedal from './UserRankMedal'

interface UserRankContentType {
  activeRanking: 'article' | 'streak'
}

export default function UserRankContent({
  activeRanking,
}: UserRankContentType) {
  const { data: userRankingArr } = useSuspenseQuery({
    queryKey: ['userRanking', activeRanking],
    queryFn: () => getUserRanking(activeRanking),
  })

  return (
    <div className="size-full h-full overflow-y-auto pr-5 lg:h-[400px]">
      {userRankingArr?.map((user, i) => {
        return (
          <div
            key={user.nickname}
            className="peer flex w-full gap-3 peer-[]:mt-3">
            <UserRankMedal rank={i} />
            <div className="size-10 shrink-0 rounded-full border border-gray-100 bg-gray-50 dark:border-gray-600 dark:bg-gray-700">
              <Image
                width={40}
                height={40}
                src={user?.profileImg || '/images/default-1x1.jpg'}
                className="rounded-full"
                alt="프로필사진"
              />
            </div>
            <div className="w-full max-w-[calc(100%-3rem-40px)]">
              <p className="truncate font-medium">
                {user?.nickname ?? `${i + 1}위 유저`}
              </p>
              <p className="break-keep text-sm text-gray-500 dark:text-gray-400">
                {activeRanking === 'article'
                  ? `총 ${user?.value ?? 'N'}개의 아티클을 `
                  : `최장 ${user?.value ?? 'N'}일 연속 아티클을 `}
                <span className="whitespace-nowrap">읽었어요! 🎉</span>
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
