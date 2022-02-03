import * as React from "react"

const Condition = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle className="circle-background" />
    <circle
      className="circle-foreground"
      style={{
        strokeDasharray: "233.257px,251.2px",
      }}
    />
  </svg>
)

export default Condition
