import * as React from "react"

const ChampionSvg = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    className="side-href-item-icon"
    {...props}
  >
    <path
      d="M14.126 8.168c0-1.421.559-8.125-6.098-8.166L7.97 0C1.314.043 1.873 6.747 1.873 8.168c0 1.426.238 2.822-.267 3.208-.505.386-.326.95.683 2.197 1.01 1.248 2.822 1.96 2.822 1.96V9.177a2.309 2.309 0 0 1-.928-.587c-.76-.783-.864-1.914-.231-2.529.63-.614 1.715-.43 2.52.305.32.292.543.738.643 1.083.14.436.156.902.156 1.47 0 .958.011 2.309.011 2.309 0 .87 1.434.87 1.434 0 0 0 .012-1.35.012-2.309 0-.568.016-1.034.156-1.47.1-.345.323-.791.643-1.083.805-.736 1.89-.92 2.52-.305.633.615.53 1.746-.23 2.53a2.327 2.327 0 0 1-.929.586v6.358s1.813-.713 2.822-1.96c1.01-1.248 1.188-1.812.683-2.198-.504-.386-.267-1.782-.267-3.208z"
      className="side-href-item-icon-fill"
      fillRule="nonzero"
      fill="current"
    />
  </svg>
)

export default ChampionSvg
