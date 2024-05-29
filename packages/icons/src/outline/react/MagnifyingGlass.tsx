import React, { SVGProps } from 'react'
export default function SvgMagnifyingGlass(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
      data-slot="icon"
      viewBox="0 0 20 20"
      {...props}>
      <path
        fillRule="evenodd"
        d="M9.584 2.292a7.292 7.292 0 1 0 0 14.583 7.292 7.292 0 0 0 0-14.583M1.042 9.583a8.543 8.543 0 1 1 15.007 5.582l2.726 2.727a.624.624 0 0 1-.437 1.082.63.63 0 0 1-.446-.199l-2.727-2.726A8.543 8.543 0 0 1 1.042 9.583"
        clipRule="evenodd"
      />
    </svg>
  )
}
