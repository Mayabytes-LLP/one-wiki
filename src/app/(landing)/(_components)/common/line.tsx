export default function Line({
  className = "className",
}: {
  className: string
}) {
  return (
    <svg
      width="46"
      height="27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="url(#a)">
        <path
          transform="matrix(.88271 .46992 -.79885 .60154 1.556 2.865)"
          stroke="url(#b)"
          stroke-width="1.388"
          stroke-linecap="round"
          d="M.694-.694h45.894"
        />
      </g>
      <defs>
        <linearGradient
          id="b"
          x1="-13.131"
          y1="-22.215"
          x2="56.935"
          y2="-7.619"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#fff" />
          <stop offset="1" stop-color="#fff" stop-opacity="0" />
        </linearGradient>
        <filter
          id="a"
          x=".046"
          y=".393"
          width="45.864"
          height="26.327"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation=".925"
            result="effect1_foregroundBlur_1_4300"
          />
        </filter>
      </defs>
    </svg>
  )
}
