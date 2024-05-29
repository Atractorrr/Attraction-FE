import React, { SVGProps } from 'react'
export default function SvgCheck(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
      data-slot="icon"
      viewBox="0 0 16 16"
      {...props}>
      <path d="M14.02 3.813a.5.5 0 0 1 0 .707l-7.666 7.667a.497.497 0 0 1-.715-.008L1.972 8.345a.5.5 0 1 1 .723-.69l3.313 3.463 7.306-7.305a.5.5 0 0 1 .706 0" />
    </svg>
  )
}
