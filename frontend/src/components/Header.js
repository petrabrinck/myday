import React from 'react'
import './header.css'
import { NewDayButton } from './NewDayButton'
import { NavigationBar } from './NavigationBar'

export const Header = () => {
  return (
    <section className='headerSection'>
      <NavigationBar />
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
