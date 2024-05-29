import React, { SVGProps } from 'react'
export default function SvgComputer(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      aria-hidden="true"
      data-slot="icon"
      viewBox="0 0 120 120"
      width="1em"
      height="1em"
      {...props}>
      <path
        fill="#B0BEC5"
        d="M40.313 79.2H29.288c-2.147 0-3.9 1.631-3.9 3.637v2.466h47.015v-2.466c0-1.996-1.762-3.637-3.91-3.637H57.189v-6.272l34.65.01c2.934 0 5.343-2.41 5.343-5.344l.01-57.057c0-2.943-2.41-5.353-5.344-5.353L5.963 5.166C3.019 5.166.61 7.575.61 10.509L.59 67.575c0 2.944 2.41 5.353 5.354 5.353l34.556.01zm44.953 11.86-71.85-.02c-1.003 0-1.988.797-2.185 1.782l-4.63 20.587c-.198.975.946 1.378 1.95 1.378l81.552.019c.994 0 1.97-.403 1.772-1.378l-4.434-20.597c-.206-.966-1.181-1.772-2.175-1.772"
      />
      <path
        fill="#fff"
        d="m17.541 96.263 64.116.009a1.82 1.82 0 0 1 1.818 1.819 1.82 1.82 0 0 1-1.818 1.818L17.54 99.9a1.826 1.826 0 0 1-1.819-1.818 1.82 1.82 0 0 1 1.819-1.819m65.86 12.412-67.604-.019a1.82 1.82 0 0 1-1.819-1.819 1.82 1.82 0 0 1 1.82-1.818l67.602.018c.994 0 1.81.816 1.81 1.819a1.807 1.807 0 0 1-1.81 1.819"
      />
      <path
        fill="#B0BEC5"
        d="M117.197 107.147c-4.144 3.328-9.909 1.5-13.65-4.078-3.731-5.588-6.413-8.466-3.028-10.735 3.384-2.268 8.681-1.912 14.447 2.428 4.425 3.329 5.418 9.835 2.231 12.385"
      />
      <path
        fill="#78909C"
        d="M40.312 73.125h16.875v2.813H40.312zM6.6 113.428h85.284v1.875H6.6zm110.615-6.281s-4.125 3.834-9.684.009c-5.175-3.562-8.081-10.519-8.335-11.184-.028.019 2.804 1.247 5.194 3.366 1.425 1.256 4.06 4.753 6.938 6.553 2.409 1.509 5.147 1.5 5.887 1.256M14.297 58.697a3.855 3.855 0 0 1-3.854-3.863V17.897c0-2.184 1.772-4.144 3.854-4.144h68.887c2.072 0 3.872 1.96 3.872 4.144v36.937c0 2.185-1.8 3.863-3.872 3.863z"
      />
      <mask
        id="computer_svg__a"
        width={78}
        height={46}
        x={10}
        y={13}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: 'luminance',
        }}>
        <path
          fill="#fff"
          d="M14.297 58.697a3.855 3.855 0 0 1-3.854-3.863V17.897c0-2.184 1.772-4.144 3.854-4.144h68.887c2.072 0 3.872 1.96 3.872 4.144v36.937c0 2.185-1.8 3.863-3.872 3.863z"
        />
      </mask>
      <g mask="url(#computer_svg__a)">
        <path
          fill="#ECEFF1"
          d="M47.728 11.738 32.316 63.384l-23.879-.262V12.253z"
        />
      </g>
      <path
        fill="#78909C"
        d="M84.375 17.813v36.562h-71.25V17.813zm.103-4.688H12.984c-2.165 0-4.546 1.838-4.546 4.06V54.89c0 2.23 2.38 4.172 4.546 4.172H84.47c2.156 0 4.594-1.941 4.594-4.172V17.184c0-2.23-2.222-4.059-4.37-4.059z"
      />
    </svg>
  )
}
