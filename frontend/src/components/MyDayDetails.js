import React, {useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './mydaydetails.css'

// const id = "{${reflection._id}}"
// const url = "https://api.pexels.com/search?q=${reflection._id}"
const apiKey = `563492ad6f917000010000016674d16c530e444482c459f1837b2a47`
const url = "https://api.pexels.com/v1/search?query=example+waterdrops&per_page=55&page=2"

export const MyDayDetails = (props) => {
    const feelings = props.feelings
    const { reflectionId } = useParams()
    const [ reflection, setReflection ] = useState ([])
    const [ feelingsChecked, setFeelingsChecked] = useState ([])
    console.log(reflectionId)
    
    useEffect(() => {
      
        fetch(`http://localhost:9000/reflections/${reflectionId}`)
        // fetch(`https://myday-reflection.herokuapp.com/reflections/${reflectionId}`)
        .then((res) => res.json())
        .then((json) => {
            setReflection(json)
            // setFeelingsChecked([json.feelings])
            setFeelingsChecked([json.feeling1, json.feeling2])
            // setFeelingsChecked([json.feeling1, json.feeling2, json.feeling3, json.feeling4, json.feeling5, json.feeling6, json.feeling7, json.feeling8])
            console.log(json)
        })  
    }, [reflectionId])

    if (!reflection) {
        return <div>Ups, need a moment...</div>
    }


    return(
        <section className="detailsContainer">

            {/* Link and svg for "Go Back"-button */}
            {/* <Link className="backLink" to={`/`}>
                <svg className="backLinkImg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                    <path d="M27 14.5C27 7.596441 21.4035594 2 14.5 2S2 7.596441 2 14.5 7.5964406 27 14.5 27 27 21.403559 27 14.5zm-19.3388348-.353553l7.4852814-7.485282c.1952622-.195262.5118446-.195262.7071068 0l2.1213203 2.121321c.1952622.195262.1952622.511844 0 .707106L12.9644661 14.5l5.0104076 5.010408c.1952622.195262.1952622.511844 0 .707106l-2.1213203 2.121321c-.1952622.195262-.5118446.195262-.7071068 0l-7.4852814-7.485282c-.19799-.19799-.197989-.509117 0-.707106z" fill="#000" fillRule="evenodd"></path></svg>
                <p>Back</p>
            </Link> */}
            <div>
                <h2>Awesome!</h2>
                <h2>Your day:</h2>
                {feelings.map((feeling, index) =>  {
                  if (!feelingsChecked[index])return null
                  return(
                    <p> {feeling} </p>
                  )
                })}
            </div>
   
             
        <div className="Summary">
            <h2>Here are today's reflections.</h2>
            <p>You admire these two persons {reflection.messagePeople}</p>
            <p>Two things I'm grateful for: {reflection.messageGrateful}</p>
            <p>My reflections{reflection.messageReflections}!</p> 
            {/* <p>My reflections: {reflection.messageLookForward}.</p> */}
        </div>

       <Link className="backLink" to={`/`}>
        <svg className="backLinkImg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
          <path d="M27 14.5C27 7.596441 21.4035594 2 14.5 2S2 7.596441 2 14.5 7.5964406 27 14.5 27 27 21.403559 27 14.5zm-19.3388348-.353553l7.4852814-7.485282c.1952622-.195262.5118446-.195262.7071068 0l2.1213203 2.121321c.1952622.195262.1952622.511844 0 .707106L12.9644661 14.5l5.0104076 5.010408c.1952622.195262.1952622.511844 0 .707106l-2.1213203 2.121321c-.1952622.195262-.5118446.195262-.7071068 0l-7.4852814-7.485282c-.19799-.19799-.197989-.509117 0-.707106z" fill="#fff" fillRule="evenodd"></path></svg>
        <p>Go back</p>
      </Link> 
    </section> 
    )
}

