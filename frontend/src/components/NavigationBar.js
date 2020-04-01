import React from 'react'
import Navbar, { ThemeProps } from '@ovie/react-navbar'
import './navigationbar.css'

const navTheme: ThemeProps = {
  mainColor: 'darkslategrey',
  menuBgColor: 'darkslategrey'
}

// const navBrand = <a className="brand" href="#null">Base Corp.</a>

const navBrand = <a className="brand" href="#null"><p>Base Corp.</p></a> 

const leftLinks = (
  <>
    <a href="#null">Our Plans</a>
    <a href="#null">How It Works</a>
    <a href="#null">Our Menus</a>
  </>
)

const rightLinks = (
  <>
    <a href="#null">Get Started</a>
    <a href="#null">Sign In</a>
  </>
)

export const NavigationBar = () => {
    return (
      <div className="navMenu">
        <Navbar
          brand={navBrand}
          theme={navTheme}
          leftLinks={leftLinks}
          rightLinks={rightLinks}
          shouldAnimate={true}
        />
      </div>
    
    )
  }
  