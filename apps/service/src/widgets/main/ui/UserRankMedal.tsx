import Image from 'next/image'
import { MEDAL_IMAGES } from '../constant'

interface UserRankMedalType {
  rank: number
}

export default function UserRankMedal({ rank }: UserRankMedalType) {
  return (
    <div className="mr-1 flex h-9 w-6 shrink-0 items-center justify-center">
      {rank < 3 ? (
        <Image
          width={24}
          height={36}
          src={`/images/${MEDAL_IMAGES[rank]}`}
          alt={`${rank + 1}위 메달 이미지`}
          className="size-full object-contain"
        />
      ) : (
        <p className="text-center text-xl font-bold text-gray-500 dark:text-gray-400">
          {rank + 1}
        </p>
      )}
    </div>
  )
}
