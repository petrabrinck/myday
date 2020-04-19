import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './mydaydetails.css'

export const MyDayDetails = props => {
  const feelings = props.feelings
  const { reflectionId } = useParams()
  const [reflection, setReflection] = useState({})
  const [savedFeelings, setSavedFeelings] = useState([])

  useEffect(() => {
    fetch(`http://localhost:9000/reflections/${reflectionId}`)
      // fetch(`https://myday-reflection.herokuapp.com/reflections/${reflectionId}`)
      .then(res => res.json())
      .then(json => {
        setReflection(json)
        setSavedFeelings([
          json.feeling1,
          json.feeling2,
          json.feeling3,
          json.feeling4,
          json.feeling5,
          json.feeling6
        ])
      })
  }, [reflectionId])

  if (!reflection) {
    return <div>Ups, need a moment...</div>
  }

  if (reflection) {
    return (
      <section className='detailsContainer'>
        <div className="quotePost">
          <div className="quoteWords">
             <h2>With the new day comes new strength & new thoughts!</h2>
          </div>
          <div className="reflectionSummary">
            <h2>Great to see you again!</h2>
            <h3><span> 🧚🏻‍♀️ </span>Memories from this day <span> 🧚🏻‍♀️ </span></h3> 
            {feelings.map((item, index) => {
              if (savedFeelings[index] === 'true') {
                return <h3 key={index}>{item}</h3>
              }
            })}
            <div className='summary'>
              <span> 🧚🏻‍♀️ </span>
              <h3>I admire: {reflection.messagePeople}</h3>
              <h3>I'm grateful for: {reflection.messageGrateful}</h3>
              <h3>I look forward to: {reflection.messageLookForward}</h3>
              <h3>My reflections: {reflection.messageReflections}</h3>
            </div>
          </div>
        </div>
        <Link className='backLink' to={`/myDay`}>
          <p>Back</p>
        </Link>
      </section>
    )
  }
}
