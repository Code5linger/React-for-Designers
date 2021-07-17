import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card'
import Section from '../components/Section'
import Wave from '../components/Wave'
import staticdata from '../../staticdata.json'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Learn to <br/>Design & Code React apps</h1>
        <p>Complete courses about the best tools and design systems. Prototyping and build apps with React and Swift.</p>
        <Link to="/page-2/">Watch the video</Link>
        <div className="Logos">
          <img src={require('../images/logo-sketch.png')} width="50"/>
          <img src={require('../images/logo-figma.png')} width="50"/>
          <img src={require('../images/logo-studio.png')} width="50"/>
          <img src={require('../images/logo-framer.png')} width="50"/>
          <img src={require('../images/logo-react.png')} width="50"/>
          <img src={require('../images/logo-swift.png')} width="50"/>
        </div>
        <Wave/>
      </div>
    </div>
    <div className="Cards">
      <h2>11 Courses, more Coming</h2>
      <div className="CardGroup">
        <Card 
          title="Design System"
          text="10 Section"
          image={require('../images/wallpaper.jpg')} />
        <Card 
          title="React for Designers"
          text="12 Section"
          image={require('../images/wallpaper.jpg')} />
        <Card 
          title="Sound Design"
          text="5 Section"
          image={require('../images/wallpaper.jpg')} />
        <Card 
          title="ARKit 2"
          text="10 Section"
          image={require('../images/wallpaper.jpg')} />
      </div>
    </div>
    <Section
      image={require('../images/wallpaper2.jpg')}
      logo={require('../images/logo-react.png')}
      title="React for Designers"
      text="Lorem"
    />
    {staticdata.cells.map(cell => (
      <div>{cell.title}</div>
    ))}
  </div>
)

export default IndexPage
