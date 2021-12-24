import * as React from "react"

const InGameSvg = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    className="side-href-item-icon"
    {...props}
  >
    <path
      d="M8 3C4.667 3 1.82 5.073.667 8c1.153 2.927 4 5 7.333 5s6.18-2.073 7.333-5c-1.153-2.927-4-5-7.333-5zm0 8.333a3.334 3.334 0 0 1 0-6.666 3.334 3.334 0 0 1 0 6.666zM8 6c-1.107 0-2 .893-2 2s.893 2 2 2 2-.893 2-2-.893-2-2-2z"
      className="side-href-item-icon-fill"
      fillRule="nonzero"
      fill="current"
    />
  </svg>
)

export default InGameSvg
