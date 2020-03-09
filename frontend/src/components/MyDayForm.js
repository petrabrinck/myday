 
import React, { useState } from "react"
import "./mydayform.css"

export const MyDayForm = props => {
    const [message, setMessage] = useState("")
    const handleSubmit = event => {
      event.preventDefault()
      props.onFormSubmit(message) // this onFormSubmit comes as a props from App.js
      setMessage("")
    }
  
      return ( 
          <section className='formSection'>
      <form className='form'>
        <h3>Today I felt that</h3>
        <textarea
          rows='3'
          onChange={event => setMessage(event.target.value)}
        ></textarea>
        <div className='form-footer'>
          <button 
            className='form-button'
            type='submit'
            onClick={handleSubmit}
            disabled={message.length < 6 || message.length > 140 ? true : false}
          >
              <p>Save</p>
          </button>
          <p>{message.length} / 140</p>
        </div>
      </form>
      </section>
   )
}