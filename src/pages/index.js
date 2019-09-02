import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="index__content">
      <h1>Hey, I'm Ryan.</h1>
      <h2>I'm a front-end developer. <br/> Check out some of the stuff I've done.</h2>
    </div>
  </Layout>
)

export default IndexPage
