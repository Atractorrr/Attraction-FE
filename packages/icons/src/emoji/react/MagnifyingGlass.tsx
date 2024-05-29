import React, { SVGProps } from 'react'
export default function SvgMagnifyingGlass(props: SVGProps<SVGSVGElement>) {
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
      <g clipPath="url(#magnifying-glass_svg__a)">
        <path
          fill="#78A3AD"
          d="M95.184 87.122 77.4 69.356c12.918-16.884 11.709-41.118-3.741-56.568-16.819-16.81-44.081-16.81-60.91 0-16.809 16.818-16.809 44.09 0 60.9 15.45 15.44 39.694 16.668 56.579 3.74l17.784 17.775z"
        />
        <path
          fill="#fff"
          d="M19.162 67.284C5.887 54 5.887 32.456 19.162 19.181c13.285-13.284 34.8-13.275 48.094 0 13.275 13.275 13.275 34.8 0 48.103-13.303 13.275-34.819 13.275-48.094 0"
        />
        <path
          fill="#F79329"
          d="m118.622 103.622-23.934-23.99c-6.094-6.095-20.794 9.159-14.972 14.971l23.934 23.991c2.475 2.465 7.838 1.115 11.953-3.028 4.135-4.125 5.485-9.478 3.019-11.944"
        />
        <mask
          id="magnifying-glass_svg__b"
          width={42}
          height={42}
          x={78}
          y={78}
          maskUnits="userSpaceOnUse"
          style={{
            maskType: 'luminance',
          }}>
          <path
            fill="#fff"
            d="m118.622 103.622-23.934-23.99c-6.094-6.095-20.794 9.159-14.972 14.971l23.934 23.991c2.475 2.465 7.838 1.115 11.953-3.028 4.135-4.125 5.485-9.478 3.019-11.944"
          />
        </mask>
        <g mask="url(#magnifying-glass_svg__b)">
          <path
            fill="#855C52"
            d="M104.278 117.909c.169-1.912 1.416-4.171 2.222-5.446 2.409-3.816 5.437-6.975 9.956-8.175 4.594-1.229 5.053 2.231 3.956 5.737-1.322 4.228-3.956 7.406-7.837 9.628-.91.525-2.119 1.266-3.169 1.425-2.569.366-5.4.038-5.128-3.169"
          />
        </g>
      </g>
      <defs>
        <clipPath id="magnifying-glass_svg__a">
          <path fill="#fff" d="M0 0h120v120H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
