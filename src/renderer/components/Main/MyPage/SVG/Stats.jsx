import * as React from "react"

const Stats = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle className="circle-background" />
    <circle
      className="circle-foreground"
      style={{
        strokeDasharray: "150.72px,251.2px",
      }}
    />
  </svg>
)

export default Stats
