import React from 'react'
import Navabar from '../../comps/navbar/Navabar'
import LandingPage from '../../comps/landingpage/LandingPage'
import styles from './home.module.css'
import HowItWorks from '../../comps/howitworks/HowItWorks'
import Products from '../../comps/products/Products'
import Projects from '../../comps/projects/Projects'
import BuildOn from '../../comps/buildon/BuildOn'
import Faq from '../../comps/faq/Faq'

const Home = () => {
  return (
    <div className={styles.home_container}>
        <Navabar />
        <LandingPage />
        <HowItWorks />
        <Products />
        <Projects />
        <BuildOn />
        <Faq />

    </div>
  )
}

export default Home
