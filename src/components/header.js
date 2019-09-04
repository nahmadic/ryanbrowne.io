import React from "react"
import { Link } from "gatsby";

const Header = () => {

  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">ryanbrowne</Link>
      </div>
      <div className="header__links">
        <div className="header__link header__link--twitter">
          <a href="https://twitter.com/nahmadic" target="_blank">tw</a>
        </div>
        <div className="header__link header__link--github">
          <a href="https://github.com/nahmadic" target="_blank">gh</a>
        </div>
        <div className="header__link header__link--linkedin">
          <a href="https://www.linkedin.com/in/ryan-s-browne/" target="_blank">li</a>
        </div>
        <div className="header__link header__link--email">
          <a href="mailto:hello@ryanbrowne.io?subject=Let's%20work%20together!" target="_blank">em</a>
        </div>
      </div>
    </header>
  )
}

export default Header
