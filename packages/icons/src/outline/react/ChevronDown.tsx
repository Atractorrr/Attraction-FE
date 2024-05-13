import React, { SVGProps } from 'react'
const SvgChevronDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    aria-hidden="true"
    data-slot="icon"
    viewBox="0 0 16 16"
    width="1em"
    height="1em"
    {...props}>
    <path
      fill="#6F7A86"
      fillRule="evenodd"
      d="M2.954 5.675a.5.5 0 0 1 .705-.054L8 9.34l4.342-3.72a.5.5 0 0 1 .65.758l-4.666 4a.5.5 0 0 1-.651 0l-4.667-4a.5.5 0 0 1-.054-.704"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgChevronDown
