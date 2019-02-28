import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css";

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rgba(255,255,255, .5)`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1rem 1rem`,
      }}
    >
      <div>
        <h4 style={{ margin: 0 }}>
          <Link className="nav-link" to="/"> Home </Link>
          <Link className="nav-link" to="/about"> About </Link>
          <Link className="nav-link" to="/product"> Product </Link>
          <Link className="nav-link" to="/faq"> FAQ </Link>
        </h4>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
