import React from "react"
import { Link } from "gatsby";

import gmailIcon from '../images/gmail.svg'
import githubIcon from '../images/github.svg'
import linkedinIcon from '../images/linkedin.svg'
import twitterIcon from '../images/twitter.svg'

const Header = () => {

  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">ryanbrowne</Link>
      </div>
      <div className="header__links">
        <div className="header__link">
          <a href="mailto:hello@ryanbrowne.io?subject=Let's%20work%20together!" target="_blank">
            <img src={gmailIcon} alt="Email" />
          </a>
        </div>
        <div className="header__link">
          <a href="https://github.com/nahmadic" target="_blank">
            <img src={githubIcon} alt="GitHub" />
          </a>
        </div>
        <div className="header__link">
          <a href="https://www.linkedin.com/in/ryan-s-browne/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin" />
          </a>
        </div>
        <div className="header__link">
          <a href="https://twitter.com/nahmadic" target="_blank">
            <img src={twitterIcon} alt="Twitter" />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
