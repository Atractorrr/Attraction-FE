import React, { SVGProps } from 'react'
export default function SvgX(props: SVGProps<SVGSVGElement>) {
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
      <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.75.75 0 1 1 1.06 1.06L9.06 8l3.22 3.22a.748.748 0 0 1-.722 1.268.75.75 0 0 1-.338-.208L8 9.06l-3.22 3.22a.75.75 0 0 1-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06" />
    </svg>
  )
}
