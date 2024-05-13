import React, { SVGProps } from 'react'
const SvgMedal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 120 120"
    {...props}>
    <g clipPath="url(#medal_svg__a)">
      <path
        fill="#FCC21B"
        d="M60 116.25c15.533 0 28.125-12.592 28.125-28.125S75.533 60 60 60 31.875 72.592 31.875 88.125 44.467 116.25 60 116.25"
      />
      <path
        fill="#FCC21B"
        d="M65.625 56.25v10.313h-11.25V56.25zm0-5.625h-11.25a5.63 5.63 0 0 0-5.625 5.625v10.313a5.63 5.63 0 0 0 5.625 5.624h11.25a5.63 5.63 0 0 0 5.625-5.624V56.25a5.63 5.63 0 0 0-5.625-5.625"
      />
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={0.469}
        d="M43.406 75.272a23 23 0 0 1 3.581-4.022"
      />
      <path
        fill="#006CA2"
        d="M82.5 37.96c0 1.809-1.097 4.284-2.447 5.493L66.197 55.922c-1.35 1.21-3.928 2.203-5.738 2.203h-.918c-1.81 0-4.397-.994-5.738-2.203L39.947 43.453c-1.35-1.21-2.447-3.684-2.447-5.494V3.75h45z"
      />
      <path fill="#40C0E7" d="m45 48 7.5 6.75v-51H45z" />
      <path
        fill="#ED6C30"
        d="M82.5 37.96c0 1.809-1.097 4.284-2.447 5.493L66.197 55.922c-1.35 1.21-3.928 2.203-5.738 2.203h-.918c-1.81 0-4.397-.994-5.738-2.203L39.947 43.453c-1.35-1.21-2.447-3.684-2.447-5.494V3.75h45z"
      />
      <path
        fill="#F79329"
        fillRule="evenodd"
        d="M60 109.687c-.6 0-1.116-.421-1.237-1.012l-3.92-19.613 3.92-19.612a1.264 1.264 0 0 1 2.474 0l3.92 19.612-3.92 19.613A1.26 1.26 0 0 1 60 109.687"
        clipRule="evenodd"
      />
      <path
        fill="#F79329"
        fillRule="evenodd"
        d="M39.375 89.063c0 .6.422 1.115 1.013 1.237L60 94.219 79.612 90.3a1.264 1.264 0 0 0 0-2.475L60 83.906l-19.612 3.919a1.264 1.264 0 0 0-1.013 1.237"
        clipRule="evenodd"
      />
      <mask
        id="medal_svg__b"
        width={46}
        height={56}
        x={37}
        y={3}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: 'luminance',
        }}>
        <path
          fill="#fff"
          d="M82.5 37.96c0 1.809-1.097 4.284-2.447 5.493L66.197 55.922c-1.35 1.21-3.928 2.203-5.738 2.203h-.918c-1.81 0-4.397-.994-5.738-2.203L39.947 43.453c-1.35-1.21-2.447-3.684-2.447-5.494V3.75h45z"
        />
      </mask>
      <g mask="url(#medal_svg__b)">
        <path
          fill="#006CA2"
          fillRule="evenodd"
          d="M32.813-1.875h13.124v57.188H32.814zm41.25 0h13.124v57.188H74.064z"
          clipRule="evenodd"
        />
      </g>
      <mask
        id="medal_svg__c"
        width={46}
        height={56}
        x={37}
        y={3}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: 'luminance',
        }}>
        <path
          fill="#fff"
          d="M82.5 37.96c0 1.809-1.097 4.284-2.447 5.493L66.197 55.922c-1.35 1.21-3.928 2.203-5.738 2.203h-.918c-1.81 0-4.397-.994-5.738-2.203L39.947 43.453c-1.35-1.21-2.447-3.684-2.447-5.494V3.75h45z"
        />
      </mask>
      <g mask="url(#medal_svg__c)">
        <path
          fill="#fff"
          fillRule="evenodd"
          d="m45.937 3.75-.01 45.619 4.163 3.75V3.75zm28.116 0 .01 46.022-4.163 3.75V3.75z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="medal_svg__a">
        <path fill="#fff" d="M0 0h120v120H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgMedal