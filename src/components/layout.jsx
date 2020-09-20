/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
// import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div style={{ marginTop: 70 }} className="d-flex flex-column">
        <main className="site-main flex-grow-1" style={{height:'100%'}}>{children}</main>
        <footer style={{
          bottom:0,
          marginBottom:0,
          textAlign:'center',
          borderTop:'1px solid gray'
        }} className="flex-shrink-1 mt-5">
          <div className="mt-1 text-center ">
          © {new Date().getFullYear()}, Ravi S Singh
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
