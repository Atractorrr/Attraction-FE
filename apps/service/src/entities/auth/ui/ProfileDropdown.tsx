'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@attraction/design-system/dist'
import {
  CogOutline,
  MemberOutline,
  ArrowLeftStartOnRectangleOutline,
} from '@attraction/icons'
import { ThumbnailImage } from '@/shared/ui'
import LogoutConfirm from './LogoutConfirm'
import { useAuth } from '../model'

function ServerIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width="1em"
      height="1em"
      viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.948 1.25h12.104c.899 0 1.648 0 2.242.08c.628.084 1.195.27 1.65.725c.456.456.642 1.023.726 1.65c.08.595.08 1.345.08 2.243v.104c0 .898 0 1.648-.08 2.242c-.084.628-.27 1.195-.726 1.65c-.455.456-1.022.642-1.65.726c-.594.08-1.343.08-2.242.08H5.948c-.898 0-1.648 0-2.242-.08c-.628-.084-1.195-.27-1.65-.725c-.456-.456-.642-1.023-.726-1.65c-.08-.595-.08-1.345-.08-2.243v-.104c0-.898 0-1.648.08-2.242c.084-.628.27-1.195.725-1.65c.456-.456 1.023-.642 1.65-.726c.595-.08 1.345-.08 2.243-.08M3.905 2.817c-.461.062-.659.169-.789.3c-.13.13-.237.327-.3.788C2.753 4.388 2.75 5.036 2.75 6c0 .964.002 1.612.067 2.095c.062.461.169.659.3.789c.13.13.327.237.788.3c.483.064 1.131.066 2.095.066h12c.964 0 1.612-.002 2.095-.067c.461-.062.659-.169.789-.3c.13-.13.237-.327.3-.788c.064-.483.066-1.131.066-2.095c0-.964-.002-1.612-.067-2.095c-.062-.461-.169-.659-.3-.789c-.13-.13-.327-.237-.788-.3c-.483-.064-1.131-.066-2.095-.066H6c-.964 0-1.612.002-2.095.067M6 4.25a.75.75 0 0 1 .75.75v2a.75.75 0 1 1-1.5 0V5A.75.75 0 0 1 6 4.25m3 0a.75.75 0 0 1 .75.75v2a.75.75 0 1 1-1.5 0V5A.75.75 0 0 1 9 4.25M12.75 6a.75.75 0 0 1 .75-.75H18a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75m-6.802 6.25h12.104c.899 0 1.648 0 2.242.08c.628.084 1.195.27 1.65.726c.456.455.642 1.022.726 1.65c.08.594.08 1.343.08 2.242v.104c0 .899 0 1.648-.08 2.242c-.084.628-.27 1.195-.726 1.65c-.455.456-1.022.642-1.65.726c-.594.08-1.343.08-2.242.08H5.948c-.898 0-1.648 0-2.242-.08c-.628-.084-1.195-.27-1.65-.726c-.456-.455-.642-1.022-.726-1.65c-.08-.594-.08-1.343-.08-2.242v-.104c0-.899 0-1.648.08-2.242c.084-.628.27-1.195.725-1.65c.456-.456 1.023-.642 1.65-.726c.595-.08 1.345-.08 2.243-.08m-2.043 1.566c-.461.063-.659.17-.789.3c-.13.13-.237.328-.3.79c-.064.482-.066 1.13-.066 2.094s.002 1.612.067 2.095c.062.461.169.659.3.789c.13.13.327.237.788.3c.483.064 1.131.066 2.095.066h12c.964 0 1.612-.002 2.095-.067c.461-.062.659-.169.789-.3c.13-.13.237-.327.3-.788c.064-.483.066-1.131.066-2.095c0-.964-.002-1.612-.067-2.095c-.062-.461-.169-.659-.3-.789c-.13-.13-.327-.237-.788-.3c-.483-.064-1.131-.066-2.095-.066H6c-.964 0-1.612.002-2.095.066M6 15.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75m3 0a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75M12.75 17a.75.75 0 0 1 .75-.75H18a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
    </svg>
  )
}

function NewTabIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width="1em"
      height="1em"
      viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M12 1.25h-.057c-2.309 0-4.118 0-5.53.19c-1.444.194-2.584.6-3.479 1.494c-.895.895-1.3 2.035-1.494 3.48c-.19 1.411-.19 3.22-.19 5.529v.114c0 2.309 0 4.118.19 5.53c.194 1.444.6 2.584 1.494 3.479c.895.895 2.035 1.3 3.48 1.494c1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19c1.444-.194 2.584-.6 3.479-1.494c.895-.895 1.3-2.035 1.494-3.48c.19-1.411.19-3.22.19-5.529V12a.75.75 0 0 0-1.5 0c0 2.378-.002 4.086-.176 5.386c-.172 1.279-.5 2.05-1.069 2.62c-.57.569-1.34.896-2.619 1.068c-1.3.174-3.008.176-5.386.176s-4.086-.002-5.386-.176c-1.279-.172-2.05-.5-2.62-1.069c-.569-.57-.896-1.34-1.068-2.619c-.174-1.3-.176-3.008-.176-5.386s.002-4.086.176-5.386c.172-1.279.5-2.05 1.069-2.62c.57-.569 1.34-.896 2.619-1.068c1.3-.174 3.008-.176 5.386-.176a.75.75 0 0 0 0-1.5"
      />
      <path
        fill="currentColor"
        d="M12.47 10.47a.75.75 0 1 0 1.06 1.06l7.72-7.72v3.534a.75.75 0 0 0 1.5 0V2a.75.75 0 0 0-.75-.75h-5.344a.75.75 0 0 0 0 1.5h3.533z"
      />
    </svg>
  )
}

export default function ProfileDropdown() {
  const { userProfileImgURL, userNickname, userRole } = useAuth()
  const [isDropdownOpen, setDropdownOpen] = useState(false)
  const [isConfirmOpen, setConfirmOpen] = useState(false)

  return (
    <>
      <DropdownMenu open={isDropdownOpen} onOpenChange={setDropdownOpen}>
        <DropdownMenuTrigger asChild>
          <button
            type="button"
            className="flex size-12 items-center justify-center overflow-hidden rounded-lg border border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-800"
            title={isDropdownOpen ? '메뉴 닫기' : '메뉴 열기'}>
            {userProfileImgURL ? (
              <ThumbnailImage
                src={userProfileImgURL}
                alt={`유저 프로필 이미지: ${userNickname}`}
                type="profile"
              />
            ) : (
              <MemberOutline className="text-xl text-gray-500 dark:text-gray-400" />
            )}
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-48">
          {userRole === 'ADMIN' && (
            <>
              <DropdownMenuItem asChild>
                <Link
                  href="/admin/swagger"
                  className="group relative !pr-8"
                  target="_blank"
                  title="새창이동: Swagger">
                  <ServerIcon className="text-lg" />
                  <span className="ml-2">Swagger</span>
                  <NewTabIcon className="absolute inset-y-0 right-3 my-auto size-4 text-gray-500 opacity-0 transition-opacity group-hover:opacity-100 dark:text-gray-400" />
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
            </>
          )}
          <DropdownMenuItem asChild>
            <Link href="/mypage" title="마이페이지 이동">
              <MemberOutline className="text-lg" />
              <span className="ml-2">마이페이지</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/setting" title="개인설정 페이지 이동">
              <CogOutline className="text-lg" />
              <span className="ml-2">개인설정</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <button
              type="button"
              className="flex w-full items-center justify-start rounded px-3 py-2 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700"
              title="로그아웃"
              onClick={() => {
                setDropdownOpen(false)
                setConfirmOpen(true)
              }}>
              <ArrowLeftStartOnRectangleOutline className="text-lg text-red-400 dark:text-red-300" />
              <span className="ml-2 text-red-400 dark:text-red-300">
                로그아웃
              </span>
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <LogoutConfirm open={isConfirmOpen} onOpenChange={setConfirmOpen} />
    </>
  )
}
