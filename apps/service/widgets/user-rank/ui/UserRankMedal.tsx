import Image from 'next/image'

interface UserRankMedalType {
  rank: number
}

export default function UserRankMedal({ rank }: UserRankMedalType) {
  const getMedal = (rankNum: number) => {
    if (rankNum === 0) return 'firstMedal'
    if (rankNum === 1) return 'secondMedal'
    if (rankNum === 2) return 'thirdMedal'

    return undefined
  }
  return (
    <div className="mr-1 h-9 w-6 shrink-0 self-start">
      {rank < 3 ? (
        <Image
          width={24}
          height={36}
          src={`/images/${getMedal(rank)}.png`}
          alt=""
          className="size-full"
        />
      ) : (
        <p className="text-center text-xl font-bold text-gray-500 dark:text-gray-50">
          {rank + 1}
        </p>
      )}
    </div>
  )
}
