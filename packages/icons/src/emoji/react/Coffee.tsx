import React, { SVGProps } from 'react'
export default function SvgCoffee(props: SVGProps<SVGSVGElement>) {
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
      <g clipPath="url(#coffee_svg__a)">
        <path
          fill="#E0E0E0"
          d="M49.256 39.872c-22.331 0-44.662 8.456-44.662 25.35 0 18.825 8.831 52.153 44.662 52.153S93.92 84.047 93.92 65.222c0-16.894-22.331-25.35-44.663-25.35"
        />
        <path
          fill="#E0E0E0"
          d="M31.753 46.435c-4.106-1.707-7.584-6.216-7.875-10.05-.637-8.26 4.013-11.213 4.013-18.413 0-6.038-1.022-9.206-3.028-10.856-.581-.478-.675-.638-.619-.769.084-.169.084-.272.975-.056 3.647.89 9.572 4.303 9.75 11.494.188 7.65-4.003 9.421-4.631 17.728-.235 3.093-.244 7.453 1.79 10.284.254.347.291.488.282.581-.02.132-.244.206-.657.056M52.332 42.6c-4.107-1.706-7.585-6.215-7.876-10.05-.637-8.26 4.013-11.212 4.013-18.412 0-6.038-1.022-9.207-3.028-10.857-.581-.468-.675-.628-.619-.76.084-.168.084-.27.975-.055 3.647.89 9.572 4.303 9.75 11.494.188 7.65-4.003 9.421-4.631 17.728-.234 3.093-.244 7.453 1.79 10.284.254.347.291.487.282.581-.019.122-.244.207-.657.047m19.134 4.613c-4.106-1.707-7.584-6.216-7.875-10.05-.638-8.26 4.012-11.213 4.012-18.413 0-6.037-1.021-9.206-3.028-10.856-.581-.478-.675-.638-.619-.769.085-.169.085-.272.975-.056 3.647.89 9.572 4.303 9.75 11.494.188 7.65-4.003 9.422-4.63 17.728-.235 3.094-.245 7.453 1.79 10.284.253.347.29.488.281.581-.019.132-.244.216-.656.057"
        />
        <path
          fill="#90A4AE"
          d="M49.256 85.228c20.799 0 37.66-8.856 37.66-19.781s-16.861-19.781-37.66-19.781-37.66 8.856-37.66 19.78c0 10.926 16.861 19.782 37.66 19.782"
        />
        <mask
          id="coffee_svg__b"
          width={76}
          height={41}
          x={11}
          y={45}
          maskUnits="userSpaceOnUse"
          style={{
            maskType: 'luminance',
          }}>
          <path
            fill="#fff"
            d="M49.256 85.228c20.799 0 37.66-8.856 37.66-19.781s-16.861-19.781-37.66-19.781-37.66 8.856-37.66 19.78c0 10.926 16.861 19.782 37.66 19.782"
          />
        </mask>
        <g mask="url(#coffee_svg__b)">
          <path
            fill="#855C52"
            d="M49.256 94.997c20.799 0 37.66-8.856 37.66-19.781s-16.861-19.782-37.66-19.782-37.66 8.857-37.66 19.782 16.861 19.78 37.66 19.78"
          />
        </g>
        <path
          fill="#E0E0E0"
          d="M76.275 102.844c-.619 0-.975-.01-1.003-.019a5.16 5.16 0 0 1-3.54-1.74 5.14 5.14 0 0 1-1.27-3.735 5.14 5.14 0 0 1 5.475-4.819c.244 0 24.666.235 28.528-12.993.919-3.141.825-5.494-.271-6.994-.966-1.322-3.844-3.553-12.235-3.74a5.156 5.156 0 0 1-5.044-5.27c.066-2.85 2.447-5.09 5.27-5.043 9.777.206 16.612 2.887 20.334 7.95 3.093 4.218 3.712 9.59 1.846 15.975-5.671 19.378-32.53 20.428-38.09 20.428"
        />
        <path
          fill="#BCAAA4"
          d="M42.478 66.066c1.162-.14 2.306-1.247 1.903-2.194-.328-.788-1.472-.975-2.437-1.013-3.844-.159-10.407 1.782-15.957 4.435-.76.356-2.081 1.312-2.278 2.072-.215.815.516 1.472 1.34 1.547.826.075 1.698-.263 2.523-.6 6.872-2.757 9.075-3.478 14.906-4.247"
        />
      </g>
      <defs>
        <clipPath id="coffee_svg__a">
          <path fill="#fff" d="M0 0h120v120H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
