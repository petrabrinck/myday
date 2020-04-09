import React from 'react'
import Navbar, { ThemeProps } from '@ovie/react-navbar'
import './navigationbar.css'

const navTheme: ThemeProps = {
  mainColor: 'darkslategrey',
  menuBgColor: 'darkslategrey'
}

// const navBrand = <a className="brand" href="#null">Base Corp.</a>

const navBrand = <a className="brand" href="#null"><p>My Day</p></a> 

const leftLinks = (
  <>
    {/* <a href="/newReflection/">New Day</a>
    <a href="#null">Your Reflections</a> */}
  </>
)

const rightLinks = (
  <>
    {/* <a href="#null">Log In</a>
    <a href="#null">Sign Up</a> */}
    <a href="/newReflection/">New Day</a>
    <a href="#null">Your Reflections</a>
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
  