import React, { SVGProps } from 'react'
export default function SvgTaxi(props: SVGProps<SVGSVGElement>) {
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
        fill="#78A3AD"
        d="M63.28 39.075c-.477 0-.871-.61-.871-1.35v-5.981c0-.74-.6-1.34-1.34-1.34h-4.21c-.74 0-1.35.609-1.35 1.34v5.981c0 .74-.394 1.35-.872 1.35s-.881.61-.881 1.34v2.382c0 .74.394 1.34.881 1.34h8.653c.478 0 .872-.6.872-1.34v-2.381c0-.731-.394-1.34-.881-1.34"
      />
      <path
        fill="#FCC21B"
        d="M113.971 74.24c-4.387-4.387-11.25-5.755-11.25-5.755s-3.59-9.329-6.618-13.388C87.87 44.035 77.568 41.56 60.87 41.56c-11.54 0-22.996.44-32.38 12.262-3.591 4.528-9.479 14.663-9.479 14.663s-9.384 2.1-14.128 7.387c-3.638 4.05-6.366 17.719-1.566 22.51C7.753 102.816 12.59 105 15.806 105h89.222c4.847 0 8.925-2.437 11.475-6.525 4.368-7.012 1.847-19.847-2.532-24.234"
      />
      <mask
        id="taxi_svg__a"
        width={119}
        height={64}
        x={0}
        y={41}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: 'luminance',
        }}>
        <path
          fill="#fff"
          d="M113.971 74.24c-4.387-4.387-11.25-5.755-11.25-5.755s-3.59-9.329-6.618-13.388C87.87 44.035 77.568 41.56 60.87 41.56c-11.54 0-22.996.44-32.38 12.262-3.591 4.528-9.479 14.663-9.479 14.663s-9.384 2.1-14.128 7.387c-3.638 4.05-6.366 17.719-1.566 22.51C7.753 102.816 12.59 105 15.806 105h89.222c4.847 0 8.925-2.437 11.475-6.525 4.368-7.012 1.847-19.847-2.532-24.234"
        />
      </mask>
      <g mask="url(#taxi_svg__a)">
        <path
          fill="#F79329"
          d="M-3.872 79.753h39.544v13.95H-3.872zm86.09 0h39.741v13.95h-39.74z"
        />
      </g>
      <path
        fill="#2F2F2F"
        d="M38.175 102.853c0 5.85-4.743 10.603-10.593 10.603a10.6 10.6 0 0 1-10.603-10.603c0-5.85 4.743-10.584 10.603-10.584 5.85 0 10.593 4.734 10.593 10.584m64.013 0c0 5.85-4.753 10.603-10.594 10.603a10.6 10.6 0 0 1-10.603-10.603c0-5.85 4.744-10.584 10.603-10.584 5.84 0 10.594 4.734 10.594 10.584M56.25 81.056h-2.503a.23.23 0 0 0-.225.15l-4.04 10.744a.22.22 0 0 0 .028.216c.047.065.112.112.197.112h2.653a.23.23 0 0 0 .225-.169l.618-1.846h3.61l.61 1.846a.24.24 0 0 0 .234.17H60.3c.075 0 .15-.048.197-.113.047-.056.056-.14.038-.216l-4.04-10.744c-.057-.093-.142-.15-.245-.15m-2.306 6.938 1.05-3.16 1.05 3.16zm23.063-6.938h-2.654a.24.24 0 0 0-.234.244v10.744c0 .131.113.244.234.244h2.654a.25.25 0 0 0 .243-.244V81.3a.25.25 0 0 0-.243-.244M69.16 86.71l3.544-5.279c.056-.075.056-.168.018-.253a.24.24 0 0 0-.215-.122h-2.991a.27.27 0 0 0-.197.103l-1.987 2.888-1.997-2.888a.22.22 0 0 0-.197-.103h-2.981a.23.23 0 0 0-.207.122.27.27 0 0 0 .01.253l3.553 5.279-3.572 5.203c-.056.065-.056.168-.019.243.038.085.113.132.216.132h3.14a.24.24 0 0 0 .197-.113l1.857-2.756 1.847 2.756a.26.26 0 0 0 .196.113h3.141a.237.237 0 0 0 .197-.375zm-18.394-3.582v-1.94a.25.25 0 0 0-.244-.244H40.238c-.122 0-.234.112-.234.244v1.94c0 .132.112.244.234.244h3.722v8.672c0 .131.112.244.234.244h2.353a.25.25 0 0 0 .244-.244v-8.672h3.722c.14-.01.253-.112.253-.244"
      />
      <path
        fill="#40C0E7"
        d="M54.938 66.89c0 2.672-1.716 3.572-3.825 3.572H36.16c-5.175 0-2.391-7.818 2.662-13.359 5.053-5.54 12.834-5.981 13.903-5.71 2.063.507 2.213 2.42 2.213 4.51zm6.46 0c0 2.672 2.493 3.572 5.521 3.572h19.706c7.481 0 3.14-10.893-4.462-16.022-5.4-3.637-16.022-3.318-17.569-3.056-2.99.507-3.197 2.419-3.197 4.51z"
      />
    </svg>
  )
}
