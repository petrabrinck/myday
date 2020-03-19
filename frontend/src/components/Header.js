import React from 'react'
import './header.css'

export const Header = () => {
  return (
    <section className='headerSection'>

      <div class="containerNav" onclick="myFunction(this)">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>


      {/* <div className='headerInfo'> */}
       {/* <img src=""  */}
       <div class="header-icons">
          <div class="hIconCircle">
            <a href="https://www.linkedin.com/in/theresa-ulwahn-b719259/">
              <img
                src="../assets/"
                class="hIconImg"
                alt="LinkedInLogo"
            /></a>
          </div>
          <div class="hIconCircle">
            <a href="https://github.com/TheresaUlwahn?tab=repositories">
              <img
                src="./assets/Githubtransp.png"
                class="hIconImg"
                alt="GitHubLogo"
            /></a>
          </div>
          <div class="hIconCircle">
            <a href="https://stackoverflow.com/c/technigo/users/15">
              <img
                // src="../"
                class="hIconImg"
                alt="StuckoverflowLogo"
            /></a>
          </div>
        </div> 
        <h1>My Day </h1>   
      {/* </div> */}
    </section>
  )
}
