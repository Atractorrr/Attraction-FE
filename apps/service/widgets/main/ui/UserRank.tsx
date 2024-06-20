'use client'

import { Suspense, useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Button } from '@attraction/design-system/dist'
import { TrophyOutline } from '@attraction/icons'
import { Container, ErrorGuideTxt, LoadingSpinner, Title } from '@/shared/ui'
import UserRankContent from './UserRankContent'

function CustomErrorGuideTxt() {
  return (
    <div className="overflow-hidden">
      <ErrorGuideTxt />
    </div>
  )
}

function BookIcon() {
  return (
    <svg
      // TODO: 아이콘 패키지 이동 (책 아이콘)
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.945 1.25h4.11c1.368 0 2.47 0 3.337.117c.9.12 1.658.38 2.26.981c.602.602.86 1.36.982 2.26c.116.867.116 1.97.116 3.337v8.11c0 1.367 0 2.47-.116 3.337c-.121.9-.38 1.658-.982 2.26c-.602.602-1.36.86-2.26.982c-.867.116-1.97.116-3.337.116h-4.11c-1.367 0-2.47 0-3.337-.116c-.9-.122-1.658-.38-2.26-.982c-.601-.602-.86-1.36-.981-2.26a11.487 11.487 0 0 1-.082-.943a.746.746 0 0 1-.016-.392a65.809 65.809 0 0 1-.019-2.002v-8.11c0-1.367 0-2.47.117-3.337c.12-.9.38-1.658.982-2.26c.601-.602 1.36-.86 2.26-.981c.866-.117 1.969-.117 3.336-.117m-5.168 17c.015.353.039.664.076.942c.099.734.28 1.122.556 1.399c.277.277.666.457 1.4.556c.755.101 1.756.103 3.191.103h4c1.436 0 2.437-.002 3.192-.103c.734-.099 1.122-.28 1.4-.556c.196-.196.343-.449.448-.841H8a.75.75 0 0 1 0-1.5h11.223c.019-.431.025-.925.026-1.5H7.898c-.978 0-1.32.006-1.582.077a2.25 2.25 0 0 0-1.54 1.422m14.473-3H7.782c-.818 0-1.376 0-1.855.128a3.748 3.748 0 0 0-1.177.548V8c0-1.435.002-2.437.103-3.192c.099-.734.28-1.122.556-1.399c.277-.277.666-.457 1.4-.556c.755-.101 1.756-.103 3.191-.103h4c1.436 0 2.437.002 3.192.103c.734.099 1.122.28 1.4.556c.276.277.456.665.555 1.4c.102.754.103 1.756.103 3.191zM7.25 7A.75.75 0 0 1 8 6.25h8a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 7m0 3.5A.75.75 0 0 1 8 9.75h5a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
    </svg>
  )
}

function FireIcon() {
  return (
    <svg
      // TODO: 아이콘 패키지 이동 (불 아이콘)
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.48 2.76c.752-.451 1.728-.473 2.562.13c2.66 1.924 5.708 5.355 5.708 10.221c0 3.807-1.635 6.254-3.718 7.724c-1.279.903-2.709 1.426-3.999 1.69a4.128 4.128 0 0 1-1.3.225a4.21 4.21 0 0 1-.327-.013a9.018 9.018 0 0 1-.473.013c-1.46 0-3.62-.484-5.429-1.944c-1.841-1.486-3.254-3.929-3.254-7.695c0-3.077 1.625-5.146 3.155-6.313a1.813 1.813 0 0 1 2.004-.164c.584.319.993.934 1.067 1.656l.086.837c.033.322.198.59.37.72a.37.37 0 0 0 .19.083c.036.003.094-.002.179-.057c.653-.425 1.149-1.188 1.482-2.086c.33-.89.467-1.82.467-2.454V5.01c0-.973.494-1.807 1.23-2.25m.151 18.317a9.496 9.496 0 0 1-1.204.157c-.484-.05-1.093-.214-1.603-.564c-.585-.4-1.074-1.064-1.074-2.226c0-1.402.868-2.467 1.79-3.149a.16.16 0 0 1 .004.038v.011c0 .228 0 .573.043.931c.043.357.134.795.36 1.18c.158.269.4.496.729.593c.323.095.63.035.87-.078c.457-.215.783-.665.92-1.14c.412.336.784.86.784 1.615c0 1.203-.447 1.87-.938 2.254c-.214.168-.45.291-.68.378m2.887-1.055a8.33 8.33 0 0 0 .65-.412c1.695-1.197 3.082-3.194 3.082-6.499c0-4.187-2.622-7.223-5.087-9.006c-.325-.234-.65-.215-.91-.059c-.276.166-.503.507-.503.964v.323c0 .809-.167 1.916-.56 2.976c-.391 1.052-1.04 2.151-2.072 2.822c-.734.477-1.526.34-2.091-.088c-.534-.403-.886-1.064-.957-1.763l-.086-.838c-.026-.252-.162-.42-.294-.491c-.112-.061-.234-.068-.375.04c-1.267.967-2.565 2.634-2.565 5.12c0 3.345 1.232 5.346 2.696 6.528c.397.32.817.584 1.241.8c-.273-.55-.437-1.21-.437-1.994c0-2.104 1.32-3.573 2.448-4.393a1.428 1.428 0 0 1 1.6-.076c.454.274.746.783.746 1.357c0 .235 0 .5.032.764c.005.043.011.084.018.124c.16-.369.454-.654.803-.806c.418-.18.95-.177 1.394.157c.7.526 1.459 1.47 1.459 2.873c0 .593-.084 1.118-.232 1.578"
        clipRule="evenodd"
      />
    </svg>
  )
}

type RankingTabMenu = 'article' | 'streak'

const rankingTabBtns: Array<[RankingTabMenu, string, React.FC]> = [
  ['article', '아티클', BookIcon],
  ['streak', '스트릭', FireIcon],
]

export default function UserRank() {
  const [activeRanking, setActiveRanking] = useState<RankingTabMenu>('article')

  return (
    <Container>
      <div className="min-h-[540px] w-full p-5">
        <div className="mb-4 flex w-full items-center justify-between">
          <Title
            icon={<TrophyOutline className="size-5" />}
            text={`${new Date().getMonth() + 1}월 랭킹`}
          />
        </div>
        <div className="relative mb-5 flex border-b border-gray-100 pb-2 dark:border-gray-700">
          {rankingTabBtns.map(([rankType, label, Icon]) => (
            <Button
              key={rankType}
              type="button"
              title={`${label} 보기`}
              className={`relative flex grow items-center justify-center gap-2 rounded-lg px-3 py-2 text-lg transition-colors hover:bg-gray-50 xs:text-xl dark:hover:bg-gray-700 ${
                activeRanking === rankType
                  ? 'text-gray-700 dark:text-gray-50'
                  : 'text-gray-500 dark:text-gray-400'
              }`}
              onClick={() => setActiveRanking(rankType)}>
              <Icon />
              <span className="whitespace-nowrap text-base">{label}</span>
              {activeRanking === rankType && (
                <span className="absolute inset-x-0 -bottom-2 h-px bg-gray-700 dark:bg-gray-50" />
              )}
            </Button>
          ))}
        </div>
        <ErrorBoundary FallbackComponent={CustomErrorGuideTxt}>
          <Suspense
            fallback={
              <div className="my-auto flex items-center justify-center pb-32 pt-28">
                <LoadingSpinner />
              </div>
            }>
            <UserRankContent activeRanking={activeRanking} />
          </Suspense>
        </ErrorBoundary>
      </div>
    </Container>
  )
}
