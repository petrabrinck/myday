import React from 'react'
import { Link } from 'react-router-dom'
import Navbar, { ThemeProps } from '@ovie/react-navbar'
import './navigationbar.css'

const navTheme: ThemeProps = {
  mainColor: '#80f8e6',
  menuBgColor: '#80f8e6'
}

// const navBrand = <a className="brand" href="#null">Base Corp.</a>

const navBrand = <a className="brand" href="#null"><p>My Day</p></a>

const handleLogOut = () => {
  console.log("Hej!")
  window.localStorage.removeItem("accessToken")
  window.localStorage.removeItem("userId")
}

const rightLinks = (
  <>
    <Link to={`/newReflection/`}>
      <a href="/newReflection/">New Day</a>
    </Link>
    <a onClick={handleLogOut} href="/">Log Out</a>
  </>
)
// const rightLinks = (
//   <>
//     <a onClick={handleLogOut} href="/">Log Out</a>
{/* <a href="#null">Sign Up</a> */ }
{/* <a href="/newReflection/">New Day</a> */ }
{/* <a href="#null">Your Reflections</a> */ }
{/* </>
) */}



export const NavigationBar = () => {
  return (
    <div className="navMenu">
      <Navbar
        brand={navBrand}
        theme={navTheme}
        // leftLinks={leftLinks}
        rightLinks={rightLinks}
        shouldAnimate={true}
      />
    </div>

  )
}
