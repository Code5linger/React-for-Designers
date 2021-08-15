import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import images from "../images/Form.png"
import "../pages/index.css"

function IndexPage() {
  return (
    <Layout>
      <div className="TextContent">
        <h1>Build your next landing page in 5 minutes!</h1>
        <p>
          Create custom landing pages with Omega that convert more visitors than
          any website. With lots of unique blocks, you can easily build a page
          without coding.
        </p>
        <Link to="/page-2/">Get Beta Access</Link> <br />
      </div>
      <div className="ImageContent">
        <img src={images} alt="Form" srcset="" />
      </div>
    </Layout>
  )
}

export default IndexPage
