import React, { useEffect, useState } from 'react'
import './myday.css'
import { Header } from './Header'
import { NewDayButton } from './NewDayButton'
import { Link } from 'react-router-dom'
import moment from 'moment'

// const url = "https://api.pexels.com/v1/search?query=example+paradise&per_page=25&page=1"
const apiKey = `563492ad6f917000010000016674d16c530e444482c459f1837b2a47`
const url = "https://api.pexels.com/v1/search?query=example+waterdrops&per_page=55&page=3"
const reflectionsUrl = "http://localhost:9000/"

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



  // const photoArray = [photos]
  //   photoArray.reverse()

  // const a = [1, 2, 3];
  //   a.reverse(); 

  let combo = []
  reflections.forEach((reflection, index) => {
    combo.push({
      reflection: reflection,
      photo: photos.reverse()[index]
    })
  })
  console.log(combo)
 
  // console.log(data)
  // console.log(photos)

  // function goBack() {
  //     window.history.back();
  //   }
  
  
 

  return (
   
    <div className="myDayContainer">
      {/* <div className="headerContainer"> */}
      {/* <NewDayButton />  */}
    
      {/* </div> */}
         
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
