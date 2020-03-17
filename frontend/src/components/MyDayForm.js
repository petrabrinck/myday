 
import React, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import "./mydayform.css"

const url ="http://localhost:9000"

const feelingsChecked = [false, false, false, false, false, false]
// const feeling = ['I took a walk', 'I went to the gym']
// const feeling = ['I feel worried', 'I feel tired']
// const feeling = ['I got a compliment', 'I gave someone a hug']


export const MyDayForm = props => {
  const feeling = props.feelings
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
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        feeling1: feelingsChecked[0],
        feeling2: feelingsChecked[1],
        feeling3: feelingsChecked[2],
        feeling4: feelingsChecked[3],
        feeling5: feelingsChecked[4],
        feeling6: feelingsChecked[5],
        // feeling7: feelingsChecked[6],
        // feeling8: feelingsChecked[7],

        messagePeople: questions1,
        messageGrateful: questions2,
        messageLookForward: questions3,
        messageReflections: questions4
      }),
      headers: { "Content-Type": "application/json" }
    })
    .then((res) => res.json())
        .then((json) => {
            // setReflection(json)
            console.log(json)
    // props.onFormSubmit(message)
    setMessage("")
    })}  
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
        <form className='form' onSubmit={event => event.preventDefault()}>
        <section className="boxes">
          <div className="questions1">
            {feeling.map((item, index) => (
              <label className="checkboxLabel" key={item}>
                <input className="questions1"
                  type="checkbox"
                  value={item}
                  onChange={() => feelingsChecked[index]=true}
                  // checked={feeling === group}
                />
                {item}
              </label>
            ))}
          </div>
         
        </section>
          <section className="formInputSection">
          <h4>Two people who I admire</h4>
          <textarea
            rows='3'
            onChange={event => setQuestions1(event.target.value)}
            ></textarea> 
          
          <h4>Two things I'm grateful for</h4>
            <textarea
            rows='3'
            onChange={event => setQuestions2(event.target.value)}
             ></textarea>
       
          {/* <h4>Two things I look forward to</h4>
            <textarea
            rows='3'
            onChange={event => setQuestions3(event.target.value)}
            ></textarea>
      
          <h4>Reflections</h4>
            <textarea
            rows='3'
            onChange={event => setQuestions4(event.target.value)}
            ></textarea> */}
          </section>
      
        <button className="submitBtn"
          onClick={(event) => handleSubmit(event)}
          >SUBMIT
        </button>
      </form>
    </section>
  )
}