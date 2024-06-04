export default function Circle({
  className = "className",
}: {
  className: string
}) {
  return (
    <svg
      viewBox="0 0 1796 1796"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle
        cx="898"
        cy="897.529"
        r="897"
        transform="rotate(180 898 897.529)"
        stroke="#48484C"
      />
      <path
        d="M132.727 897.528c0 422.652 342.624 765.272 765.273 765.272 422.65 0 765.27-342.62 765.27-765.272 0-422.648-342.62-765.273-765.27-765.273-422.649 0-765.273 342.625-765.273 765.273Z"
        stroke="url(#a)"
      />
      <circle
        cx="632.29"
        cy="632.29"
        r="631.79"
        transform="matrix(1 0 0 -1 265.71 1531.57)"
        stroke="url(#b)"
      />
      <defs>
        <linearGradient
          id="a"
          x1="898"
          y1="131.755"
          x2="898"
          y2="1663.3"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#717171" stop-opacity=".6" />
          <stop offset="1" stop-color="gray" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="b"
          x1="632.29"
          y1="0"
          x2="632.29"
          y2="1264.58"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="gray" stop-opacity=".51" />
          <stop offset="1" stop-color="gray" stop-opacity=".03" />
        </linearGradient>
      </defs>
    </svg>
  )
}
