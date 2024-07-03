'use client'

import Link from 'next/link'
import { GOOGLE_OAUTH_URL } from '../constant'

interface GoogleLogoSVGProps {
  className?: string
}

function GoogleLogoSVG({ className }: GoogleLogoSVGProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      className={className}
      fill="none"
      viewBox="0 0 512 512">
      <g clipPath="url(#clip0_1146_5880)">
        <path
          fill="#4285F4"
          d="M506.841 261.879c0-17.402-1.411-34.898-4.421-52.018H260.953v98.581H399.23c-5.738 31.794-24.175 59.92-51.172 77.792v63.965h82.496c48.444-44.587 76.287-110.433 76.287-188.32z"
        />
        <path
          fill="#34A853"
          d="M260.954 512c69.044 0 127.271-22.669 169.694-61.801l-82.496-63.965c-22.952 15.615-52.582 24.458-87.104 24.458-66.787 0-123.415-45.058-143.733-105.636h-85.13v65.94C75.644 457.442 164.16 512 260.954 512z"
        />
        <path
          fill="#FBBC04"
          d="M117.221 305.055a153.33 153.33 0 010-98.016v-65.94H32.185c-36.31 72.336-36.31 157.56 0 229.896l85.036-65.94z"
        />
        <path
          fill="#EA4335"
          d="M260.954 101.309c36.497-.564 71.772 13.169 98.204 38.379l73.089-73.09C385.967 23.14 324.542-.751 260.954 0 164.16 0 75.644 54.558 32.185 141.1l85.036 65.94c20.224-60.672 76.946-105.73 143.733-105.73z"
        />
      </g>
      <defs>
        <clipPath id="clip0_1146_5880">
          <path fill="#fff" d="M0 0H501.841V512H0z" transform="translate(5)" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default function GoogleOAuthButton() {
  // const { isIOSPWA } = useCheckDevice()

  return (
    <Link
      href={GOOGLE_OAUTH_URL}
      className="flex h-14 items-center gap-2 rounded-xl border border-gray-100 bg-white px-4 py-3 dark:border-gray-700 dark:bg-gray-700">
      <GoogleLogoSVG className="size-7" />
      <span className="mx-auto block whitespace-nowrap text-center xs:text-lg">
        구글 계정으로 로그인
      </span>
    </Link>
  )
}
