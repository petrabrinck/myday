import React from 'react'
import './header.css'
import { NewDayButton } from './NewDayButton'
import { NavigationBar } from './NavigationBar'

export const Header = () => {
  return (
    <section className='headerSection'>
      <NavigationBar />
      {/* <div class="containerNav" onclick="myFunction(this)">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div> */}
      <div className="headerInfo">
        <h1>My Day </h1> 
      <NewDayButton />
      </div>
    </section>
  )
}
