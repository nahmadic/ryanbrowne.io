import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>ryan browne . io</h1>
    <h3>New site coming soon</h3>
      <div class="social-links">
        <div class="social-link">
          <a href="mailto:hello@ryanbrowne.io?subject=Let's%20work%20together!" target="_blank"><img src="./assets/img/gmail.svg" alt="Email" /></a>
        </div>
        <div class="social-link">
          <a href="https://github.com/nahmadic" target="_blank"><img src="./assets/img/github.svg" alt="GitHub" /></a>
        </div>
        <div class="social-link">
          <a href="https://www.linkedin.com/in/ryan-s-browne/" target="_blank"><img src="./assets/img/linkedin.svg" alt="Linkedin" /></a>
        </div>
        <div class="social-link">
          <a href="https://twitter.com/nahmadic" target="_blank"><img src="./assets/img/twitter.svg" alt="Twitter" /></a>
        </div>
      </div>
  </Layout>
)

export default IndexPage
