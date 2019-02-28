import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header";
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header /* siteTitle={data.site.siteMetadata.title}*/ />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 0.8rem 1.45rem`, // second one adjusts side padding
            paddingTop: 0
          }}

        >

          <main>{children}</main>

          {/*}
          <footer>
            <div> © {new Date().getFullYear()} </div>
            <div> Built with love, by Aaron Chen. </div>
          </footer>
          */}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
