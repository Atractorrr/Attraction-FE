import React, { SVGProps } from 'react'
export default function SvgBars(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
      data-slot="icon"
      viewBox="0 0 48 48"
      {...props}>
      <path
        fillRule="evenodd"
        d="M41.5 14a1.5 1.5 0 0 1-1.5 1.5H8a1.5 1.5 0 1 1 0-3h32a1.5 1.5 0 0 1 1.5 1.5m0 10a1.5 1.5 0 0 1-1.5 1.5H8a1.5 1.5 0 1 1 0-3h32a1.5 1.5 0 0 1 1.5 1.5m0 10a1.5 1.5 0 0 1-1.5 1.5H8a1.5 1.5 0 1 1 0-3h32a1.5 1.5 0 0 1 1.5 1.5"
        clipRule="evenodd"
      />
    </svg>
  )
}
