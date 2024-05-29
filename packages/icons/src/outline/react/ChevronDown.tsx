import React, { SVGProps } from 'react'
export default function SvgChevronDown(props: SVGProps<SVGSVGElement>) {
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
      <path
        fillRule="evenodd"
        d="M2.954 5.675a.5.5 0 0 1 .705-.054L8 9.34l4.342-3.72a.5.5 0 0 1 .65.758l-4.666 4a.5.5 0 0 1-.651 0l-4.667-4a.5.5 0 0 1-.054-.704"
        clipRule="evenodd"
      />
    </svg>
  )
}
