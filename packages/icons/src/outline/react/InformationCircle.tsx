import React, { SVGProps } from 'react'
export default function SvgInformationCircle(props: SVGProps<SVGSVGElement>) {
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
      <path d="M24 35.5a1.5 1.5 0 0 0 1.5-1.5V22a1.5 1.5 0 1 0-3 0v12a1.5 1.5 0 0 0 1.5 1.5M24 14a2 2 0 1 1 0 4 2 2 0 0 1 0-4" />
      <path
        fillRule="evenodd"
        d="M2.5 24C2.5 12.126 12.126 2.5 24 2.5S45.5 12.126 45.5 24 35.874 45.5 24 45.5 2.5 35.874 2.5 24M24 5.5a18.5 18.5 0 1 0 0 37 18.5 18.5 0 0 0 0-37"
        clipRule="evenodd"
      />
    </svg>
  )
}
