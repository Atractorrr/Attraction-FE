import { GuideTxt, ThumbnailImage } from '@/shared/ui'
import { useSuspenseQuery } from '@tanstack/react-query'
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
    <ul className="size-full h-full overflow-y-auto overscroll-none pr-5 lg:h-[400px]">
      {userRankingArr.length === 0 ? (
        <li className="items-center justify-center py-36">
          <GuideTxt
            title="랭킹이 아직 집계되지 않았어요"
            sub="열심히 활동해주세요!"
          />
        </li>
      ) : (
        userRankingArr?.map((user, i) => {
          return (
            <li
              key={user.nickname}
              className="peer flex w-full gap-3 peer-[]:mt-3">
              <UserRankMedal rank={i} />
              <div className="size-10 shrink-0 overflow-hidden rounded-full border border-gray-100 bg-gray-50 dark:border-gray-600 dark:bg-gray-700">
                <ThumbnailImage
                  src={user?.profileImg}
                  alt="사진: 프로필 사진"
                  type="profile"
                />
              </div>
              <div className="w-full max-w-[calc(100%-3rem-40px)]">
                <p className="truncate font-medium">
                  {user?.nickname ?? `${i + 1}위 유저`}
                </p>
                <p className="break-keep text-sm text-gray-500 dark:text-gray-400">
                  {activeRanking === 'article'
                    ? `총 ${user?.value ?? 'N'}개의 아티클을 `
                    : `${user?.value ?? 'N'}일 연속으로 아티클을 `}
                  <span className="whitespace-nowrap">읽었어요! 🎉</span>
                </p>
              </div>
            </li>
          )
        })
      )}
    </ul>
  )
}
