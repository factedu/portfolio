import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="container-fluid" style={{marginTop:'15%'}}>
      <h1 className="text-uppercase text-center mt-5 title-text">404: Not Found</h1>
      <p className="text-center mt-5 mb-5 h4">You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>

  </Layout>
)

export default NotFoundPage
