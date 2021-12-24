import * as React from "react"

const ComboSvg = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    className="side-href-item-icon"
    {...props}
  >
    <path
      d="m14 1 2 2-2 2 2 2-2 2-2-2-8 8H2v-2l8-8-2-2 2-2 2 2 2-2zm-3 9.009L14 13v2h-2l-3.015-2.991 2.015-2zM6 1l2 2-2.007 2.008L7 6 5 8l-1.015-.985L2 9 0 7l2-2-2-2 2-2 2 2 2-2z"
      className="side-href-item-icon-fill"
      fillRule="nonzero"
      fill="current"
    />
  </svg>
)

export default ComboSvg
