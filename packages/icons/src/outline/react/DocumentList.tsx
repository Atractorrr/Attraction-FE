import React, { SVGProps } from 'react'
const SvgDocumentList = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    aria-hidden="true"
    data-slot="icon"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    {...props}>
    <path
      fill="#41474E"
      fillRule="evenodd"
      d="M8.25 18a.75.75 0 0 1 .75-.75h6a.75.75 0 1 1 0 1.5H9a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <path
      fill="#41474E"
      fillRule="evenodd"
      d="M8.7 1.25h6.6c.22 0 .388 0 .535.016A2.75 2.75 0 0 1 18.29 3.87a2.89 2.89 0 0 1 2.054 2.721c.601.18 1.12.465 1.544.923.652.705.854 1.572.862 2.586.007.975-.166 2.207-.382 3.736l-.44 3.114c-.168 1.196-.305 2.168-.518 2.929-.223.797-.552 1.452-1.16 1.956-.604.5-1.32.715-2.166.817-.819.098-1.849.098-3.13.098H9.045c-1.282 0-2.312 0-3.13-.098-.847-.102-1.563-.317-2.167-.817-.608-.504-.937-1.16-1.16-1.956-.213-.761-.35-1.733-.519-2.93l-.439-3.113c-.215-1.53-.39-2.761-.382-3.736.008-1.014.21-1.881.862-2.586.424-.458.942-.742 1.543-.923a2.89 2.89 0 0 1 2.055-2.72 2.75 2.75 0 0 1 2.454-2.605c.147-.016.316-.016.535-.016m-3.51 5.078c.926-.078 2.06-.078 3.427-.078h6.768c1.366 0 2.5 0 3.427.078a1.38 1.38 0 0 0-1.35-1.078H6.54c-.67 0-1.213.47-1.35 1.078m10.487-3.57c.55.058.985.468 1.092.992H7.231a1.25 1.25 0 0 1 1.092-.993c.056-.006.136-.007.417-.007h6.518c.28 0 .36.001.417.007M3.212 8.532c.303-.327.758-.544 1.643-.662.901-.12 2.108-.121 3.816-.121h6.656c1.708 0 2.915.002 3.816.121.885.118 1.34.335 1.643.662.296.32.457.755.463 1.579.006.85-.15 1.97-.376 3.576l-.423 3c-.178 1.261-.302 2.133-.485 2.787-.177.63-.384.965-.673 1.204-.293.244-.687.4-1.388.484-.719.086-1.658.087-3 .087h-5.81c-1.342 0-2.28-.001-3-.087-.7-.085-1.095-.24-1.388-.483-.289-.24-.496-.576-.673-1.205-.183-.654-.307-1.526-.485-2.787l-.423-3c-.226-1.605-.382-2.726-.376-3.576.006-.824.167-1.26.463-1.579"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgDocumentList
