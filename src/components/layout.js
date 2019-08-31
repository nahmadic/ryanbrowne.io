import React from "react"

import Header from "./header"

import "../styles/main.scss"

const Layout = (props) => {

  return (
    <div className="page-container">
      <Header />
      <div className="page-content">
        {props.children}
      </div>
    </div>
  )
}

export default Layout