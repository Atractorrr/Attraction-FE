import React, { SVGProps } from 'react'
export default function SvgShare(props: SVGProps<SVGSVGElement>) {
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
        d="M13.75 1.875a2.708 2.708 0 0 0-2.666 3.187l-3.942 2.76-.057.044a2.708 2.708 0 1 0 0 4.267l.057.045 3.942 2.76a2.708 2.708 0 1 0 .514-1.166l-3.733-2.613c.167-.352.26-.744.26-1.159s-.093-.808-.26-1.16L11.6 6.229a2.709 2.709 0 1 0 2.151-4.353m-1.458 2.708a1.458 1.458 0 1 1 2.916 0 1.458 1.458 0 0 1-2.916 0M5.417 8.542a1.458 1.458 0 1 0 0 2.916 1.458 1.458 0 0 0 0-2.916m8.333 5.416a1.458 1.458 0 1 0 0 2.917 1.458 1.458 0 0 0 0-2.917"
        clipRule="evenodd"
      />
    </svg>
  )
}
