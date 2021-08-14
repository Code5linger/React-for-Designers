import React from 'react'
import Link from 'gatsby-link'
import Form from '../images/Form.png'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Build your next landing page in 5 minutes!</h1>
        <p>Create custom landing pages with Omega that convert more visitors than any website. With lots of unique blocks, you can easily build a page without coding.</p>
        <img src={Form} alt="Form" srcset="../images/Form.png" />
        <Link to="/page-2/">Get Beta Access</Link>
      </div>
    </div>
  </div>
)

export default IndexPage
