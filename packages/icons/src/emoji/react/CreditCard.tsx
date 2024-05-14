import React, { SVGProps } from 'react'
const SvgCreditCard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 120 120"
    {...props}>
    <path
      fill="#FCC21B"
      d="M117.9 60.853c2.175 2.803 1.913 6.197-.637 7.528l-77.26 40.453c-3.393 1.763-7.856.31-9.88-3.234L1.368 55.378c-1.678-2.934-.375-6.375 2.84-7.66l74.523-29.69c2.493-.984 6.009.14 7.865 2.531z"
    />
    <mask
      id="credit-card_svg__a"
      width={120}
      height={93}
      x={0}
      y={17}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'luminance',
      }}>
      <path
        fill="#fff"
        d="M117.9 60.853c2.175 2.803 1.913 6.197-.637 7.528l-77.26 40.453c-3.393 1.763-7.856.31-9.88-3.234L1.368 55.378c-1.678-2.934-.375-6.375 2.84-7.66l74.523-29.69c2.493-.984 6.009.14 7.865 2.531z"
      />
    </mask>
    <g mask="url(#credit-card_svg__a)">
      <path
        fill="#2F2F2F"
        d="M100.181 33.581 7.903 74.447-.019 60.422l91.454-38.006z"
      />
    </g>
    <path
      fill="#fff"
      d="M111.806 60.581c1.069 1.406.919 3.094-.375 3.74l-10.397 5.307c-1.34.684-3.319.047-4.387-1.416l-6.103-8.371c-1.022-1.416-.77-3.085.562-3.722l10.341-4.922c1.275-.61 3.15 0 4.2 1.35z"
    />
  </svg>
)
export default SvgCreditCard
