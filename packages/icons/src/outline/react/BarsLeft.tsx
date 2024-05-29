import React, { SVGProps } from 'react'
export default function SvgBarsLeft(props: SVGProps<SVGSVGElement>) {
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
        d="M2.709 5.833a.625.625 0 0 1 .625-.625h13.333a.625.625 0 0 1 0 1.25H3.334a.625.625 0 0 1-.625-.625m0 4.167a.625.625 0 0 1 .625-.625h9.167a.625.625 0 0 1 0 1.25H3.334A.625.625 0 0 1 2.709 10m0 4.167a.625.625 0 0 1 .625-.625h4.167a.625.625 0 1 1 0 1.25H3.334a.625.625 0 0 1-.625-.625"
        clipRule="evenodd"
      />
    </svg>
  )
}
