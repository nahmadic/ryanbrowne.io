import React from "react"
import { useStaticQuery, graphql }from "gatsby"
import Img from "gatsby-image"

import Header from "./header"

import "../styles/main.scss"

const Layout = (props) => {

  const data = useStaticQuery(graphql`
    query {
      backgroundImage: file(relativePath: { eq: "street.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2560) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="page-container">
      <div className="page-container__background">
        <Img fluid={data.backgroundImage.childImageSharp.fluid} />
        <div className="page-container__overlay"></div>
      </div>
      <Header />
      <div className="page-content">
        {props.children}
      </div>
    </div>
  )
}

export default Layout