 
import React, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import "./mydayform.css"

const feeling = ['I feel happy today', 'I feel strong']
const questionsGroup2 = ['I took a walk', 'I went to the gym']
const questionsGroup3 = ['I feel worried', 'I feel tired']
const questionsGroup4 = ['I got a compliment', 'I gave someone a hug']


export const MyDayForm = props => {
  const { myDay2 } = useParams()
  const [questions1, setQuestions1] = useState()
  const [questions2, setQuestions2] = useState()
  const [questions3, setQuestions3] = useState()
  const [questions4, setQuestions4] = useState()
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState([])
  const [submitted, setSubmitted] = useState(false)
  
  // const [feeling, setFeeling] = useState("")
  const [message, setMessage] = useState("")
  const handleSubmit = event => {
    event.preventDefault()
    props.onFormSubmit(message) // this onFormSubmit comes as a props from App.js
    setMessage("")
  }
console.log("fredag den 13")

    return ( 
      <section className='formSection'>
       
       <Link className="backLink" to={`/`}>
          <svg className="backLinkImg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
            <path d="M27 14.5C27 7.596441 21.4035594 2 14.5 2S2 7.596441 2 14.5 7.5964406 27 14.5 27 27 21.403559 27 14.5zm-19.3388348-.353553l7.4852814-7.485282c.1952622-.195262.5118446-.195262.7071068 0l2.1213203 2.121321c.1952622.195262.1952622.511844 0 .707106L12.9644661 14.5l5.0104076 5.010408c.1952622.195262.1952622.511844 0 .707106l-2.1213203 2.121321c-.1952622.195262-.5118446.195262-.7071068 0l-7.4852814-7.485282c-.19799-.19799-.197989-.509117 0-.707106z" fill="#fff" fillRule="evenodd"></path></svg>
            <p>Go back</p>
        </Link>
        <div className="header2">
        <h1>Time to reflect</h1>
        </div> 
     
      {!submitted && (
        <form className='form' className='form'onSubmit={event => event.preventDefault()}>
    {/* <form className='form' */}
     

    <section className="boxes">
        <div className="questions1">
          {questionsGroup2.map(group => (
            <label key={group}>
              <input className="questions1"
                type="checkbox"
                value={group}
                onChange={event => setQuestions1(event.target.value)}
                checked={questions1 === group}
              />
              {group}
            </label>
          ))}
        </div>


        <div className="questions2">
          {questionsGroup2.map(group => (
            <label key={group}>
              <input className="questions2"
                type="checkbox"
                value={group}
                onChange={event => setQuestions2(event.target.value)}
                checked={questions2 === group}
              />
              {group}
            </label>
          ))}
        </div>
        <div className="questions3">
          {questionsGroup3.map(group => (
            <label key={group}>
              <input className="questions3"
                type="checkbox"
                value={group}
                onChange={event => setQuestions3(event.target.value)}
                checked={questions3 === group}
              />
              {group}
            </label>
          ))}
        </div>
        <div className="questions4">
          {questionsGroup4.map(group => (
            <label key={group}>
              <input className="questions4"
                type="checkbox"
                value={group}
                onChange={event => setQuestions4(event.target.value)}
                checked={questions4 === group}
              />
              {group}
            </label>
            ))}
        </div>
      </section>
      <h4>Two people who I admire</h4>
      <textarea
        rows='3'
        onChange={event => setMessage(event.target.value)}
      ></textarea>
      <div className='form-footer'>
      <p>{feeling.length} / 140</p>
        {/* <button 
          className='form-button'
          type='submit'
          onClick={handleSubmit}
          disabled={feeling.length < 6 || feeling.length > 140 ? true : false}
        >
          <p>Save</p>
        </button> */}
      </div> 
      <h4>Two things I'm grateful for</h4>
      <textarea
        rows='3'
        onChange={event => setMessage(event.target.value)}
      ></textarea>
      <div className='form-footer'>
      <p>{feeling.length} / 140</p>
        {/* <button 
          className='form-button'
          type='submit'
          onClick={handleSubmit}
          disabled={message.length < 6 || message.length > 140 ? true : false}
        >
          <p>Save</p>
        </button> */}
      </div>
      <h4>Two things I look forward to</h4>
      <textarea
        rows='3'
        onChange={event => setMessage(event.target.value)}
      ></textarea>
      <div className='form-footer'>
      <p>{message.length} / 140</p>
        {/* <button 
          className='form-button'
          type='submit'
          onClick={handleSubmit}
          disabled={message.length < 6 || message.length > 140 ? true : false}
        >
          <p>Save</p>
        </button> */}
      </div> 

      {/* console.log(feeling) */}
      <h4>Reflections</h4>
      <textarea
        rows='3'
        onChange={event => setMessage(event.target.value)}
      ></textarea>
      <div className='form-footer'>
      <p>{message.length} / 140</p>
       
        
      </div>
      {/* <button 
          className='form-button'
          type='submit'
          onClick={handleSubmit}
          disabled={message.length < 6 || message.length > 140 ? true : false}
        >
            <p>Save</p>
        </button> */}
        <button className="submitBtn"
            onClick={() => setSubmitted(true)}
          >SUBMIT
            </button>
        
      

    </form>
    )}
      {submitted && <Summary name={name} adventures={adventures} destinations={destinations} mostImportant={mostImportant} companionGroup={companionGroup} />}
   </section>
  )
}