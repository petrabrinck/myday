import React from 'react'
import { Link } from 'react-router-dom'
import './newdaybutton.css'

export const NewDayButton =() => {

  return (  
      <Link to={`/newReflection/`}>
        <button className="NewDayButton">
        <p>Add New Day</p>
      </button>
      </Link>
  )
}

