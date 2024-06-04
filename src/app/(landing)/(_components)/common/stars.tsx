export default function Star({
  className = "className",
}: {
  className?: string
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={47}
      height={45}
      viewBox="0 0 47 45"
      fill="none"
      className={className}
    >
      <g filter="url(#a)">
        <path
          d="m23.393 4.633.822 18.836 18.167-5.04-17.66 6.602L35.13 40.752 23.393 25.997 11.658 40.752l10.406-15.72-17.66-6.602 18.168 5.039.821-18.836Z"
          fill="#fff"
        />
      </g>
      <defs>
        <filter
          id="a"
          x=".404"
          y=".633"
          width="45.978"
          height="44.119"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation="2"
            result="effect1_foregroundBlur_1_4344"
          />
        </filter>
      </defs>
    </svg>
  )
}
