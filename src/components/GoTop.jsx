import React from 'react'
import ScrollToTop from "react-scroll-to-top";

function GoTop() {
  return (
    <div>
      <h1>Hello, world!</h1>
      <div style={{ marginTop: "150vh" }} />
      <ScrollToTop smooth />
    </div>
  )
}

export default GoTop
