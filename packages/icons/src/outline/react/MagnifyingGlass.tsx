import React, { SVGProps } from 'react'
const SvgMagnifyingGlass = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    aria-hidden="true"
    data-slot="icon"
    viewBox="0 0 20 20"
    width="1em"
    height="1em"
    {...props}>
    <path
      fill="#41474E"
      fillRule="evenodd"
      d="M9.584 2.292a7.292 7.292 0 1 0 0 14.583 7.292 7.292 0 0 0 0-14.583M1.042 9.583a8.543 8.543 0 1 1 15.007 5.582l2.726 2.727a.624.624 0 0 1-.68 1.028.6.6 0 0 1-.203-.145l-2.727-2.726A8.543 8.543 0 0 1 1.042 9.583"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgMagnifyingGlass
