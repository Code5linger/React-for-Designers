import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/">
        <div className="logo">
          Omega
        </div>
      </Link>
      <Link to="/demos">Demos</Link>
      <Link to="/pages">Pages</Link>
      <Link to="/support">Support</Link>
      <Link to="/access"><button>Get Beta Access</button></Link>
    </div>
  </div>
)

export default Header
