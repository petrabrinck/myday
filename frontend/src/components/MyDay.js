import React, { useEffect, useState } from 'react'
import './myday.css'
import { Link } from 'react-router-dom'
import moment from 'moment'

// Petras key
// const apiKey = `563492ad6f91700001000001445fd59a899a466da3ee7ee1490f5d14`
const apiKey = `563492ad6f917000010000016674d16c530e444482c459f1837b2a47`
const url = "https://api.pexels.com/v1/search?query=example+raindrop&per_page=85&page=5"
const reflectionsUrl ="https://myday-reflection.herokuapp.com/"
// const reflectionsUrl = "http://localhost:9000/"

export const MyDay = () => {
  const [photos, setPhotos] = useState([])
  const [reflections, setReflections] = useState([])

  useEffect(() => {
    fetch(reflectionsUrl)
      .then(res => res.json())
      .then(json => setReflections(json))
  }, [])
  
  useEffect(() => {
    fetch(url, { headers: { Authorization: apiKey } })
      .then(res => res.json())
      .then(json => {
        setPhotos(json.photos) 
      })
  }, [])

  let combo = []
  reflections.forEach((reflection, index) => {
    combo.push({
      reflection: reflection,
      photo: photos.reverse()[index]
    })
  })
  console.log(combo)
 
  return (
    <div className="myDayContainer">   
      {/* <h3>Your calender of reflections:</h3>    */}
        {photos.length && combo.map((item) => (
          <div className="myDayPhotos" key={item.reflection._id}>       
            <Link to={`/reflections/${item.reflection._id}`}>
              <img src={item.photo.src.tiny} />
              <h3>{moment(item.reflection.createdAt).format('MMMM Do YYYY')} </h3>  
            </Link>
          </div>
        ))}
    </div>
  )
}
