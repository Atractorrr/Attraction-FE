import React, { SVGProps } from 'react'
export default function SvgChevronLeft(props: SVGProps<SVGSVGElement>) {
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
        d="M12.906 3.692a.624.624 0 0 1 .068.881L8.323 10l4.65 5.427a.625.625 0 1 1-.948.813l-5-5.833a.625.625 0 0 1 0-.814l5-5.833a.625.625 0 0 1 .881-.067"
        clipRule="evenodd"
      />
    </svg>
  )
}
