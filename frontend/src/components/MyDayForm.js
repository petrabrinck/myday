import React, { useState, useEffect } from "react"
import "./mydayform.css"

// const url ="http://localhost:9000"
const url ="https://myday-reflection.herokuapp.com/"

const feelingsChecked = [false, false, false, false, false, false]

export const MyDayForm = props => {
  const feeling = props.feelings
  const [questions1, setQuestions1] = useState()
  const [questions2, setQuestions2] = useState()
  const [questions3, setQuestions3] = useState()
  const [questions4, setQuestions4] = useState()
  const [submitted, setSubmitted] = useState(false)
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
        messagePeople: questions1,
        messageGrateful: questions2,
        messageLookForward: questions3,
        messageReflections: questions4
      }),
      headers: { "Content-Type": "application/json" }
    })
    .then((res) => res.json())
        .then((json) => {
            console.log(json)
    setMessage("")
    setSubmitted(true)
    window.history.back();
    })}  

  return ( 
    <section className='formSection'>
      <div className="header2">
        <h1>Time to reflect</h1>
      </div>
      {submitted && <h1>You're reflection was saved!</h1>}
        <form className='form' onSubmit={event => event.preventDefault()}>
          <section className="boxes">
            <div className="questions1">
              {feeling.map((item, index) => (
                <label className="checkboxLabel" key={item}>
                  <input className="questions1"
                    type="checkbox"
                    value={item}
                    onChange={() => feelingsChecked[index]=true}
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
            <h4>I'm grateful for</h4>
              <textarea
              rows='3'
              onChange={event => setQuestions2(event.target.value)}
              ></textarea>
            <h4>I look forward to</h4>
              <textarea
              rows='3'
              onChange={event => setQuestions3(event.target.value)}
              ></textarea>
            <h4>Reflections</h4>
              <textarea
              rows='3'
              onChange={event => setQuestions4(event.target.value)}
              ></textarea> 
          </section>
          <button className="submitBtn"
            onClick={(event) => handleSubmit(event)}
            >Submit / Back
          </button>
      </form>
    </section>
  )
}