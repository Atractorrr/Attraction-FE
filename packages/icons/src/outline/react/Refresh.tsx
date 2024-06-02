import React, { SVGProps } from 'react'
export default function SvgRefresh(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
      data-slot="icon"
      viewBox="0 0 48 48"
      {...props}>
      <path
        fillRule="evenodd"
        d="M5.86 22.4c.144-9.92 8.292-17.9 18.298-17.9a18.32 18.32 0 0 1 15.627 8.714 1.5 1.5 0 0 1-2.553 1.572A15.32 15.32 0 0 0 24.158 7.5c-8.37 0-15.15 6.656-15.296 14.896l.8-.794a1.5 1.5 0 0 1 2.113 2.13l-3.36 3.332a1.5 1.5 0 0 1-2.111 0l-3.36-3.332A1.5 1.5 0 1 1 5.056 21.6zm33.711-1.466a1.5 1.5 0 0 1 2.11 0l3.373 3.332a1.5 1.5 0 1 1-2.108 2.134l-.82-.81c-.14 9.93-8.322 17.91-18.36 17.91a18.4 18.4 0 0 1-15.684-8.712 1.5 1.5 0 1 1 2.553-1.576 15.4 15.4 0 0 0 13.13 7.288c8.413 0 15.22-6.666 15.36-14.906l-.816.806a1.5 1.5 0 1 1-2.11-2.134z"
        clipRule="evenodd"
      />
    </svg>
  )
}
