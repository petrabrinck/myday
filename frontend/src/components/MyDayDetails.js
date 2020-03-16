import React, {useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './mydaydetails.css'

// const id = "{${reflection._id}}"
// const url = "https://api.pexels.com/search?q=${reflection._id}"
const apiKey = `563492ad6f917000010000016674d16c530e444482c459f1837b2a47`
const url = "https://api.pexels.com/v1/search?query=example+paradise/"

export const MyDayDetails = (props) => {
    const feelings = props.feelings
    const { reflectionId } = useParams()
    const [ reflection, setReflection ] = useState ([])
    const [ feelingsChecked, setFeelingsChecked] = useState ([])
    console.log(reflectionId)
    
    useEffect(() => {
      // fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=3812b9925d12c2723ac148f3607b8bb5&language=en-US`)
        // fetch(`https://api.pexels.com/v1/paradise/${reflectionId}?api_key=563492ad6f917000010000016674d16c530e444482c459f1837b2a47`)
        // fetch(url, { headers: {Reflection_id: reflectionId}, { Authorization: apiKey}})
        fetch(`http://localhost:9000/reflections/${reflectionId}`)
        .then((res) => res.json())
        .then((json) => {
            setReflection(json)
            setFeelingsChecked([json.feeling1, json.feeling2])
            console.log(json)
        })  
    }, [reflectionId])

    if (!reflection) {
        return <div>Ups, need a moment...</div>
    }

    return(
        <section className="reflectionContainer">

            {/* Link and svg for "Go Back"-button */}
            <Link className="backLink" to={`/`}>
                <svg className="backLinkImg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                    <path d="M27 14.5C27 7.596441 21.4035594 2 14.5 2S2 7.596441 2 14.5 7.5964406 27 14.5 27 27 21.403559 27 14.5zm-19.3388348-.353553l7.4852814-7.485282c.1952622-.195262.5118446-.195262.7071068 0l2.1213203 2.121321c.1952622.195262.1952622.511844 0 .707106L12.9644661 14.5l5.0104076 5.010408c.1952622.195262.1952622.511844 0 .707106l-2.1213203 2.121321c-.1952622.195262-.5118446.195262-.7071068 0l-7.4852814-7.485282c-.19799-.19799-.197989-.509117 0-.707106z" fill="#000" fillRule="evenodd"></path></svg>
                <p>Back</p>
            </Link>
            <div>
                {feelings.map((feeling, index) =>  {
                  if (!feelingsChecked[index])return null
                  return(
                    <p> {feeling} </p>
                  )
                })}
                <p>so today you</p>
                
                <p>{reflection.messagePeople}</p> 
                <p>{reflection.messageGrateful}</p> 
                {/* <p>{reflection.messageLookForward}</p> 
                <p>{reflection.messageReflections}</p>   */}
            </div>
            {/* backDrop background picture with CSS style in react for the site
            < div className="backDrop" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`}} alt={movie.original_title} /> */}
             {/*infoBox contains poster, text about movie, title and rating*/}
           
            {/* <div className="infoBox">    
                <img className="infoPoster" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.original_title} /> 
                {/*titleInfo contains title and rating to make them flex in css*/} 
                {/* <div className="titleInfo">   
                    <h1 className="movieTitle">{reflection.message}
                        <p className="movieVotes">{movie.vote_average}/10</p>
                    </h1>
                    <p>{movie.overview}</p>
                 
                
                </div>  
            </div> */}
        </section> 
    )
}


// import React from 'react'

// export const MyDayDetails = () => {
// return (
//     <div>
//         <p>so today you</p>
//     </div>

// )
// }