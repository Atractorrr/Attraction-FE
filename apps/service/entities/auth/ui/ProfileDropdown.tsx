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

export default function ProfileDropdown() {
  const { userProfileImgURL, userNickname } = useAuth()
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
