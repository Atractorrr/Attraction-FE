import React, { SVGProps } from 'react'
const SvgChevronRight = (props: SVGProps<SVGSVGElement>) => (
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
      fill="#323539"
      fillRule="evenodd"
      d="M7.093 3.692a.625.625 0 0 1 .881.068l5 5.833a.625.625 0 0 1 0 .814l-5 5.833a.625.625 0 0 1-.948-.813L11.676 10l-4.65-5.427a.625.625 0 0 1 .066-.88"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgChevronRight
