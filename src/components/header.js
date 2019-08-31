import React from "react"
import { Link } from "gatsby";

const Header = () => (
  <header className="header">
    <div className="header__logo">
      <Link to="/">ryanbrowne</Link>
    </div>
    <div className="header__links">
      <div className="header__link">
        <a href="mailto:hello@ryanbrowne.io?subject=Let's%20work%20together!" target="_blank"><img src="./assets/img/gmail.svg" alt="Email" /></a>
      </div>
      <div className="header__link">
        <a href="mailto:hello@ryanbrowne.io?subject=Let's%20work%20together!" target="_blank"><img src="./assets/img/gmail.svg" alt="Email" /></a>
      </div>
      <div className="header__link">
        <a href="mailto:hello@ryanbrowne.io?subject=Let's%20work%20together!" target="_blank"><img src="./assets/img/gmail.svg" alt="Email" /></a>
      </div>
      <div className="header__link">
        <a href="mailto:hello@ryanbrowne.io?subject=Let's%20work%20together!" target="_blank"><img src="./assets/img/gmail.svg" alt="Email" /></a>
      </div>
      <div className="header__link">
        <a href="mailto:hello@ryanbrowne.io?subject=Let's%20work%20together!" target="_blank"><img src="./assets/img/gmail.svg" alt="Email" /></a>
      </div>
    </div>
  </header>
)

export default Header
