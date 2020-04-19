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
            <a href="https://www.linkedin.com/in/theresa-ulwahn-b719259/" target="_blank">
              <img
                src={Linkedin} target="_blank"
                className="hIconImg"
                alt="LinkedInLogo"
            /></a>
          </div>
          <div className="hIconCircle">
            <a href="https://www.facebook.com/theresa.ulwahn?ref=bookmarks" target="_blank">
              <img
                src={Facebook} target="_blank"
                className="hIconImg"
                alt="FacebookLogo"
            /></a>
          </div>
          <div className="hIconCircle">
            <a href="https://www.instagram.com/fruulw/" target="_blank">
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
            <h4>Most of us have some kind of social media app where we spend time, but there is seldom any space for inner reflections. 
              We believe that it's essential for our wellbeing to reflect on a daily basis. </h4> 
            {/* <h4 className="extraText">Most of us have some kind of social media app where we spend time, but there is seldom any space for inner reflections. 
              We believe that it's essential for our wellbeing to reflect on a daily basis. </h4>  */}
            <h4> This is a journal where you can write your thoughts and look back at your previous posts. </h4>
          </div>
      </div>
      <div className="newDayButtonDiv">
          <NewDayButton />
      </div>
    </section>
  )
}
