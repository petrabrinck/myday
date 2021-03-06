import React from 'react'
import './header.css'
import Linkedin from 'assets/linkedin.png'
import Instagram from 'assets/instagram.png'
import Facebook from 'assets/facebook.png'
import { NewDayButton } from './NewDayButton'
import { NavigationBar } from './NavigationBar'

export const Header = () => {
  return (
    <section className='headerSection'>
      <NavigationBar />
      <div className="header-icons">
        <div className="hIconCircle">
          <a href="https://www.linkedin.com/in/petra-celie-brinck-5aa06221/" target="_blank">
            <img
              src={Linkedin} target="_blank"
              className="hIconImg"
              alt="LinkedInLogo"
            /></a>
        </div>
        <div className="hIconCircle">
          <a href="https://www.facebook.com/petra.brinck" target="_blank">
            <img
              src={Facebook} target="_blank"
              className="hIconImg"
              alt="FacebookLogo"
            /></a>
        </div>
        <div className="hIconCircle">
          <a href="https://www.instagram.com/petrabrinck/" target="_blank">
            <img
              src={Instagram} target="_blank"
              className="hIconImg"
              alt="InstagramLogo"
            /></a>
        </div>
      </div>
      <div className="headerInfo">
        <h1>My Day </h1>
        <div className="welcomeText">
          <h4>Most of us have some kind of social media app where we spend time and regardless if its business or pleasure
          there is seldom any prive space where you can write your inner reflections.
          We believe that it's essential for our wellbeing to reflect on a daily basis so we created
              this journal based on our own wish to actively be more present and appreciative of what we have in our lives today. </h4>
          {/* <h4 className="extraText">Most of us have some kind of social media app where we spend time, but there is seldom any space for inner reflections. 
              We believe that it's essential for our wellbeing to reflect on a daily basis. </h4>  */}
          <h4> This is your space and your time to write some thoughts and save memories. You can create new reflections and
            look back at your previous ones belox. Enjoy!</h4>
        </div>
      </div>
      <div className="newDayButtonDiv">
        <NewDayButton />
      </div>
    </section>
  )
}
