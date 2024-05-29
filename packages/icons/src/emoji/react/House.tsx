import React, { SVGProps } from 'react'
export default function SvgHouse(props: SVGProps<SVGSVGElement>) {
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
      <g clipPath="url(#house_svg__a)">
        <path fill="#855C52" d="M31.068 70.378h29.316V120H31.068z" />
        <path fill="#fff" d="M69.385 67.753H99.61v30.553H69.385z" />
        <path
          fill="#FCC21B"
          d="m106.668 53.325-42.9-39.047c-2.072-1.884-5.465-1.884-7.537 0L13.32 53.325c-2.071 1.894-3.768 5.728-3.768 8.531v53.053c0 2.803 2.297 5.1 5.09 5.1H34.34V85.012a3.886 3.886 0 0 1 3.872-3.88h15.525a3.895 3.895 0 0 1 3.881 3.88V120h47.728c2.804 0 5.1-2.288 5.1-5.1V61.847c0-2.794-1.696-6.638-3.778-8.522M82.059 95.38h-5.54c-2.588 0-4.716-2.119-4.716-4.716V85.93h10.256zm0-13.95H71.803v-6.347c0-2.587 2.128-4.715 4.715-4.715h5.541zm14.747 9.234c0 2.588-2.119 4.716-4.716 4.716h-5.54v-9.45h10.256zm0-9.234H86.559V70.378h5.54a4.725 4.725 0 0 1 4.716 4.716v6.337z"
        />
        <mask
          id="house_svg__b"
          width={102}
          height={109}
          x={9}
          y={12}
          maskUnits="userSpaceOnUse"
          style={{
            maskType: 'luminance',
          }}>
          <path
            fill="#fff"
            d="m106.668 53.325-42.9-39.047c-2.072-1.884-5.465-1.884-7.537 0L13.32 53.325c-2.071 1.894-3.768 5.728-3.768 8.531v53.053c0 2.803 2.297 5.1 5.09 5.1H34.34V85.012a3.886 3.886 0 0 1 3.872-3.88h15.525a3.895 3.895 0 0 1 3.881 3.88V120h47.728c2.804 0 5.1-2.288 5.1-5.1V61.847c0-2.794-1.696-6.638-3.778-8.522M82.059 95.38h-5.54c-2.588 0-4.716-2.119-4.716-4.716V85.93h10.256zm0-13.95H71.803v-6.347c0-2.587 2.128-4.715 4.715-4.715h5.541zm14.747 9.234c0 2.588-2.119 4.716-4.716 4.716h-5.54v-9.45h10.256zm0-9.234H86.559V70.378h5.54a4.725 4.725 0 0 1 4.716 4.716v6.337z"
          />
        </mask>
        <g mask="url(#house_svg__b)">
          <path
            fill="#ED6C30"
            d="m60.675 24.647 50.606 46.865 1.181.01.534-17.11-52.321-48.45-53.55 48.45-.338 15.994 3.281.028z"
          />
        </g>
        <path
          fill="#fff"
          d="M40.182 104.344a3.375 3.375 0 1 0 0-6.75 3.375 3.375 0 0 0 0 6.75"
        />
      </g>
      <defs>
        <clipPath id="house_svg__a">
          <path fill="#fff" d="M0 0h120v120H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
