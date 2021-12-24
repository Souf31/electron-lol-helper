import * as React from "react"

const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    className="side-href-item-icon"
    {...props}
  >
    <path
      d="M12 9v2H4V9h8zm0-4v2H4V5h8z"
      className="side-href-item-icon-fill"
      fillRule="nonzero"
      fill="current"
    />
  </svg>
)

export default SvgComponent
